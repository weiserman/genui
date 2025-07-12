import "@crayonai/react-ui/styles/index.css";
import { ThemeProvider, C1Component } from "@thesysai/genui-sdk";
import { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [c1Response, setC1Response] = useState("");
  const [question, setQuestion] = useState("");

  // Light theme mode for C1 component

  const makeApiCall = async (query: string, c1Response: string) => {
    setIsLoading(true);
    setC1Response("");

    try {
      const response = await fetch("/api/chain/invoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: { query, c1Response },
        }),
      });

      const data = await response.json();
      setC1Response(data.output);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Chinook Store Data Assistant</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          makeApiCall(question, c1Response);
        }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about the music store database..."
          className="question-input"
        />
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading || !question.trim()}
        >
          {isLoading ? "Processing..." : "Ask Question"}
        </button>
      </form>

      {c1Response && (
        <div className="response-container">
          <ThemeProvider mode="light">
            <C1Component
              c1Response={c1Response}
              isStreaming={isLoading}
              updateMessage={(message) => setC1Response(message)}
              onAction={({ llmFriendlyMessage }) => {
                if (!isLoading) {
                  makeApiCall(llmFriendlyMessage, c1Response);
                }
              }}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
}

export default App;

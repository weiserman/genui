# GenUI - Natural Language Database Assistant

A full-stack application that allows users to query the Chinook music database using natural language. Built with React, FastAPI, LangChain, and powered by TheSys C1 AI model.

## Features

- 🎵 **Natural Language SQL Queries**: Ask questions about the music database in plain English
- 🤖 **AI-Powered Responses**: Uses TheSys C1 model for intelligent query processing
- 💬 **Interactive Chat Interface**: Built with TheSys GenUI SDK for rich conversational UI
- 📊 **Chinook Database**: Sample music store database with artists, albums, tracks, and sales data
- ⚡ **Real-time Responses**: Streaming support for immediate feedback

## Tech Stack

### Backend
- **FastAPI**: Modern Python web framework
- **LangChain**: AI agent framework for complex reasoning
- **SQLite**: Chinook sample database
- **TheSys C1**: Advanced language model for natural language processing

### Frontend
- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **TheSys GenUI SDK**: Specialized UI components for AI interactions

## Prerequisites

- Python 3.12+ 
- Node.js 18+
- TheSys API key from [thesys.dev](https://thesys.dev)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/weiserman/genui.git
cd genui
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python3 -m venv .
source bin/activate  # On Windows: Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Environment Configuration

Create a `.env` file in the `backend/` directory:

```bash
# backend/.env
THESYS_API_KEY=your_thesys_api_key_here
```

**Getting your TheSys API Key:**
1. Visit [thesys.dev](https://thesys.dev)
2. Sign up for an account
3. Navigate to your API dashboard
4. Generate a new API key
5. Copy the key to your `.env` file

### 4. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

## Running the Application

### Start the Backend Server

```bash
cd backend
source bin/activate  # Activate virtual environment
python main.py
```

The backend will run on `http://localhost:4001`

### Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage Examples

Once both servers are running, you can ask natural language questions about the Chinook music database:

- "How many albums does each artist have?"
- "Show me all customers from Canada"
- "Which employee has made the most sales?"
- "What are the top 5 most popular tracks?"
- "List all genres and their track counts"

## Project Structure

```
genui/
├── backend/
│   ├── db/
│   │   └── Chinook.db          # SQLite sample database
│   ├── main.py                 # FastAPI server with LangChain agent
│   ├── requirements.txt        # Python dependencies
│   └── .env                    # Environment variables (create this)
├── frontend/
│   ├── src/
│   │   ├── App.tsx            # Main React component
│   │   ├── App.css            # Styling
│   │   └── main.tsx           # React entry point
│   ├── package.json           # Node.js dependencies
│   └── vite.config.ts         # Vite configuration with proxy
├── CLAUDE.md                  # Development guidance
└── README.md                  # This file
```

## API Endpoints

- `POST /chain/invoke` - Submit natural language queries
  ```json
  {
    "input": {
      "query": "How many albums does Queen have?",
      "c1Response": ""  // Optional: previous conversation context
    }
  }
  ```

## Development

The application uses:
- **Vite proxy**: Routes `/api/*` requests to the backend server
- **Hot reload**: Both frontend and backend support live reloading
- **Type safety**: Full TypeScript support in the frontend
- **Error handling**: Comprehensive error handling and user feedback

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both frontend and backend
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues related to:
- **TheSys API**: Contact [thesys.dev](https://thesys.dev) support
- **Application bugs**: Open an issue on this repository
- **General questions**: Check the documentation in `CLAUDE.md`
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Python-based API server that provides a LangChain-powered chatbot interface for querying the Chinook digital media database using natural language. The system uses OpenAI's API (via TheSys) with function calling capabilities to execute SQL queries.

## Architecture

- **Backend**: FastAPI application (`backend/main.py`) with LangServe integration
- **AI Model**: ChatOpenAI model via TheSys API (c1-nightly model)
- **Database**: SQLite Chinook database (`backend/db/Chinook.db`) containing music store data
- **Virtual Environment**: Python 3.12 virtual environment in `backend/`

### Key Components

1. **Agent System**: Uses LangChain's OpenAI tools agent with SQL execution capability
2. **SQL Tool**: `execute_sql_query` function that safely executes queries on Chinook.db
3. **API Endpoint**: `/chain` endpoint accepts queries with optional conversation context
4. **Input Model**: `ChainInput` Pydantic model with `query` and optional `c1Response` fields

## Development Commands

### Environment Setup
```bash
cd backend
source bin/activate  # Activate virtual environment
```

### Install Dependencies
```bash
pip install -r requirements.txt
# Note: If you encounter pydantic v1/v2 compatibility issues, 
# the requirements.txt uses flexible versioning to resolve conflicts
```

### Run the Server
```bash
python main.py
# Server runs on localhost:4001
```

### API Usage
The server exposes a `/chain` endpoint that accepts POST requests with:
- `query`: Natural language question about the music database
- `c1Response`: Optional context from previous conversation

## Environment Variables

Create a `.env` file in the `backend/` directory with:
```
THESYS_API_KEY=your_thesys_api_key_here
```

Required variables:
- `THESYS_API_KEY`: API key for TheSys OpenAI-compatible endpoint

## Database Information

The Chinook database contains tables for:
- Artists, Albums, Tracks
- Customers and purchase history  
- Employees and sales data
- Playlists and media types

The SQL tool provides safe query execution with error handling and formatted table output.
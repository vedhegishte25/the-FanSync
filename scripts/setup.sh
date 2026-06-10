#!/bin/bash

echo "Setting up FanSync..."

# Create virtual environment
cd server
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy env file
cp .env.example ../.env.example
echo "Environment file ready."

# Initialize database
python -c "from app.db.init_db import init_db; init_db()"
echo "Database initialized."

echo "FanSync setup complete."
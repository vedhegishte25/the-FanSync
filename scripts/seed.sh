#!/bin/bash

echo "Seeding FanSync database..."

cd server
source venv/bin/activate

# Seed leagues
python database/seeds/seed_leagues.py
echo "Leagues seeded."

# Seed teams
python database/seeds/seed_teams.py
echo "Teams seeded."

echo "Database seeding complete."
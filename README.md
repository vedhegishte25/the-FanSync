# FanSync — See Every Moment As It Happens.

<img width="946" height="433" alt="Screenshot 2026-06-14 014338" src="https://github.com/user-attachments/assets/32bbc091-5395-462b-a16b-a0b971163fb1" />

FanSync is a live sports web application built for football and cricket fans who want real-time scores, schedules, standings and news all in one place. It pulls live data from trusted sports APIs and refreshes automatically so you never miss a moment. The app features a clean, premium design inspired by leading sports platforms like ESPN and SofaScore.

---

## Features

- **Live Scores** — Real-time football and cricket match scores updated every 2 hours automatically
- **FIFA World Cup 2026** — Dedicated tournament page with a cinematic splash screen, full fixture list and match details for all rounds from Group Stage to the Final
- **League Standings** — Tables for Premier League, La Liga, Serie A, Bundesliga, Ligue 1, MLS and Champions League
- **Sports News** — Latest football and cricket headlines aggregated from trusted global news sources via NewsAPI
- **Match Insights** — Auto-generated match summaries and live stats pulled directly from ongoing matches

---

## Tech Stack

**Frontend**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

**Backend**
- FastAPI (Python)
- SQLAlchemy — ORM for database models and queries
- PostgreSQL — relational database for storing match, team and league data
- APScheduler — handles automatic background refresh of live scores every 2 hours
- Alembic — database migration management

**APIs Used**
- API-Football (api-sports.io) — football fixtures, standings and live scores
- CricAPI — live cricket matches and series data
- NewsAPI — latest sports headlines

---

## FIFA World Cup 2026 Page
<img width="946" height="437" alt="Screenshot 2026-06-14 014453" src="https://github.com/user-attachments/assets/1cfdb724-c756-4870-b104-806c0e109fc8" />


The FIFA World Cup 2026 page is the most premium section of FanSync. When you navigate to the page for the first time during the tournament, a full-screen cinematic splash animation plays — featuring the World Cup trophy, bold typography and the signature gold color palette of the tournament. The page then reveals a detailed hero banner with tournament statistics including the number of teams, matches, groups and host cities. A round selector lets you filter fixtures by Group Stage, Round of 32, Round of 16, Quarter Finals, Semi Finals and the Final. All fixtures are pulled live from the API-Football feed for the 2026 season. The World Cup link and homepage banner appear automatically from June 13 and disappear 12 hours after the Final on July 20, 2026.

---

## Live Matches
<img width="941" height="427" alt="Screenshot 2026-06-14 014359" src="https://github.com/user-attachments/assets/b3158aeb-6a4d-4bd4-b4a4-0789bd3b9ff9" />
<br>
<img width="949" height="437" alt="Screenshot 2026-06-14 014428" src="https://github.com/user-attachments/assets/e1babfe9-975a-4156-889c-74175a03976b" />

The Live Matches page aggregates real-time scores from both football and cricket in a single unified view. Football data is sourced from API-Football covering hundreds of leagues worldwide, while cricket data comes from CricAPI covering international and domestic matches. Scores and match statuses refresh automatically every 2 hours in the background without requiring a page reload.

---
## News and Insights
<img width="947" height="435" alt="Screenshot 2026-06-14 014515" src="https://github.com/user-attachments/assets/ca9af3f1-73cb-49c5-b4d5-295b10b1b777" />
<br>
<img width="947" height="434" alt="Screenshot 2026-06-14 014536" src="https://github.com/user-attachments/assets/6a67bd7e-46cc-41d2-b11f-529707e866e6" />

FanSync's Insights section automatically generates short match summaries from live data, giving you a quick snapshot of what's happening across ongoing football and cricket matches. It pulls real-time scores and match statuses and turns them into readable updates without you having to dig through raw stats. Insights refresh every 2 hours alongside the live scores.

---
## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/vedhegishte25/the-FanSync.git
cd the-FanSync
```

### 2. Setup backend
```bash
cd server
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Add environment variables
```bash
# Fill in your API keys in server/.env
API_FOOTBALL_KEY=your_key
CRICAPI_KEY=your_key
NEWSAPI_KEY=your_key
```

### 4. Run the backend
```bash
uvicorn app.main:app --reload
```

### 5. Setup and run frontend
```bash
cd ../client
npm install
npm run dev
```

### 6. Open the app
http://localhost:3000

---

## Developer

**Ved Hegishte**
- GitHub: [@vedhegishte25](https://github.com/vedhegishte25)
- Email: vedhegishte11@gmail.com

---

## License

MIT License — feel free to use, modify and distribute this project with attribution.

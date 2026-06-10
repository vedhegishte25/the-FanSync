-- FanSync Database Schema

CREATE TABLE IF NOT EXISTS leagues (
    id SERIAL PRIMARY KEY,
    external_id INTEGER UNIQUE NOT NULL,
    name VARCHAR NOT NULL,
    sport VARCHAR NOT NULL,
    country VARCHAR,
    logo_url VARCHAR,
    season INTEGER
);

CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    external_id INTEGER UNIQUE NOT NULL,
    name VARCHAR NOT NULL,
    sport VARCHAR NOT NULL,
    league_id INTEGER REFERENCES leagues(id),
    country VARCHAR,
    logo_url VARCHAR
);

CREATE TABLE IF NOT EXISTS matches (
    id SERIAL PRIMARY KEY,
    external_id INTEGER UNIQUE NOT NULL,
    sport VARCHAR NOT NULL,
    league_id INTEGER REFERENCES leagues(id),
    home_team_id INTEGER REFERENCES teams(id),
    away_team_id INTEGER REFERENCES teams(id),
    home_score INTEGER,
    away_score INTEGER,
    status VARCHAR NOT NULL,
    match_date TIMESTAMP NOT NULL,
    venue VARCHAR
);

CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    description VARCHAR,
    url VARCHAR NOT NULL,
    source VARCHAR,
    sport VARCHAR,
    published_at TIMESTAMP,
    image_url VARCHAR
);

CREATE TABLE IF NOT EXISTS insights (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    body VARCHAR NOT NULL,
    sport VARCHAR,
    match_id INTEGER,
    created_at TIMESTAMP
);
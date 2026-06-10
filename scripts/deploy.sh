#!/bin/bash

echo "Deploying FanSync..."

# Pull latest changes
git pull origin main

# Build and restart containers
docker-compose down
docker-compose build
docker-compose up -d

echo "FanSync deployed successfully."
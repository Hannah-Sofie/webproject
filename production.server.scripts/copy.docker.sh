#!/bin/bash
# copy compose and .env files to our server from a shared repo

set -ex

# constants
REPO_URL="https://raw.githubusercontent.com/Hannah-Sofie/webproject/main"
COMPOSE_FILE="docker-compose.yml"
ENV_FILES=(".env" ".mongo.env")
WD="/home/team3/project"

# 1 - copy compose
#echo "${REPO_URL}/${COMPOSE_FILE}"
#curl -sS "${REPO_URL}/${COMPOSE_FILE}"

curl -sS "${REPO_URL}/${COMPOSE_FILE}" |
  sed '/build: ./d' |
  sed "s|image: journal-image|image: hannahsofie/clockbox:latest|" > "${WD}/${COMPOSE_FILE}"

# 2 - copy env files
for enF in "${ENV_FILES[@]}"; do
  curl -sS "${REPO_URL}/${enF}" > "${WD}/${enF}"
done

set +ex
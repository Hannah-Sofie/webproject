#!/bin/bash

set -e

WD="$(cd "$(dirname "$0")" && pwd)"

bash "${WD}/copy.docker.sh"
bash "${WD}/run.it.sh"

set +e
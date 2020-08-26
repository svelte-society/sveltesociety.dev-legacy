#!/bin/sh
set -e

docker build . -f scripts/docker/Dockerfile -t routify-starter
echo "__________"
echo "you can run this example from your project root with"
echo "   docker-compose -f scripts/docker/docker-compose.yml up -d"
echo ""
echo "or "
echo "   docker run -d -p 5000:5000 -p 5005:5005 routify-starter"
echo ""
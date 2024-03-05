#!/usr/bin/env bash

# Update package index
sudo apt-get update

# Install Python 3 and MySQL Server
sudo apt-get install -y python3 mysql-server

# Install Python packages
sudo pip install mysql-connector-python Flask SQLAlchemy

# Setup database to be populated
cat tomeAPP_sql_query.sql | mysql

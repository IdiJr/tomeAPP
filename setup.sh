#!/usr/bin/env bash

# Update package index
apt-get update

# Install Python 3 and MySQL Server
apt-get install -y python3 mysql-server

# Install Python packages
pip install mysql-connector-python Flask SQLAlchemy

# Setup database to be populated
systemctl enable mysql
systemctl start mysql
cat tomeApp_sql_query.sql | mysql

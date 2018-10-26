const http = require('http');
const app = require('./app');
const path = require('path');
const fs = require('fs');
const express = require('express');
const port = "3000";

const server = http.createServer(app);
server.listen(port);

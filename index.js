// Import the http module from Node.js
const http = require('http');

// Define the port you want to listen to
const PORT = 3000;

// Create a server that responds to all requests with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World by shivam!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

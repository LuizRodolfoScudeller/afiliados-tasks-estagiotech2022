const express = require('express')

const PORT = process.env.WEBAPP_PORT || 8002

const path = require('path')
const http = require('http')

const app = express();
const rootPath = path.join(__dirname, '../dist');

app.use(express.static(rootPath, { index: false }))

app.use(({res, next}) => {
  res.header('X-Robots-Tag', 'noindex')
  next()
})

app.get('/inicio', ({ res }) => {
  res.sendFile('index.html', { root: rootPath  } )
});

app.get('*', ({ res }) => {
  res.status(301).redirect('https://www.google.com.br')
});

const server = http.createServer(app);

server.listen(PORT);
console.log(`Server running on ${PORT}`);
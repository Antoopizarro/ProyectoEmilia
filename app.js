const express = require('express')
const path = require('path')
const port = 3030;

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/music', (req, res) => res.sendFile(path.join(__dirname, 'views', 'music.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));

app.listen(port, ()=> console.log('Servidor corriendo  en http://localhost:' + port))
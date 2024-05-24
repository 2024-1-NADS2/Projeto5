const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  host: 'fernandobd.mysql.database.azure.com',
  user: 'Fernando',
  password: '28Do06De1997@',
  database: 'fernandodb',
});

app.post('/submit-form', (req, res) => {
  const { fullName, phone, email, aboutYou } = req.body;

  db.query(
    'INSERT INTO FormResponses (fullName, phone, email, aboutYou) VALUES (?, ?, ?, ?)',
    [fullName, phone, email, aboutYou],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Dados inseridos.');
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
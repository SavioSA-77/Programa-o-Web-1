const express = require('express');
const app = express();
const port = 3000;

app.get('/about', (req, res) => {
  res.send('Essa é a página sobre nós.');
});

app.post('/data', (req, res) => {
  res.send('Dados recebidos com sucesso!');
});

app.get('/users', (req, res) => {
    res.send('Olá, coloque na url /userlogin para fazer login');
});

app.get('/users/:userid', (req, res) => {
  const { userid } = req.params;
  res.redirect(`/users/${userid}/usersignin`);
});

app.get('/users/:userid/usersignin', (req, res) => {
  const { userid } = req.params;
  res.send(`Boas vindas ${userid}!`);
});

app.get('/users/:usersigin/userlogin', (req, res) => {
  res.send('Insira um ID depois de /users para fazer login.');
});

app.use((req, res) => {
  res.status(404).json({ erro: 'Página não encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

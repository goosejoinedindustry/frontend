import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../', 'client')));

const head = {company: 'Industry'};
app.get('*', (req, res) => {
  res.render('index', {head});
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});

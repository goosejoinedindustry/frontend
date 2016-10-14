import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

// Server side templating from ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../', 'client')));

// Loads routes
routes(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});

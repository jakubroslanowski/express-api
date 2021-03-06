const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');
app.use(cors());
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
app.use((req, res) => {
  res.status(404).send('Error 404...');
});
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

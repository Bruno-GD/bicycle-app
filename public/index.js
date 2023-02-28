const app = require('./server/app');
const {
  PORT
} = require('./config');
app.listen(PORT, () => {
  console.log(`Site hosted on http://localhost:${PORT}/`);
});
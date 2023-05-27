const app = require('./serverApp');

require('dotenv').config();
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app2'

ReactDOM.render(<App />, document.getElementById('root'))

const app = require("./app2");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

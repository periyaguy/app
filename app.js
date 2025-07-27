// app.js
const express = require('express');
const app = express();

// Azure uses this environment variable for port
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('👋 Hello from Azure Free Tier Node.js App!');
});

app.listen(port, () => {
  console.log(`✅ App is running on port ${port}`);
});

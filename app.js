const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "website" directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

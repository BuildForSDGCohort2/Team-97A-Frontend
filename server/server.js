const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const BUILD_PATH = path.join(__dirname, "..", "build/");

// Serve static files from the React frontend build
app.use(express.static(path.join(BUILD_PATH)));

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  const index = path.join(BUILD_PATH, "index.html");
  res.sendFile(index);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

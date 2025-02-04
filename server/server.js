const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

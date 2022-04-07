// Imports
const expres = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

// Variables
const PORT = process.env.PORT || 9898;

// App setup
const app = expres();
app.use(cors());
app.use(expres.json());

// Routes
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`API running on port:${PORT}`);
});

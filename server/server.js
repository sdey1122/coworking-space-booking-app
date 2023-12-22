const express = require("express");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3050;

app.listen(port, () => console.log(`Server listening on port ${port}`));

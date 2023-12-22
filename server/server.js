const express = require("express");

const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const port = process.env.PORT || 3050;
app.use(express.json());

const usersRoute = require("./routes/usersRoutes");

app.use("/api/users", usersRoute);
app.listen(port, () => console.log(`Server listening on port ${port}`));

const express = require("express");
const app = express();

const appRoutes = require("./routes/app.routes");

app.use(express.json());
app.use(appRoutes);

app.listen(3000);

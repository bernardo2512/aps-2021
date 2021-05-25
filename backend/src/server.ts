import "./database";
import { routes } from "./routes";

const cors = require('cors');
const express = require("express")
const app = express();

app.use(express.json())
app.use(cors())
app.use(routes);

app.listen(3000, () => {
    console.log("Server is running in port 3000 ...")
})
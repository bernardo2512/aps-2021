import "./database";
import { routes } from "./routes";
const express = require("express")
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(routes);
app.use(cors())

app.listen(3000, () => {
    console.log("Server is running in port 3000 ...")
})
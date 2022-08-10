const express = require("express");
const app = express();
app.use(express.json());

app.use('/',require('./routes/index'));




app.listen(8084,console.log(`server is listening on 8084`))




const express = require("express");
const path = require("path");

let initial_path = path.join(__dirname, "public");
let app = express();
app.use(express.static(initial_path));


app.get('/', (req, res) => {
    res.send(path.join(initial_path, "index.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(process.env.PORT||3000, () => {
    console.log('Port 3000');
})
var express = require("express");
var app = express()


var cors = require("cors")
app.use(cors({optionsSuccessStatus: 200}))


app.use(express.static("public"))


app.get("/api/timestamp/:date_str?", function (req, res) {

    const {date_str} = req.params.url

    let date;

    if(!date) {
        date = new Date()
    } else {
        date = new Date(date_str)
    }

    return res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })

})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/api/hello", function(req, res) {
    res.sendFile({greeting: "Hello api"})
})

var listener = app.listen(8000, function () {
    console.log("Your app is listening on port 8000")
})
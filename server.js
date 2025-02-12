const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let events = [
  { name: "Tech Conference 2025", date: "2025-05-20", location: "New York" },
  { name: "Startup Meetup", date: "2025-06-15", location: "San Francisco" }
];

app.get("/", (req, res) => {
  res.render("index", { events });
});

// app.get("/add-event", (req, res) => {
//   res.render("add-event");
// });

// app.post("/add-event", (req, res) => {
//   const { name, date, location } = req.body;
//   events.push({ name, date, location });
//   res.redirect("/");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

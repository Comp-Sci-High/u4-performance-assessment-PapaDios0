
const express = require('express')
const app = express()

const mainGarage = {
  cars: [
    {
      "Username": "CarCollector101",
      "CarName": "Bugatti Type 57SC Atlantic",
      "Year built": 1936,
      "How many are left": 2,
      "Price": 40000000,
      "ForSale": false,
      "Description": "One of the most beautiful and rarest cars ever made, featuring an iconic teardrop design.",
      "ImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxagfrLNF_mTBCj8i_PndHBZoP0Lw2MNBc6Q&s"
    },
    {
      "Username": "RareFinds",
      "CarName": "Ferrari 250 GTO",
      "Year built": 1962,
      "How many are left": 36,
      "Price": 70000000,
      "ForSale": true,
      "Description": "A legendary Ferrari with racing pedigree and stunning design.",
      "ImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCDD2LpHRgcl3LiKUYZtbWF483khvTQiWPQ&s"
    },
    {
      "Username": "ClassicHunter",
      "CarName": "Aston Martin DB4 GT Zagato",
      "Year built": 1960,
      "How many are left": 19,
      "Price": 13000000,
      "ForSale": false,
      "Description": "A collaboration between Aston Martin and Zagato, built for performance and beauty.",
      "ImageURL": "https://example.com/astonmartindb4.jpg"
    },
    {
      "Username": "SpeedyCollector",
      "CarName": "McLaren F1 LM",
      "Year built": 1992,
      "How many are left": 5,
      "Price": 20000000,
      "ForSale": true,
      "Description": "One of the fastest naturally aspirated cars, built to honor McLaren's Le Mans victory.",
      "ImageURL": "https://example.com/mclarenf1lm.jpg"
    },
    {
      "Username": "VintageVibes",
      "CarName": "Mercedes-Benz 300SL Gullwing",
      "Year built": 1952,
      "How many are left": 1400,
      "Price": 1500000,
      "ForSale": false,
      "Description": "Famous for its gullwing doors, this Mercedes is a timeless classic.",
      "ImageURL": "https://example.com/mercedes300sl.jpg"
    },
    {
      "Username": "HiddenGems",
      "CarName": "Porsche 917K",
      "Year built": 1970,
      "How many are left": 12,
      "Price": 16000000,
      "ForSale": true,
      "Description": "A dominant race car that cemented Porsche's place in endurance racing history.",
      "ImageURL": "https://example.com/porsche917k.jpg"
    },
    {
      "Username": "ExoticDreams",
      "CarName": "Lamborghini Miura P400 SV",
      "Year built": 1971,
      "How many are left": 150,
      "Price": 3500000,
      "ForSale": false,
      "Description": "The car that defined the supercar genre with its revolutionary mid-engine design.",
      "ImageURL": "https://example.com/lambomiura.jpg"
    },
    {
      "Username": "OldSchoolRides",
      "CarName": "Shelby Cobra 427",
      "Year built": 1965,
      "How many are left": 50,
      "Price": 2500000,
      "ForSale": true,
      "Description": "A muscular, lightweight sports car that remains an American icon.",
      "ImageURL": "https://example.com/shelbycobra427.jpg"
    },
    {
      "Username": "JDMKing",
      "CarName": "Toyota 2000GT",
      "Year built": 1967,
      "How many are left": 337,
      "Price": 1200000,
      "ForSale": false,
      "Description": "Japan’s first supercar, blending elegance and performance.",
      "ImageURL": "https://example.com/toyota2000gt.jpg"
    },
    {
      "Username": "LeMansLegend",
      "CarName": "Ford GT40",
      "Year built": 1966,
      "How many are left": 100,
      "Price": 9000000,
      "ForSale": true,
      "Description": "Built to defeat Ferrari at Le Mans, a true racing legend.",
      "ImageURL": "https://example.com/fordgt40.jpg"
    }
  ]
}
  

  app.set("view engine", "ejs")

  app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })


  app.use(express.static(__dirname +"/public"))

  app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

    app.get('/mainGarage', (req, res) => {
      res.render('main.ejs', mainGarage)
    })

    app.use((req, res, next) => {
      res.status(404).send("404 NOT FOUND")
  })

  app.listen(3000, () => {
    console.log("Server running")
  })
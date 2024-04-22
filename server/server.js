const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8080;
const ITEMS_PER_PAGE = 1000;
const TOTAL_ITEMS = 1000;

const CAR_BRANDS = [
  "Audi",
  "BMW",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Mercedes-Benz",
];
const CAR_MODELS = {
  audi: ["A1", "A3", "A4", "A5", "A6"],
  bmw: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series"],
  cadillac: ["Allante", "BLS", "De Ville", "Escalade", "SRX"],
  chevrolet: ["Astro", "Aveo", "Corvette", "Lacetti", "Camaro"],
  chrysler: ["300C", "Sebring", "Windsor", "300SL", "Voyager"],
  dodge: ["Avenger", "Charger", "Caliber", "Challenger"],
  ferrari: ["458", "458GT", "458GT Coupe", "Mondial", "Roma"],
  fiat: ["500", "Punto", "Coupe", "Panda", "Doblo"],
  ford: ["Focus", "Fiesta", "Mondeo", "Mustang", "C-Max"],
  honda: ["Accord", "Civic", "CR-V", "HR-V", "FR-V"],
  hyundai: ["Elantra", "Tucson", "Accent", "IONIC", "Cona"],
  infiniti: ["Q30", "Q50", "Q60", "QX50", "QX60"],
  jaguar: ["F-Pace", "F-Type", "XJR", "XJS", "XF"],
  jeep: ["Wrangler", "Cherokee", "Grand Cherokee", "Compass", "Gladiator"],
  kia: ["Ceed", "ProCeed", "Rio", "Stinger", "Sorento"],
  "mercedes-benz": ["CLK", "SLK", "C Class", "GLE", "E Class"],
};

// Generate a dataset of random cars
const generateItems = () => {
  const items = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    const randomCarBrand = CAR_BRANDS[Math.floor(Math.random() * CAR_BRANDS.length)];
    const randomCarModel = CAR_MODELS[randomCarBrand.toLowerCase()][Math.floor(Math.random() * CAR_MODELS[randomCarBrand.toLowerCase()].length)];
    items.push({ id: i, name: `${randomCarBrand} ${randomCarModel}`, price: Math.floor(Math.random() * 1000) + 1500 });
  }
  return items;
};

// Memoized items to prevent repeated generation
const memoizedItems = new Map();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from this origin
    credentials: true, // Include credentials in CORS requests
  })
);

// Endpoint to fetch items
app.get("/api/products", (req, res) => {
  const page = parseInt(req.query.page) || 1;

  let items;
  if (memoizedItems.has(page)) {
    items = memoizedItems.get(page);
  } else {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, TOTAL_ITEMS);
    items = generateItems().slice(startIndex, endIndex);
    memoizedItems.set(page, items);
  }

  res.json(items);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

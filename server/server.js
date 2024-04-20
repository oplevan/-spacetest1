const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8080;
const ITEMS_PER_PAGE = 1000;
const TOTAL_ITEMS = 10000000;

const CAR_BRANDS = [
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Genesis",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Pagani",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

// Simulated data generation function
const generateItems = () => {
  const items = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    const randomCar = CAR_BRANDS[Math.floor(Math.random() * CAR_BRANDS.length)];
    items.push({ id: i, name: `${randomCar} ${i}`, price: Math.floor(Math.random() * 1000) + 1500 });
  }
  return items;
};

// Memoized items to prevent repeated generation
const memoizedItems = new Map();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from our client
    credentials: true, // Include credentials in CORS requests
  })
);

// Endpoint to fetch items
app.get("/api/items", (req, res) => {
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

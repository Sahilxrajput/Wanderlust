require('dotenv').config();

const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");


async function main() {
  try {
      const connectionDb = await mongoose.connect(process.env.DB_URL); 
        console.log(`Mongo Connected DB Host ${connectionDb.connection.host}`);
  } catch (e) {
    console.error("Database connection error:", e);
  }
}

main()

// scripts/create-admin.js
require("dotenv").config({ path: ".env.local" });

const mongoose = require("mongoose");
// Use .default because the original modules are ES Modules
const dbConnect = require("../lib/dbConnect").default;
const Admin = require("../models/Admin").default;

const createAdmin = async () => {
  const [username, password] = process.argv.slice(2);

  if (!username || !password) {
    console.error("Error: Please provide a username and password.");
    console.log("Usage: node scripts/create-admin.js <username> <password>");
    process.exit(1);
  }

  try {
    await dbConnect();
    console.log("Database connected...");

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      console.error(`Error: Admin with username "${username}" already exists.`);
      process.exit(1);
    }

    console.log(`Creating admin: ${username}...`);
    // The pre-save hook in the Admin model will automatically hash the password
    const newAdmin = await Admin.create({ username, password });

    console.log("✅ Admin user created successfully!");
    console.log(`   ID: ${newAdmin._id}`);
    console.log(`   Username: ${newAdmin.username}`);
  } catch (error) {
    console.error("❌ Failed to create admin user:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed.");
  }
};

createAdmin();

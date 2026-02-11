const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
    const dbStatus = mongoose.connection.readyState;

    const healthStatus = {
        server: "UP",
        database: dbStatus === 1 ? "UP" : "DOWN",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    };

    const isHealthy = healthStatus.database === "UP";

    return res.status(isHealthy ? 200 : 503).json(healthStatus);
});

module.exports = router;

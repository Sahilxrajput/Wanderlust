const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 100 requests per window
    message: {
        status: "error",
        message: "Too many requests. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = apiLimiter;

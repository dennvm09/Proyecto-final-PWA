require("dotenv").config("./.env");
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/error');


connectDB();

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/api/auth', require ('./routes/auth'));
app.use('/api/private', require ('./routes/private'));

// ErrorHandler (debe ser lo último del middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Para evitar si hay errores raros al conectar la DB
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
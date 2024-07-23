import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
//MIDDLEWARES
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static('public'));
app.use(express.json({ limit: '16kb' }));

import userRoutes from "./routes/userRoute.js";
import driverRoutes from "./routes/driverRoute.js";
import rideRoutes from "./routes/rideRoute.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/driver", driverRoutes);
app.use("/api/v1/ride", rideRoutes);
//http://localhost:8000/api/v1/users

export {app}

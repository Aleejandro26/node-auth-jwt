import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from './routes/auth.Routes'
import usersRoutes from './routes/user.Routes'

const app = express();

app.use(express.json());

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)

export default app;

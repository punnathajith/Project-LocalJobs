import express from 'express';
import cors from 'cors';            
import dotenv from 'dotenv';
import userRoutes from './presentation/routes/userRoutes';
import jobRoutes from './presentation/routes/jobRoutes';
import locationRoutes from './presentation/routes/locationRoutes';
// import companyRoutes from './presentation/routes/companyRoutes';
// import adminRoutes from './presentation/routes/adminRoutes';

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,              
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/job", jobRoutes);
app.use("/api/location", locationRoutes);

// app.use("/company", companyRoutes);
// app.use("/admin", adminRoutes);





export default app;
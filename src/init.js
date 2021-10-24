// Model
import './db';
import Video from './models/Video';

// Other module import
import app from "./server";
import dotenv from "dotenv";



dotenv.config();

const PORT = process.env.PORT || 4500;

const handleListening = () =>
  console.log(`✅ Server listenting on port ${PORT} 🚀`);

app.listen(PORT, handleListening);

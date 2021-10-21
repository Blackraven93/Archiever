import app from "./server";
import dotenv from "dotenv";
// Other module import

dotenv.config();

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✅ Server listenting on port ${PORT} 🚀`);

app.listen(PORT, handleListening);

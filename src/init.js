import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
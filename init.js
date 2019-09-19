import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Book";
import "./models/Comment";

// process.env에서 대상을 불러오되 못찾으면 4000번으로 연결
// 이러면 다른 곳에서 안 보인다.
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`☑️  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

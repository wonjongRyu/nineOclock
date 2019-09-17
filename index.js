import express from "express"; // node module 속의 express를 가져온다.
const app = express(); // express를 실행해서 app에 담는다.

const PORT = 4000; // PORT 번호

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Welcome Home!");

const handleProfile = (req, res) => res.send("This is my Profile!");

app.get("/", handleHome);
app.get("/profile", handleProfile);

// 누군가 http://localhost:4000 으로 접속하면 CallBack함수 실행
app.listen(PORT, handleListening);

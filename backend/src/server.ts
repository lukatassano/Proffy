import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  return response.json({ ok: true });
});

app.listen(3333, () => {
  console.log("server started!");
});

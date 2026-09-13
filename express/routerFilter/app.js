const express = require("express");

const app = express();
const orderRouter = require("./routers/orders");
const userRouter = require("./routers/users.js");

const PORT = 3000;

app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on htttp://localhost:${PORT}`);
});

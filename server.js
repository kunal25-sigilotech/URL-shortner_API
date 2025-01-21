import mongoose from "mongoose";
import app from "./app.js";

process.on("uncaughtException", (err) => {
  console.log(
    `Uncaught exception has been occured --->${err.name}: ${err.message}`
  );
  console.log("Process has been shut down...");
  process.exit(1);
});

const port = process.env.PORT;
const db = process.env.DB_CONNECTION_STR.replace(
  "<db_password>",
  encodeURIComponent(process.env.DB_PASSWORD)
);

mongoose.connect(db).then(() => console.log("DB connection is successful"));

const server = app.listen(port, () =>
  console.log(`Listening for request of port:${port}`)
);

process.on("unhandledRejection", (err) => {
  console.log(
    `Unhandled rejection has been occured ---> ${err.name}:${err.message}`
  );
  server.close(() => {
    console.log("Server is shutting down...");
    process.exit(1);
  });
});

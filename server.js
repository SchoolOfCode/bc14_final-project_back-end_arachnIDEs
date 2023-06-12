// START HERE

import express from "express";
// import morgan from "morgan";

// import { bookRoutes } from "./routes/books.js";
import { listingRoutes } from "./routes/listings.js";

const app = express();
const PORT = process.env.PORT;

// app.use(morgan("dev"));
// The following line could perhaps be the crucial step for displaying the result of the "view section" of the MVC (Model View Controller) architecture. In this case, as there is no view folder, I am guessing that the view section IS the public folder.
// app.use(express.static("public"));
// app.use(express.json());

// Now go to the routes folder. (Start with the authors ones for now)
app.use("/api/listings", listingRoutes);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

// According to the video ( https://www.youtube.com/watch?v=mtZdybMV4Bw ), a controller is what intially receives the request from the client. It then passes this to the model which will communicate with the database. Once the model has received a response from the databsae, it should then pass it back to the controller, which should then in turn pass it to the view section, which will get the data ready to present to the user. I'm guessing as there is no view folder that the view is the public folder.

// The following appears to import (as an object called authorModel) all exports (in this case, the functions searchAuthorByName, getAuthors, getAuthorById, createAuthor, updateAuthorById, and deleteAuthorById) from the appropriate file in the models folder.
import * as listingModel from "../models/listings.js";

// export async function searchlistingsByName(req, res, next) {
//   if (req.query.search !== undefined) {
//     const listings = await listingModel.searchlistingsByName(req.query.search);
//     return res.json({ success: true, payload: listings });
//   }
//   next();
// }

export async function getlistings(req, res) {
  console.log("Made it to controller.");
  const listings = await listingModel.getlistings();
  res.json({ success: true, payload: listings });
}

// export async function getlistingById(req, res) {
//   const listing = await listingModel.getlistingById(req.params.id);
//   res.json({ success: true, payload: listing });
// }

export async function createlisting(req, res) {
  console.log("Made it to controller.");
  console.log(req);
  const data = req.body;
  console.log(data);
  const listing = await listingModel.createlisting(data);
  res.json({ success: true, payload: listing });
}

// export async function updatelistingById(req, res) {
//   const data = req.body;
//   const listing = await listingModel.updatelistingById(req.params.id, data);
//   res.json({ success: true, payload: listing });
// }

// export async function deletelistingById(req, res) {
//   const listing = await listingModel.deletelistingById(req.params.id);
//   res.json({ success: true, payload: listing });
// }

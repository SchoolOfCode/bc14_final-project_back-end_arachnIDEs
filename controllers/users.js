// According to the video ( https://www.youtube.com/watch?v=mtZdybMV4Bw ), a controller is what intially receives the request from the client. It then passes this to the model which will communicate with the database. Once the model has received a response from the databsae, it should then pass it back to the controller, which should then in turn pass it to the view section, which will get the data ready to present to the user. I'm guessing as there is no view folder that the view is the public folder.

// The following appears to import (as an object called authorModel) all exports (in this case, the functions searchAuthorByName, getAuthors, getAuthorById, createAuthor, updateAuthorById, and deleteAuthorById) from the appropriate file in the models folder.
import * as usersModel from "../models/users.js";

// export async function searchUsersByName(req, res, next) {
//   if (req.query.search !== undefined) {
//     const users = await userModel.searchUsersByName(req.query.search);
//     return res.json({ success: true, payload: users });
//   }
//   next();
// }

export async function getUsers(req, res) {
  console.log("Made it to controller.");
  const users = await usersModel.getUsers();
  res.json({ success: true, payload: users });
}

export async function getUserById(req, res) {
  const user = await usersModel.getUserById(req.params.id);
  res.json({ success: true, payload: user });
}

export async function createUser(req, res) {
  console.log("Made it to controller.");
  // console.log(req);
  const data = req.body;
  console.log(data);
  const user = await usersModel.createUser(data);
  res.json({ success: true, payload: user });
}

// export async function updateUserById(req, res) {
//   const data = req.body;
//   const user = await userModel.updateUserById(req.params.id, data);
//   res.json({ success: true, payload: user });
// }

// export async function deleteUserById(req, res) {
//   const user = await userModel.deleteUserById(req.params.id);
//   res.json({ success: true, payload: user });
// }

import express from "express";

// The following appears to import (as an object called authorController) all exports (in this case, the functions searchAuthorByName, getAuthors, getAuthorById, createAuthor, updateAuthorById, and deleteAuthorById) from the appropriate file in the controllers folder.
import * as usersController from "../controllers/users.js";

/* Certainly! In this line, we are exporting an instance of an Express router, which is stored in the  authorRoutes  constant. An Express router provides a way to modularize and organize your application's routes, or API endpoints.  
 
Routes are the endpoints that your clients can use to communicate with your server and perform various operations, such as requesting data or posting new data. Express Router provides an easy way to separate these routes into smaller, manageable groups, making it easier to maintain and scale your application.  
 
By using the  express.Router()  method, we are creating a new instance of an Express Router object, which can be used to define our author-related routes, like GET, POST, etc. This router instance is exported, so that other modules of the application can import it and use it to define author-related routes in their own modules. */
// Sure enough, back in week 9 before we were using the MVC (Model View Controller) architecture, we would have just used something like const app = express(); i.e. no Router(). This may be down to a mixture of the lack of modularising and also not needing separate routers for (e.g.) authors and books etc.
export const usersRoutes = express.Router();

// usersRoutes.get("/", usersController.searchUsersByName);

usersRoutes.get("/", usersController.getUsers);

usersRoutes.get("/:id", usersController.getUserById);

usersRoutes.post("/", usersController.createUser);

// usersRoutes.patch("/:id", usersController.updateUsersById);

// usersRoutes.delete("/:id", usersController.deleteUsersById);

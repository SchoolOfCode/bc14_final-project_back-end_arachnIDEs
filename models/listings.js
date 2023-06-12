// According to the video ( https://www.youtube.com/watch?v=mtZdybMV4Bw ), a model takes the request received by the controller and communicates with the database. Sure enough, in this file is where the SQL queries appear to happen. After it has received a response from the database, it should pass the response back to the controller (which will then pass it to the view section).

// The following imports the pool from where it is declared and opened in the index.js in the db folder.
import { pool } from "../db/index.js";

export async function getlistings() {
  try {
    const result = await pool.query(
      "SELECT first_name || ' ' || last_name AS full_name FROM listings"
    );
    return [...result.rows];
  } catch (error) {
    // Handle the error appropriately (e.g., logging, error response)
    console.error("Error retrieving listings:", error);
    throw error; // Rethrow the error if necessary
  }
}

// export async function searchlistingsByName(searchTerm) {
//   // Query the database and return all listings that have a name matching the searchTerm
//   try {
//     const values = [searchTerm];
//     const queryText =
//       "SELECT first_name || ' ' ||  last_name AS listing_name FROM listings WHERE first_name = $1 OR last_name = $1";
//     const result = await pool.query(queryText, values);
//     return [...result.rows];
//   } catch (error) {
//     // Handle the error appropriately (e.g., logging, error response)
//     console.error("Error retrieving listings:", error);
//     throw error; // Rethrow the error if necessary
//   }
// }

// export async function getlistingById(id) {
//   // Query the database and return the book with a matching id
//   try {
//     const values = [id];
//     const queryText =
//       "SELECT first_name || ' ' ||  last_name AS listing_name FROM listings WHERE id = $1";
//     const result = await pool.query(queryText, values);
//     return result.rows;
//   } catch (error) {
//     // Handle the error appropriately (e.g., logging, error response)
//     console.error("Error retrieving listings:", error);
//     throw error; // Rethrow the error if necessary
//   }
// }

// export async function createlisting(listing) {
//   // Query the database to create an listing and return the newly created listing
//   try {
//     // console.log(listing);
//     const values = [listing.first_name, listing.last_name];
//     // const values = [listing];
//     const queryTextForCreate =
//       "INSERT INTO listings (first_name, last_name) VALUES ($1, $2)";
//     await pool.query(queryTextForCreate, values);

//     // Once we're done the above, we want to return the newly create row, so we need to do another query to SELECT that row.
//     const queryTextForSelect =
//       "SELECT * FROM listings WHERE first_name = $1 AND last_name = $2";
//     const result = await pool.query(queryTextForSelect, values);
//     // console.log(result.rows);
//     return result.rows;
//   } catch (error) {
//     // Handle the error appropriately (e.g., logging, error response)
//     console.error("Error retrieving listings:", error);
//     throw error; // Rethrow the error if necessary
//   }
// }

// export async function updatelistingById(id, updates) {
//   // Query the database to update an listing and return the newly updated listing
//   return {};
// }

// export async function deletelistingById(id) {
//   // Query the database to delete an listing and return the deleted listing
//   return {};
// }

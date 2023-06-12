// According to the video ( https://www.youtube.com/watch?v=mtZdybMV4Bw ), a model takes the request received by the controller and communicates with the database. Sure enough, in this file is where the SQL queries appear to happen. After it has received a response from the database, it should pass the response back to the controller (which will then pass it to the view section).

// The following imports the pool from where it is declared and opened in the index.js in the db folder.
// import { pool } from "../db/index.js";
import { supabase } from "../db/index.js";

// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://pracwflfupqvxaksvunz.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByYWN3ZmxmdXBxdnhha3N2dW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NjQ0OTcsImV4cCI6MjAwMjE0MDQ5N30.1On9-IZkmyCRw57pFQceaTYTEnY8_kMf7nDvM4cmonQ";
// const supabaseUrl = process.env.DB_CONNECTION_STRING;
// const supabaseKey = process.env.DB_ANON_KEY;
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

export async function getlistings() {
  try {
    // const result = await pool.query("SELECT * FROM guest_listings_tbl");
    // const result = await supabase.query("SELECT * FROM guest_listings_tbl");
    const result = await supabase.from("guest_listings_tbl").select();
    console.log("We made it to model.");
    console.log(result);
    // return [...result.rows];
    return [...result.data];
    // return [...result.data.rows];
    // return result.data.rows;
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

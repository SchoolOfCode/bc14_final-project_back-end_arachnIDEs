// According to the video ( https://www.youtube.com/watch?v=mtZdybMV4Bw ), a model takes the request received by the controller and communicates with the database. Sure enough, in this file is where the SQL queries appear to happen. After it has received a response from the database, it should pass the response back to the controller (which will then pass it to the view section).

// The following imports the pool from where it is declared and opened in the index.js in the db folder.
// import { pool } from "../db/index.js";
import { supabase } from "../db/index.js";

export async function getUsers() {
  try {
    // const result = await pool.query("SELECT * FROM guest_users_tbl");
    // const result = await supabase.query("SELECT * FROM guest_users_tbl");
    const result = await supabase
      .from("user_profile_tbl")
      .select()
      .order("full_name", { ascending: false });
      // .order("created_at", { ascending: false });
      console.log("We made it to model.");
    console.log(result);
    // return [...result.rows];
    return [...result.data];
    // return [...result.data.rows];
    // return result.data.rows;
  } catch (error) {
    // Handle the error appropriately (e.g., logging, error response)
    console.error("Error retrieving users:", error);
    throw error; // Rethrow the error if necessary
  }
}

// export async function searchUsersByName(searchTerm) {
//   // Query the database and return all users that have a name matching the searchTerm
//   try {
//     const values = [searchTerm];
//     const queryText =
//       "SELECT first_name || ' ' ||  last_name AS user_name FROM users WHERE first_name = $1 OR last_name = $1";
//     const result = await pool.query(queryText, values);
//     return [...result.rows];
//   } catch (error) {
//     // Handle the error appropriately (e.g., logging, error response)
//     console.error("Error retrieving users:", error);
//     throw error; // Rethrow the error if necessary
//   }
// }

// export async function getUserById(id) {
//   // Query the database and return the book with a matching id
//   try {
//     const values = [id];
//     const queryText =
//       "SELECT first_name || ' ' ||  last_name AS user_name FROM users WHERE id = $1";
//     const result = await pool.query(queryText, values);
//     return result.rows;
//   } catch (error) {
//     // Handle the error appropriately (e.g., logging, error response)
//     console.error("Error retrieving users:", error);
//     throw error; // Rethrow the error if necessary
//   }
// }

export async function createUser(user) {
  // Query the database to create an user and return the newly created user
  try {
    // console.log(user);
    // const values = [user.first_name, user.last_name];
    // // const values = [user];
    // const queryTextForCreate =
    //   "INSERT INTO users (first_name, last_name) VALUES ($1, $2)";
    // await pool.query(queryTextForCreate, values);

    // Note: Don't know if parameterized queries are a thing with supabase.
    // Note: user_id and created_at might not be necessary.
    // const {
    //   borough_name,
    //   created_at,
    //   display_name,
    //   email,
    //   user_details,
    //   user_id,
    //   user_title,
    //   skills_offered,
    //   skills_wanted,
    //   timescale,
    // } = user;
    console.log(user);
    const {
      full_name,
      display_name,
      email_address,
      borough_name,
      gender,
      mobile_number,
      password,
      skills_needed,
      skills_offered,
      about_me,
      social_media,
      profile_picture,
      dob,
      rating,
    } = user;
    console.log("We made it to model.");
    const resultFromCreate = await supabase
      .from("users_profile_tbl")
      .insert([
        {
          full_name,
          display_name,
          email_address,
          borough_name,
          gender,
          mobile_number,
          password,
          skills_needed,
          skills_offered,
          about_me,
          social_media,
          profile_picture,
          dob,
          rating,
        },
      ])
      .select();
    console.log(resultFromCreate);
    return resultFromCreate;
    // // Once we're done the above, we want to return the newly create row, so we need to do another query to SELECT that row.
    // const queryTextForSelect =
    //   "SELECT * FROM users WHERE first_name = $1 AND last_name = $2";
    // const result = await pool.query(queryTextForSelect, values);
    // // console.log(result.rows);
    // return result.rows;
  } catch (error) {
    // Handle the error appropriately (e.g., logging, error response)
    console.error("Error retrieving users:", error);
    throw error; // Rethrow the error if necessary
  }
}

// export async function updateUserById(id, updates) {
//   // Query the database to update an user and return the newly updated user
//   return {};
// }

// export async function deleteUserById(id) {
//   // Query the database to delete an user and return the deleted user
//   return {};
// }

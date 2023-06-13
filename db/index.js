/* From Bito:
This is a code snippet in JavaScript that uses the pg module to connect to PostgresSQL database.  
 
The code first imports the pg module using the import statement and saves it to a variable called 'pg'.  
 
Next, it checks if the DB_CONNECTION_STRING environment variable is defined. If it's not defined, it throws an error with a message asking if it was loaded in the environment variables. 
 
Finally, the code exports a new instance of a pg.Pool using the connectionString variable to configure the connection to the database.  
 
This pool object is used to manage and reuse database connections, which can improve the performance of your application.
*/

// I believe the purpose of the pg package is simply to allow us to communicate with a PostgreSQL database.
import pg from "pg";

import { createClient } from "@supabase/supabase-js";

// const connectionString = process.env.DB_CONNECTION_STRING;
// export const supabaseUrl = process.env.DB_CONNECTION_STRING;
// export const supabaseKey = process.env.DB_ANON_KEY;
export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
export const supabaseKey = process.env.REACT_APP_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

/* The line "if (!connectionString)" is a conditional statement that checks if the  connectionString  variable is empty or undefined.  
 
The  !  symbol is a logical operator that negates its operand's truthiness. When placed before a variable or expression, it returns the opposite of that value. If the value is truthy, it returns false. If it's falsy, it returns true.  
 
So, in this case, if  connectionString  is empty or undefined - which are falsy values - the condition is true, and the block of code inside the if statement gets executed. In this case, it throws an error message with instructions on how to fix the issue of a missing or blank DB_CONNECTION_STRING environment variable. */
if (!supabaseUrl) {
  throw new Error(
    "No DB_CONNECTION_STRING defined. Did you load in your env variables?"
  );
}

/* The below line of code exports a new  pg.Pool  object called  pool .  
 
Here's a breakdown of what's happening: 
- We're using the  new  keyword to create a new object of the  pg.Pool  class. 
- We're passing an object literal with one property,  connectionString , where the value is the variable defined above. 
- The  connectionString  holds the value of the DB_CONNECTION_STRING environment variable. It's used to connect to the PostgreSQL database. 
- Finally, we're exporting the  pool  object as a constant named  pool , which can be imported and used in other parts of the application. 
 
This creates a pool of connection clients that are ready to execute queries on the database. By reusing these connections, it can improve the performance of the application by avoiding the overhead of opening and closing new connections each time you need to query the database. */
/* In the context of connecting to a database, "overhead" refers to the additional time, resources, and processing required to establish a connection between the application and the database server.  
 If you need to connect to the database frequently, opening and closing a new connection each time can be computationally expensive and time-consuming, causing unnecessary delays in the application.  
 Pooling database connections using a library like the  pg.Pool  class helps avoid this overhead by keeping a pool of already-connected clients ready to use and avoiding the need to establish new connections each time a new query is executed. */

// Sure enough, checking back in my notes (Day44_17052023) appears to reveal that, were we to use client, we would have needed to have opened a connection with await client.connect(); which doesn't happen in this project as far as I can tell. Nor, I believe, does closing the connection with await client.end(); .
// export const pool = new pg.Pool({
//   supabaseUrl,
// });

// The below is the equivalent of the above:
// export const pool = new pg.Pool({
//   connectionString:connectionString
// });

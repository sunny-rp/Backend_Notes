const express = require('express');
const app = express();


//Session:-
/*
 session is a way to store data on the server-side, linked to a unique session ID sent to the client.

🔹 Key Features:
Stored on the server.

A unique session ID is stored in the browser cookie.

More secure than cookies (data isn't exposed).

Ends when the user closes the browser (unless configured otherwise).

🔸 Use Cases:
User authentication (e.g., logged-in user data).

Shopping carts.

Temporary storage of user state.
*/


// Cookies:-

/*
 cookie is a small piece of data stored on the client-side (in the browser).

🔹 Key Features:
Stored in the user's browser (like Chrome, Firefox).

Sent with every HTTP request to the server.

You can set an expiration time.

Limited size (~4KB).

Visible to the user (can be accessed via browser tools).

🔸 Use Cases:
Remembering login info (e.g., "Remember Me").

Tracking user activity (analytics).

Storing small preferences (theme: dark/light).

*/
app.use(express.json());
app.use(express.urlencoded({extended:true})); // ye dono hum form handling k liye use karte h means ki jab hum form ka data server ko send karte
                                            // h to vo plain text m nhi jaaata vo BLOB m jaata h jo ki server ko readable nhi hota to usko readble
                                            // banane k liye isko use karte h 1 tarike se ye middleware hoti h

app.get('/', (req,res)=>{
    res.send("Hello World dfsvrv")
})


app.get('/profile', (req,res)=>{
    res.send("Hello World and India How r u? gfhf")
})

app.listen(3000);



const router = require("express").Router();
const pool = require("../db")

//registering 

router.post("/register", async (req, res) => {
    try {
        
//1. Destructure the req.body (name, email, password)

const {name, email, password} = req.body;

//2. Check if user exists (if user exists, then throw error)

const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[
    email 
]);

res.json(user.rows)

//3. Bycrypt the user password


//4. Enter the user inside our database


//5. Generating our jwt token

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
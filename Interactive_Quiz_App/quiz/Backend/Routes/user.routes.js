const express = require("express");
const User = require("../Models/User.model");
const router = express.Router();
const {
  updateUserById,
  deleteUserById,
  getUsers,
  getUserById,
  currentUser,
} = require("../Controllers/user.controller");
const { ensureAuthenticated, isAuthenticated } = require("../Middlewares/auth.middleware");


router.patch("/user/:userID", ensureAuthenticated, updateUserById);
router.delete("/user/:userID", ensureAuthenticated, deleteUserById);
router.get("/allUsers", ensureAuthenticated, getUsers);
router.get("/user/:userID", ensureAuthenticated, getUserById);
router.get('/user/current', ensureAuthenticated, currentUser);


router.get("/users", async (req, res) => {
    try {
        const { elo_rating, chess_title } = req.query;

        console.log("Filter values:", { elo_rating, chess_title });

        const filter = {};

        if (elo_rating) {
            filter.elo_rating = { $gt: elo_rating  };
        }

        if (chess_title) {
            filter.chess_title = chess_title;
        }

        const filteredUsers = await User.find(filter);

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
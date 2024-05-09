const express = require("express");
const router = express.Router();
const {
    getLogin,
    getRegister,
    postLogin,
    postRegister, 
    postLogout,
    googleLogin,
    googleAuth,
    getForgotPassword,
    postForgotPassword,
    updateProfile,
    getProfileInfos,
    deleteProfile,
} = require("../Controllers/auth.controller");
const { ensureAuthenticated, isAuthenticated } = require("../Middlewares/auth.middleware");

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/register", getRegister);
router.post("/register", postRegister);
router.post("/logout", postLogout); 
router.get("/auth/google", googleLogin);
router.get("/auth/google/quizApp", googleAuth);
router.get("/forgotPassword", getForgotPassword);
router.post("/forgotPassword", postForgotPassword);

router.get("/profiles", getProfileInfos);
router.patch("/update-profile",  updateProfile);
router.delete("/delete-profile/:id", deleteProfile);

router.get("/auth/status", isAuthenticated);

module.exports = router;
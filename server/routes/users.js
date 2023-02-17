import express from "express";
import auth from "../middleware/auth.js";
import { signin, signup, updateAvatar } from "../controller/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/:id", auth, updateAvatar);
// router.get("/avatar", getAvatar);

export default router;

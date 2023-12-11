import express from "express";
const LipStickRouter = express.Router();

import {
  deleteLipStick,
  getLipstick,
  getLipsticks,
  postLipStick,
  updateLipStick,
} from "../controllers/lipStickController.js";

LipStickRouter.get("/", getLipsticks);
LipStickRouter.get("/:id", getLipstick);
LipStickRouter.put("/:id", updateLipStick);
LipStickRouter.delete("/:id", deleteLipStick);
LipStickRouter.post("/", postLipStick);

export default LipStickRouter;

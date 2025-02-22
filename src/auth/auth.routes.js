import { Router } from "express"
import { register } from "./auth.Controller.js"
import { registerValidator, assignClientRole } from "../middlewere/user-validator.js"

const router = Router();

// metodo rejistrar
router.post(
    "/register",
    registerValidator, 
    assignClientRole,
    register
);

export default router;
import { Router } from "express"
import { register,login } from "./auth.Controller.js"
import { registerValidator, assignClientRole } from "../middlewere/user-validator.js"

const router = Router();

// metodo rejistrar
router.post(
    "/register",
    registerValidator, 
    assignClientRole,
    register
);


router.post(
    "/login",
    login
)

export default router;
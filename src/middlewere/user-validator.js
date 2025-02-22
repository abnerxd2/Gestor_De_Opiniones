import { body} from "express-validator";
import { emailExists, usernameExists} from "../helpers/db_validator.js";
import { handleErrors } from "./handle_errors.js";
import {hasRoles} from "../middlewere/validate_roles.js"

export const registerValidator = [
    body("name").notEmpty().withMessage("El nombre es requerido"),
    body("username").notEmpty().withMessage("El username es requerido"),
    body("email").notEmpty().withMessage("El email es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),
    body("password").isStrongPassword({ 
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),

    handleErrors
]


export const loginValidator = [
    body("email").optional().isEmail().withMessage("No es un email válido"),
    body("username").optional().isString().withMessage("Username es en formáto erróneo"),
    body("password").isLength({min: 4}).withMessage("El password debe contener al menos 8 caracteres"),
    handleErrors
]

export const DeleteUser =[
    hasRoles("ADMIN_ROLE"),
]

export const assignClientRole = (req, res, next) => {
    req.body.role = "USER_ROLE"; 
    next(); 
};
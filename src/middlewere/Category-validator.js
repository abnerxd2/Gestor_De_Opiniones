import { body} from "express-validator";
import {hasRoles} from "../middlewere/validate_roles.js"

 export const addCategory = [
    body("titulo").notEmpty().withMessage("El Titulo es Requerido"),
    body("contenido").notEmpty().withMessage("La descripcion del contenido es importante y requerida")
 ]



export const categoryVAlidator = [
    hasRoles
]
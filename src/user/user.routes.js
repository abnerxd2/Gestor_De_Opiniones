
import { Router } from "express";
import {
    getUserById,
    getUsers,
    updatePassword,
    updateUser,
    deactivateUser
} from "./user.controller.js";
import {assignClientRole,DeleteUser} from "../middlewere/user-validator.js"
import {validateJWT} from "../middlewere/validate_jwt.js"

const router = Router();

// Obtener un usuario por ID (requiere token para seguridad)
router.get("/user", getUserById);

// Obtener todos los usuarios 
router.get("/users", getUsers);

// Actualizar la contraseña del usuario autenticado (requiere token)
router.put("/Updatepassword", updatePassword);

// Actualizar datos de un usuario por ID
router.put("/user/", assignClientRole, updateUser);

// Desactivar usuario (requiere autenticación y contraseña actual)
router.put("/deactivate",deactivateUser);

export default router;


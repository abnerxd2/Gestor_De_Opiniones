
import { Router } from "express";
import {
    getUserById,
    getUsers,
    updatePassword,
    updateUser,
    deactivateUser
} from "./user.controller.js";
import {assignClientRole} from "../middlewere/user-validator.js"
import {validarJWT} from "../middlewere/validate_jwt.js"

const router = Router();

// Obtener un usuario por ID (requiere token para seguridad)
router.get("/user", getUserById);

// Obtener todos los usuarios (paginación con límite y desde)
router.get("/users", getUsers);

// Actualizar la contraseña del usuario autenticado (requiere token)
router.put("/Updatepassword", validarJWT, updatePassword);

// Actualizar datos de un usuario por ID
router.put("/user/", validarJWT, assignClientRole, updateUser);

// Desactivar usuario (requiere autenticación y contraseña actual)
router.put("/deactivate", validarJWT, deactivateUser);

export default router;


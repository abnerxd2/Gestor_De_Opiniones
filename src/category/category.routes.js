import {Router} from "express"
import {createCategory,updateCategory} from "../category/category.controller.js"
import {addCategory,categoryVAlidator } from "../middlewere/Category-validator.js"

const router = Router();
// Agregar Categoria 
router.post(
    "/add",
    addCategory,
    createCategory

)

// Metodo Actualizar Categoria
router.put(
    "/Update", 
    categoryVAlidator,
    addCategory,
    updateCategory
)

// Eliminar Categoria
export default router;
import {Router} from "express"
import {createCategory} from "../category/category.controller.js"

const router = Router();

router.post(
    "/add",
    createCategory

)
export default router;
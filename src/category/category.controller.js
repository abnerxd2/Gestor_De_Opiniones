import Category from "./category.model.js"

export const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const category = await Category.create(data);
        return res.status(200).json({
            message: "Category has been created",
            name: category.titulo ,
            contenido: category.contenido
        })
    } catch (err) {
        return res.status(500).json({
            message: "category registration failed",
            error: err.message
        });
    }

};




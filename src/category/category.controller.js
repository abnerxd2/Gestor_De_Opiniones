import Category from "./category.model.js"


export const createCategory = async (req, res) => {
    try {
        const data = req.body;

        if (!data.titulo || !data.contenido) {
            return res.status(400).json({
                message: "Faltan Datos",
                error: "Título y contenido son requeridos."
            });
        }

        data.status = data.status || "Activa";
        const category = await Category.create(data);

        return res.status(201).json({
            message: "Category has been created",
            titulo: category.titulo,
            contenido: category.contenido,
            status: category.status
        });

    } catch (err) {
        return res.status(500).json({
            message: "Category registration failed",
            error: err.message
        });
    }
};


export const updateCategory = async (req, res)=> {
    const { id } = req.body;
    const nuevosDatos = req.body;
  
    try {
      const categoriaActualizada = await Category.findByIdAndUpdate(id, nuevosDatos, {
        new: true, 
      });
  
      if (!categoriaActualizada) {
        return res.status(404).json({ message: "Categoría no encontrada" });
      }
  
      res.status(200).json({ message: "Categoría actualizada", categoria: categoriaActualizada });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la categoría", error });
    }
}





export const deleteCategory = async (req, res) => {
  try {
      const { id } = req.body;

      const category = await Category.findByIdAndUpdate(id, { estado: "Inactiva" }, { new: true });

      return res.status(200).json({
          success: true,
          message: "Categoría desactivada",
          category
      });
  } catch (err) {
      return res.status(500).json({
          success: false,
          message: "Error al desactivar la categoría",
          error: err.message
      });
  }
};


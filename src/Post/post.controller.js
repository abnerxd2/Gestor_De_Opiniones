import Post from "../Post/post.model.js";


export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        const newPost = new Post({
            title,
            content,
            userId: req.usuario._id, 
        });

        await newPost.save();

        return res.status(201).json({
            success: true,
            message: 'Post creado exitosamente',
            post: newPost
        });
    } catch (error) {
        console.error("Error al crear el post:", error);
        return res.status(500).json({
            success: false,
            message: 'Error al crear el post',
            error: error.message
        });
    }
};

import { hash } from "argon2";
import User from "./user.model.js"
import fs from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export const getUserById = async (req, res) => {
    try{
        const { uid } = req.body;
        const user = await User.findById(uid)

        if(!user){
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            })
        }

        return res.status(200).json({
            success: true,
            user
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener el usuario",
            error: err.message
        })
    }
}

export const getUsers = async (req, res) => {
    try{
        const { limite = 5, desde = 0 } = req.query
        const query = { status: true }

        const [total, users ] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            users
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: err.message
        })
    }
}


export const updatePassword = async (req, res) => {
    try {
        const { newPassword } = req.body;

    
        if (!newPassword) {
            return res.status(400).json({
                success: false,
                message: "La nueva contraseña es requerida."
            });
        }
        const user = req.usuario;

        const matchOldAndNewPassword = await verify(user.password, newPassword);
        if (matchOldAndNewPassword) {
            return res.status(400).json({
                success: false,
                message: "La nueva contraseña no puede ser igual a la anterior."
            });
        }

        const encryptedPassword = await hash(newPassword);

        user.password = encryptedPassword;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada exitosamente."
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar la contraseña.",
            error: err.message
        });
    }
};




export const updateUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const  data  = req.body;

        const user = await User.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            msg: 'Usuario Actualizado',
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar usuario',
            error: err.message
        });
    }
}

export const deactivateUser  = async (req, res) => {
    try {
        const { password } = req.body; 


        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Se requiere la contraseña para realizar esta acción."
            });
        }

      
        const user = req.usuario; 

     
        const isPasswordValid = await verify(user.password, password);  

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "La contraseña es incorrecta."
            });
        }

    
        user.status = "inactivo"; 

       
        await user.save();

        return res.status(200).json({
            success: true,
            message: "El estado del usuario ha sido cambiado a inactivo."
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al cambiar el estado del usuario.",
            error: err.message
        });
    }
};
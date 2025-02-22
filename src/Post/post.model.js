import  mongoose, { Schema, model } from  "mongoose";

const postSchema = Schema({
    categoria:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
 user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
    },
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },

  comentarios: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comment' 
  }],
});

export default model("Post", postSchema);

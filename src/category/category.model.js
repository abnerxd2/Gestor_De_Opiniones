import  { Schema, model } from  "mongoose";


const categorySchema = Schema({

  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  srtatus:{
    type: String,
    enum: ["Activa", "Inactiva"],
    default: "Activa",
  }
});

export default model("Category", categorySchema);

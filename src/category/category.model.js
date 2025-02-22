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
});

export default model("Category", categorySchema);

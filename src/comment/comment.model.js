
import  { Schema, model} from "mongoose";

const CommentSchema = Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
});


export default model("Comment", CommentSchema);
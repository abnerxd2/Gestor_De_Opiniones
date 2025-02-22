import { Schema, model} from "mongoose";

const userSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  descripcion:{
    type: String 
  },

  foto:{
    type: String
  },
  

});


export default model("Post", userSchema);
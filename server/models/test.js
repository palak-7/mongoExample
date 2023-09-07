//models are abstraction of data in mongoDB database; bluprint of how you want the added data to look and behave
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.model("Test", userSchema);

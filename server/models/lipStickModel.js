import mongoose from "mongoose";

const lipStickSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  color: [
    {
      type: String,
    },
  ],
  nation: {
    type: String,
  },
  description: {
    type: String,
  },
});

const LipStick = mongoose.model("LipStick", lipStickSchema);
export default LipStick;

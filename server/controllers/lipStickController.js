import LipStick from "../models/lipStickModel.js";

const getLipsticks = async (req, res) => {
  try {
    const lipStick = await LipStick.find();
    if (!lipStick) {
      res.status(404).json("NOT FOUND");
    }

    res.status(200).json(lipStick);
  } catch (err) {
    console.log(err);
    res.status(500).json("SERVER ERROR");
  }
};

const getLipstick = async (req, res) => {
  const { id } = req.params;
  try {
    const lipStick = await LipStick.findById(id);
    if (!lipStick) {
      res.status(404).json("NOT FOUND");
    }

    res.status(200).json(lipStick);
  } catch (err) {
    console.log(err);
    res.status(500).json("SERVER ERROR");
  }
};

const postLipStick = async (req, res) => {
  const { name, color, nation, description } = req.body;

  const lipStickExist = await LipStick.findOne({ name });

  const lipStick = new LipStick({
    name,
    color,
    nation,
    description,
  });

  if (lipStickExist) {
    res.status(410).json("LipStick already exist");
  }
  try {
    const newLipStick = await lipStick.save();
    res.status(201).json(newLipStick);
  } catch (err) {
    console.log(err);
    res.status(500).json("SERVER ERROR");
  }
};

const updateLipStick = async (req, res) => {
  const { id } = req.params;
  const { name, color, nation, description } = req.body;
  const lipStick = await LipStick.findById(id);
  if (!LipStick) {
    res.status(404).json("NOT FOUND");
  }
  lipStick.name = name;
  lipStick.color = color;
  lipStick.nation = nation;
  lipStick.description = description;
  try {
    const updateLipStick = await lipStick.save();
    res.status(200).json(updateLipStick);
  } catch (err) {
    console.log(err);
    res.status(500).json("SERVER ERROR");
  }
};

const deleteLipStick = async (req, res) => {
  const { id } = req.params;

  try {
    const lipStick = await LipStick.findByIdAndRemove(id);

    if (!lipStick) {
      return res.status(404).json("LipStick not found");
    }
    // await lipStick.remove();
    res.status(200).json("DELETE SUCCESS");
  } catch (err) {
    console.error(err);
    res.status(500).json("SERVER ERROR");
  }
};

export {
  getLipstick,
  getLipsticks,
  postLipStick,
  updateLipStick,
  deleteLipStick,
};

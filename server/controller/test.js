import addTest from "../models/test.js";

export const test = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await addTest.create({
      name,
      email,
    });
    res.status(200).json({ result: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went worng...");
  }
};

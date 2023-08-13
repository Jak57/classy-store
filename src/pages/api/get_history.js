import connectDB from "../../../db";
import History from "../../../models/History";

export default async function handler(req, res) {
  await connectDB();
  const history = await History.find({});
  res.json({history})
}

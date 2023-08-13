import connectDB from "../../../db";
import History from "../../../models/History";

export default async function handler(req, res) {
  await connectDB();
  console.log(req.body)
  const history = await History.create(req.body)
  res.json({history})
}

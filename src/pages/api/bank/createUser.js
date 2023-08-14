import connectDB from "../../../../db";
import users from "../../../../models/users";

export default async function handler(req, res) {
  await connectDB();
  console.log(req.body)
  const user = await users.create(req.body)
  res.json({user})
}

// import connectDB from "../../../../db";
// import users from "../../../../models/users";

import connectDB from "../../../../db";
import transactions from "../../../../models/transaction";

export default async function handler(req, res) {
  await connectDB();
  console.log(req.body)
  const transaction = await transactions.create(req.body)
  res.json({transaction})
}

// import connectDB from "../../../db";
// import History from "../../../models/History";

import connectDB from "../../../../db";
import users from "../../../../models/users";

export default async function handler(req, res) {
    // connectDB
    // users
    //const email = sessionStorage.getItem('email') || 'No data available';
    // console.log("email: ", email)
    const {email} = req.body
    console.log("Email:", email)

  await connectDB();
  const user = await users.find({email: email});
  console.log("User", user)
  console.log(user[0])
  console.log(user[0].name)
  res.send(user[0])
}

// import connectDB from "../../../db";
// import History from "../../../models/History";

import connectDB from "../../../../db";
import History from "../../../../models/History";

export default async function handler(req, res) {
  await connectDB();
  const { _id, newValue } = req.body;
  // const history = await History.create(req.body)
  
  //const { id, fieldToUpdate, newValue } = req.body;

    // connectDB
    // History
    const newdeliveredTime = new Date();
    // const newdeliveredTime = currentDate.toLocaleString();
    // console.log("New: ", newdeliveredTime)

  try {
    const updatedDocument = await History.findByIdAndUpdate(
        _id,
        { $set: { 
            status: newValue,
            deliveredTime: newdeliveredTime  
        } },
        // $currentDate: { deliveredTime: true }
        { new: true }

        // {
        //     $set: {status: newValue },
        //     $currentDate: { deliveredTime: true }
        // }
      );

      console.log(updatedDocument)
      // res.status(200).json(updatedDocument);
      res.json({updatedDocument})
    } catch (error) {
      console.error('Error updating field:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  //res.json({history})
//}

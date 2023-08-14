import connectDB from "../../../../db";
import History from "../../../../models/History";
import users from "../../../../models/users";

export default async function handler(req, res) {
  await connectDB();
  const { _id, newValue, amountNo, totalPrice } = req.body;
  const supplierAccount = process.env.SUPPLIER_BANK_ACCOUNT_NO
  const ecomAccount = process.env.ECOMMERCE_BANK_ACCOUNT_NO
  // console.log("\nPrint...............")
  // console.log(supplierAccount, ecomAccount, amountNo, totalPrice)
  // console.log("\nPrint...............")

  const newdeliveredTime = new Date();

  try {
    const updatedDocument = await History.findByIdAndUpdate(
        _id,
        { $set: { 
            status: newValue,
            deliveredTime: newdeliveredTime  
        } },
        { new: true }
      );

    // const 
    // const userAccount = amountNo
    // const _balance = balance + totalPrice;
    // const query = { amountNo: userAccount };
    // const update = { $set: { balance: balance - totalPrice } };

    // const result = await users.findOneAndUpdate(query, update, { returnOriginal: false });
    //   console.log(result)
    
    // Initial Balance
    const query = { amountNo: amountNo };
    const documents = await users.find(query)
    const _balance = documents[0].balance - totalPrice
    // console.log(documents)
    // console.log(_balance, typeof(_balance))
    // console.log("end")

    const query1 = { amountNo: amountNo };
    const update1 = { $set: { balance: _balance } };
    const result1 = await users.findOneAndUpdate(query1, update1, { returnOriginal: false });
    // res.json({result1})

    // Updating Supplier Account
    const query2 = { amountNo: supplierAccount };
    const documents2 = await users.find(query2)
    const _balance2 = documents2[0].balance + totalPrice - 50
    // console.log(documents2)
    // console.log(_balance2, typeof(_balance2))
    // console.log("end")

    const query3 = { amountNo: supplierAccount };
    const update3 = { $set: { balance: _balance2 } };
    const result3 = await users.findOneAndUpdate(query3, update3, { returnOriginal: false });

    //res.json({result3})

    // Update Ecommerce Account
    const query5 = { amountNo: ecomAccount };
    const documents3 = await users.find(query5)
    const _balance3 = documents3[0].balance + totalPrice
    // console.log(documents3)
    // console.log(_balance3, typeof(_balance3))
    // console.log("end")

    const query4 = { amountNo: ecomAccount };
    const update4 = { $set: { balance: _balance3 } };
    const result4 = await users.findOneAndUpdate(query4, update4, { returnOriginal: false });

    res.json({result4})

      // console.log(updatedDocument)
      // res.status(200).json(updatedDocument);
      // res.json({updatedDocument})
    } catch (error) {
      console.error('Error updating field:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

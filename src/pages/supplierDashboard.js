import axios from "axios";
// import MyOrderLogo from "./MyOrderLogo";
import { useEffect, useState } from "react";
import MyOrderLogo from "src/components/MyOrderLogo";

export default function supplierDashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/api/get_history');
            const responseData = response.data;
            console.log("Data:", responseData)
            console.log(typeof(responseData.history))
            console.log(responseData.history)
            setData(responseData.history);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }

        fetchData();
    }, []);


    const handleEditClick = async (totalPrice, orderId, email) => {
        // alert(`Edit clicked for: ${email}`);
        axios.post('http://localhost:3000/api/supplier/confirm',{email, totalPrice, orderId}).then(res=>{
            // sessionStorage.setItem('accountNo', res.data.amountNo);
            // sessionStorage.setItem('balance', res.data.balance);
            // sessionStorage.setItem('name', res.data.name);
            console.log(res.data)
            }).catch(e=>{
                console.log("error")
            })
    };

    // const fetchData = async () => {
    //     axios.post('http://localhost:3000/api/bank/getUser',{email}).then(res=>{
    //         sessionStorage.setItem('accountNo', res.data.amountNo);
    //         sessionStorage.setItem('balance', res.data.balance);
    //         sessionStorage.setItem('name', res.data.name);
    //         }).catch(e=>{
    //             console.log("error")
    //         })
    //   };

    return (
        <div className="p-10">
            <div>
                <MyOrderLogo />
            </div>
            <div>
                <table className="min-w-full table-auto shadow-lg">
                    <thead>
                    {/* <tr className="text-center">My Order</tr> */}
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Order Id</th>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Amount</th>
                        <th className="px-4 py-2">Order Time</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Delivered Time</th>
                        <th className="px-4 py-2">Transaction Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="text-center">
                        {/* <td>{item.id}</td> */}
                        <td className="border px-4 py-2">{item.orderId}</td>
                        <td className="border px-4 py-2">
                            <ul>
                                {item.product.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li> {item.address.houseNo}, {item.address.area},  {item.address.city}</li>
                                <li>{item.address.phone}</li>
                            </ul>
                        </td>
                        <td className="border px-4 py-2">{item.amount}</td>
                        <td className="border px-4 py-2">{item.orderTime}</td>
                        <td className="border px-4 py-2">
                            { item.status === "pending.." ? (
                                <div className="flex items-center justify-between">
                                    <button onClick={() => handleEditClick(item.amount, item.orderId, item.email)} className="bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600  w-full text-white font-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                      deliver now
                                    </button>
                                </div>
                            ) : (
                                <div>{item.status}</div>
                            )
                                
                            }
                        </td>
                        <td className="border px-4 py-2">{item.deliveredTime}</td>
                        <td className="border px-4 py-2">{item.transactionId}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

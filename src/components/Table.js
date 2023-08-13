import axios from "axios";
import MyOrderLogo from "./MyOrderLogo";
import { useEffect, useState } from "react";

export default function Table() {
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
                        <td className="border px-4 py-2">{item.orderId}</td>

                        {/* <td className="border px-4 py-2">{item.product}</td> */}
                        <td className="border px-4 py-2">
                            <ul>
                                {item.product.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </td>

                        <td className="border px-4 py-2">{item.address.city}</td>
                        <td className="border px-4 py-2">{item.amount}</td>
                        <td className="border px-4 py-2">{item.orderTime}</td>
                        <td className="border px-4 py-2">{item.status}</td>
                        <td className="border px-4 py-2">{item.deliveredTime}</td>
                        <td className="border px-4 py-2">{item.transactionId}</td>
                        </tr>
                    ))}
                    {/* <ul>
                        {data.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul> */}
                    {/* hi */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
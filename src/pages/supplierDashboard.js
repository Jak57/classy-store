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
                        <td className="border px-4 py-2">
                            {/* {item.address.city} */}
                            <ul>
                                <li> {item.address.houseNo}, {item.address.area},  {item.address.city}</li>
                                {/* <li>Area {": "} {item.address.area}</li>
                                <li>House No {": "} {item.address.houseNo}</li> */}
                                <li>{item.address.phone}</li>
                            </ul>
                        </td>
                        <td className="border px-4 py-2">{item.amount}</td>
                        <td className="border px-4 py-2">{item.orderTime}</td>
                        <td className="border px-4 py-2">
                            {/* {item.status} */}
                            <select id="dropdown" name="status">
                                <option value="pending">pending..</option>
                                <option value="delivered">delivered</option>
                            </select>
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

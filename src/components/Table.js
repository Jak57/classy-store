import MyOrderLogo from "./MyOrderLogo";

export default function Table() {
    const data = [
        { 
            orderId: '1', 
            product: 'Basket Ball',
            address: 'Sylhet',
            amount: '12',
            orderTime: '1:00 PM',
            status: 'pending',
            deliveredTime: '7:00 PM',
            transactionId: '1234'
        },
        { 
            orderId: '1', 
            product: 'Basket Ball',
            address: 'Sylhet',
            amount: '12',
            orderTime: '1:00 PM',
            status: 'pending',
            deliveredTime: '7:00 PM',
            transactionId: '1234'
        },
        { 
            orderId: '1', 
            product: 'Basket Ball',
            address: 'Sylhet',
            amount: '12',
            orderTime: '1:00 PM',
            status: 'pending',
            deliveredTime: '7:00 PM',
            transactionId: '1234'
        },
        { 
            orderId: '1', 
            product: 'Basket Ball',
            address: 'Sylhet',
            amount: '12',
            orderTime: '1:00 PM',
            status: 'pending',
            deliveredTime: '7:00 PM',
            transactionId: '1234'
        },
        { 
            orderId: '1', 
            product: 'Basket Ball',
            address: 'Sylhet',
            amount: '12',
            orderTime: '1:00 PM',
            status: 'pending',
            deliveredTime: '7:00 PM',
            transactionId: '1234'
        }
        // { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
        // { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
        // { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
        // Add more data as needed
    ];
    
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
                        <td className="border px-4 py-2">{item.product}</td>
                        <td className="border px-4 py-2">{item.address}</td>
                        <td className="border px-4 py-2">{item.amount}</td>
                        <td className="border px-4 py-2">{item.orderTime}</td>
                        <td className="border px-4 py-2">{item.status}</td>
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
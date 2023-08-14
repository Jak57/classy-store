import { toast } from "react-hot-toast";
import { useRouter } from 'next/router';
import axios from "axios";
import { useShoppingCart } from "use-shopping-cart";

export default function BankInfoForm() {
    const router = useRouter();
    const { totalPrice, cartDetails } = useShoppingCart()
    const { clearCart } = useShoppingCart()
    
    function generateRandomNumber(length) {
        const min = 10 ** (length - 1);
        const max = 10 ** length - 1;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString().padStart(length, '0');
    }

    const email = sessionStorage.getItem('email') || 'No data available';
    console.log(email)
    const fetchData = async () => {
        axios.post('http://localhost:3000/api/bank/getUser',{email}).then(res=>{
            sessionStorage.setItem('accountNo', res.data.amountNo);
            sessionStorage.setItem('balance', res.data.balance);
            sessionStorage.setItem('name', res.data.name);
            }).catch(e=>{
                console.log("error")
            })
      };
      fetchData();

    const accountNo = sessionStorage.getItem('accountNo') || 'No data available';
    const balance = sessionStorage.getItem('balance') || 'No data available';
    const name = sessionStorage.getItem('name') || 'No data available';

    const handleSubmit = (event) => {
        event.preventDefault();
        const orderId = generateRandomNumber(8);
        const product = ['Apple', 'Orange']
        const city = sessionStorage.getItem('city') || 'No data available';
        const area = sessionStorage.getItem('area') || 'No data available';
        const houseNo = sessionStorage.getItem('house_no') || 'No data available';
        const phone = sessionStorage.getItem('phone') || 'No data available';
        const address = {city, area, houseNo, phone};

        const amount = totalPrice/100;
        const orderTime = new Date();
        // const orderTime = currentDate.toLocaleString();
        const status = 'pending..'
        const deliveredTime = new Date();
        // const deliveredTime = currentDate1.toLocaleString();
        const transactionId = generateRandomNumber(8);

        axios.get('http://localhost:3000/api/user/email').then(res=>{
            sessionStorage.setItem('email', res.data.email);
        }).catch(e=>{
            console.log("error")
        })

        const email = sessionStorage.getItem('email') || 'No data available';
        axios.post('http://localhost:3000/api/validate_transaction',{orderId, product, address, amount, orderTime, status, deliveredTime, transactionId, email}).then(res=>{
            console.log(res.data)
        }).catch(e=>{
            console.log("error")
        })

        clearCart()
        router.push("../user/MyOrder");
    };

    function successMessage() {
        toast.success("Transaction successfull! Please, wait for conformation.")
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit} method="post">
            <div className="flex items-center justify-center">
                <p className="block text-gray-700 text-lg font-bold mb-2" for="accountName">
                Bank Information
                </p>
            </div>
            <div className="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="accountName">
                Account Name
                </label>
                <input nameName="account_name" type="text" id="nonEditableField" value={name} readOnly className="border w-full rounded py-2 px-3 text-gray-700 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label for="nonEditableField" className="block text-gray-700 text-sm font-bold mb-2">
                Account No
                </label>
                <input name="account_no" type="text" id="nonEditableField" value={accountNo} readOnly className="border w-full rounded py-2 px-3 text-gray-700 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label for="nonEditableField" className="block text-gray-700 text-sm font-bold mb-2">
                Balance
                </label>
                <input name="account_no" type="text" id="nonEditableField" value={balance} readOnly className="border w-full rounded py-2 px-3 text-gray-700 bg-gray-100"/>
            </div>
            <div className="flex items-center justify-between">
                {balance >= totalPrice ? (
                    <button onClick={ successMessage } className="w-full bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Confirm
                    </button>
                    ):(
                        <button disabled={true} className="w-full bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Insufficient Money
                        </button>
                    )
                } 
            </div>
            </form>
        </div>
    )
}
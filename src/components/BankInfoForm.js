import Link from "next/link";
import { toast } from "react-hot-toast";

export default function BankInfoForm() {
    function successMessage(event) {
        event.preventDefault()
        //const id = toast.loading("Adding 1 item...")
        toast.success("Transaction successfull! Please, wait for conformation.")
        //toast.success("Please, wait for conformation")
    }

    return (
        <div class="w-full h-screen flex items-center justify-center">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" action="#" method="post">
            <div class="flex items-center justify-center">
                <p class="block text-gray-700 text-lg font-bold mb-2" for="accountName">
                Bank Information
                </p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="accountName">
                Account Name
                </label>
                <input type="text" id="nonEditableField" value="jakirhasan" readonly class="border w-full rounded py-2 px-3 text-gray-700 bg-gray-100"/>
            </div>
            <div class="mb-4">
                <label for="nonEditableField" class="block text-gray-700 text-sm font-bold mb-2">
                Account No
                </label>
                <input type="text" id="nonEditableField" value="12345" readonly class="border w-full rounded py-2 px-3 text-gray-700 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                Secret Code
                </label>
                <input class="border w-full rounded py-2 px-3 text-gray-700" id="secretCode" type="text" placeholder="secret code" />
            </div>
            <Link href="../user/MyOrder">
                <div class="flex items-center justify-between">
                    <button class="w-full bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Confirm
                    </button>
                </div>
            </Link>
            </form>
        </div>
    )
}
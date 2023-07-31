import { toast } from "react-hot-toast";

export default function BankAccountSetUp () {
    function successMessage(event) {
        event.preventDefault()
        //const id = toast.loading("Adding 1 item...")
        toast.success("Transaction successfull! Please, wait for conformation.")
        //toast.success("Please, wait for conformation")
    }
    return (
        <div class="w-full h-screen flex items-center justify-center">
          {/* <p>Bank Account Setup</p> */}
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" action="#" method="post">
            {/* <p class="block text-gray-700 text-lg font-bold mb-2" for="accountName">
              Bank Account Setup
            </p> */}
            <div class="flex items-center justify-center">
              {/* <p class="text-center mx-auto">Bank Account Setup</p> */}
              <p class="block text-gray-700 text-lg font-bold mb-2" for="accountName">
                Bank Account Setup
              </p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="accountName">
                Account Name
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="accountName" type="text" placeholder="account name" />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="accountNo">
                Account No
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="accountNo" type="text" placeholder="account no" />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
              <label class="block text-gray-700 text-sm font-bold mb-2" for="accountNo">
                Secret Code
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="secretCode" type="text" placeholder="secret code" />
            </div>
            <div class="flex items-center justify-between">
              <button onclick={successMessage} class="w-full bg-lime-500 hover:bg-lime-600 text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add
              </button>
            </div>
          </form>
      </div>
    )
}


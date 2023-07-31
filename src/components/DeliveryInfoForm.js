import Link from "next/link";

export default function DeliveryInfoForm() {
    return (
        <div class="w-full h-screen flex items-center justify-center">
          {/* <p>Bank Account Setup</p> */}
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" action="#" method="post">
            {/* <p class="block text-gray-700 text-lg font-bold mb-2" for="accountName">
              Bank Account Setup
            </p> */}
            <div class="flex items-center justify-center">
              {/* <p class="text-center mx-auto">Bank Account Setup</p> */}
              <p class="block text-gray-700 text-lg font-bold mb-2">
                Delivery Information
              </p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                City
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="city" />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="area">
                Area
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="area" type="text" placeholder="area" />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
              <label class="block text-gray-700 text-sm font-bold mb-2" for="houseno">
                House No
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="houseNo" type="text" placeholder="house no" />
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                Phone
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone" />
            </div>
            <Link href="../checkout/BankInfo">
              <div class="flex items-center justify-between">
                <button class="bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600  w-full text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Next
                </button>
              </div>
            </Link>
          </form>
      </div>
    )
}


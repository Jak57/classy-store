import { ShoppingBagIcon } from "@heroicons/react/24/solid"

export default function MyOrderLogo() {
    return (
        <div className="flex flex-row justify-center items-center px-10 p-3">
            <div className="text-lg font-bold text-gray-900 px-2 pb-2">My Order</div>
            <div>
                <ShoppingBagIcon className="w-7 h-7 text-gray-600 pb-1" />
            </div>
           {/* <ShoppingBagIcon className="w-6 h-6 flex-shrink-0" /> */}
        </div>
    )
}
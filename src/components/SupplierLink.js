import { signIn } from "next-auth/react";

export default function SupplierLink() {
    return (
        <button onClick={() => signIn()} className="flex items-center space-x-2 hover:bg-gray-50 hover:rounded-full">
            <span className="hover:underline sm:inline-block font-semibold text-lg text-gray-700 hover:text-gray-900">Supplier</span>{"  "}
        </button>
    )
}
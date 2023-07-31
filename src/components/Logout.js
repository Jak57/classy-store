import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart"

export default function Logout() {
    const { data: session } = useSession();
    const { clearCart } = useShoppingCart()
    async function Logout() {
        clearCart();
        signOut()
    }
    if (session) {
        return (
            <Link href="/" className="w-full">
                <div class="flex items-center justify-between w-full">
                    <button onClick={ Logout } class="border border-blue-200 my-2 w-60 bg-blue-50 hover:bg-blue-200 text-blue-500 font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Logout
                    </button>
                </div>
            </Link>
        )
    }
}
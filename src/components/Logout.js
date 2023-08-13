import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart"
import { useRouter } from 'next/router';

export default function Logout() {

    const router = useRouter();

    const { data: session } = useSession();
    const { clearCart } = useShoppingCart()
    // async function Logout() {
    //     clearCart();
    //     //signOut()
    //     router.push("/");
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('Form data:', formData);
        // Here you can perform any actions with the form data, like sending it to an API.
        //router.push(`../checkout/BankInfo/${encodeURIComponent(formData)}`);
        //router.push("../checkout/BankInfo");
    
        // TODO: Add form data to DB
    
        // router.push(`../checkout/BankInfo?name=${encodeURIComponent(formData)}`);
        clearCart();
        signOut()
        router.push("/");
        //signOut();
      };

    if (session) {
        return (
            // <Link href="/" className="w-full">
            // <form>
            //     <div class="flex items-center justify-between w-full">
            //         <button onClick={ Logout } class="border border-blue-200 my-2 w-60 bg-blue-50 hover:bg-blue-200 text-blue-500 font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            //             Logout
            //         </button>
            //     </div>
            // </form>
            // </Link>
            <form onSubmit={handleSubmit}>
            <div class="flex items-center justify-between w-full">
                <button class="border border-blue-200 my-2 w-60 bg-blue-50 hover:bg-blue-200 text-blue-500 font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Logout
                </button>
            </div>
            </form>
        )
    }
}
import Logo from "./Logo";
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from "use-shopping-cart";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginLogo from "./LoginLogo";
import ProductLink from "./ProductLink";
import Profile from "./Profile";
import BankLink from "./BankLink";
import SupplierLink from "./SupplierLink";

export default function Header() {
    const { formattedTotalPrice, cartCount } = useShoppingCart()
    const { data: session } = useSession();
    if (session) {
        const email = session.user.email;
        // supplier admin
        if (email === "jakirarnob0@gmail.com") { 
            return (
                <header className="sticky top-0 bg-white z-10 shadow">
                    <div className="container mx-auto p-6 flex justify-between">
                        <Logo />
                        <div class="flex items-center space-x-5">
                            <Link href='/cart'
                            className="hover:underline flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                            >
                                <div className="relative">
                                    <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                                </div>
                                <p className="text-lg">
                                    {formattedTotalPrice}{" "}
                                    <span className="text-sm text-gray-500">({cartCount})</span>
                                </p>
                            </Link>
                            <Link href="/supplierDashboard" className="flex items-center space-x-2">
                                <span className="hover:underline sm:inline-block font-semibold text-lg text-gray-700 hover:text-gray-900">Supplier Dashboard</span>{"  "}
                            </Link>
                            <ProductLink />
                            <Profile />
                        </div>
                    </div>
                </header>
            )
        } else {
            return (
                <header className="sticky top-0 bg-white z-10 shadow">
                    <div className="container mx-auto p-6 flex justify-between">
                        <Logo />
                        <div class="flex items-center space-x-5">
                            <Link href='/cart'
                            className="hover:underline flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                            >
                                <div className="relative">
                                    <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                                </div>
                                <p className="text-lg">
                                    {formattedTotalPrice}{" "}
                                    <span className="text-sm text-gray-500">({cartCount})</span>
                                </p>
                            </Link>
                            {/* <Link href="/supplierDashboard" className="flex items-center space-x-2">
                                <span className="hover:underline sm:inline-block font-semibold text-lg text-gray-700 hover:text-gray-900">Supplier Dashboard</span>{"  "}
                            </Link> */}
                            <ProductLink />
                            <Profile />
                        </div>
                    </div>
                </header>
            )
        }
    } else {
        return (
            <header className="sticky top-0 bg-white z-10 shadow">
                <div className="container mx-auto p-6 flex justify-between">
                    <Logo />
                    <div class="flex items-center space-x-5">
                        {/* <SupplierLink />
                        <BankLink /> */}
                        <LoginLogo />
                    </div>
                </div>
            </header>
        )
    }
}
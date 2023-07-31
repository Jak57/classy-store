import Logo from "./Logo";
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from "use-shopping-cart";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginLogo from "./LoginLogo";
import ProductLink from "./ProductLink";
import Profile from "./Profile";
// import HomeLogo from "./HomeLogo";
// import { HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
    const { formattedTotalPrice, cartCount } = useShoppingCart()
    const { data: session } = useSession();
    if (session) {
        return (
            <header className="sticky top-0 bg-white z-10 shadow">
                <div className="container mx-auto p-6 flex justify-between">
                    <Logo />
                    {/* <HomeIcon className="w-7 h-7 flex-shrink-0" /> */}
                    {/* <HomeLogo /> */}
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
                        <ProductLink />
                        {/* <p>Profile</p> */}
                        <Profile />
                    </div>
                    {/* <Link href='/cart'
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                    >
                        <div className="relative">
                            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                        </div>
                        <p className="text-lg">
                            {formattedTotalPrice}{" "}
                            <span className="text-sm text-gray-500">({cartCount})</span>
                        </p>
                    </Link>
                    <p>Product</p>
                    <p>Profile</p> */}
                </div>
            </header>
        )
    } else {
        return (
            <header className="sticky top-0 bg-white z-10 shadow">
                <div className="container mx-auto p-6 flex justify-between">
                    <Logo />
                    {/* <HomeIcon className="w-7 h-7 flex-shrink-0" /> */}
                    {/* <HomeLogo /> */}
                    {/* <Link href='/cart'
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                    >
                        <div className="relative">
                            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                        </div>
                        <p className="text-lg">
                            {formattedTotalPrice}{" "}
                            <span className="text-sm text-gray-500">({cartCount})</span>
                        </p>
                    </Link> */}
                    {/* <p>Product</p> */}
                    <LoginLogo />
                </div>
            </header>
        )
    }
}
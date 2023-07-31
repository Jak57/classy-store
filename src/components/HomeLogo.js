import { HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function HomeLogo() {
    return (
        // <h1>helloword</h1>
        <Link href='/' className="flex items-center space-x-2">
            {/* <Image src="/logo.svg" alt="Logo" width={42} height={42} /> */}
            <HomeIcon className="w-7 h-7 flex-shrink-0 text-gray-600 hover:text-gray-900" />
            {/* <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">EpicStore</span> */}
        </Link>
    )
}
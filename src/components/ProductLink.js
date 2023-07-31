import Link from "next/link";

export default function ProductLink() {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <span className="hover:underline sm:inline-block font-semibold text-lg text-gray-700 hover:text-gray-900">Product</span>{"  "}
        </Link>
    )
}
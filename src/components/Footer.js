import Contact from "./Contact";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 py-5 text-center">
            {/* <p className="text-sm text-gray-500">
                Contact us
            </p> */}
            <Contact />
            {/* <p className="text-sm text-gray-500">
            © 2023 ClassyStore. All rights reserved.
            </p> */}
        </footer>
    )
}
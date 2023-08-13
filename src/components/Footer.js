import { useSession, signIn, signOut } from "next-auth/react";
import Contact from "./Contact";

export default function Footer() {
    const { data: session } = useSession();
    if (session) {
        if (session.user.email === "jakir3.csesust@gmail.com") { // bank admin
            return (
                <footer className="border-t border-gray-100 py-5 text-center">
                </footer>
            )
        } else {
            return (
                <footer className="border-t border-gray-100 py-5 text-center">
                    <Contact />
                </footer>
            )
        }
    } else {
        return (
            <footer className="border-t border-gray-100 py-5 text-center">
                <Contact />
            </footer>
        )
    }
}
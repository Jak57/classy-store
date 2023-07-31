import Link from "next/link";
import Logout from "./Logout";
import ProfileImageIcon from "./ProfileImageIcon";

export default function ProfileFloat() {
    return (
        // <div>
        //     <ProfileImageIcon />
        // </div>
        <div className="fixed top-35 right-10 bg-gray-100 shadow-lg rounded-lg p-4">
            <div>
                <ProfileImageIcon />
            </div>
            <Link href="../user/ManageProfile" className="w-full">
                <div class="flex items-center justify-between w-full">
                    <button class="border border-blue-200 my-2 w-60 bg-blue-50 hover:bg-blue-200 text-blue-500 font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Profile
                    </button>
                </div>
            </Link>
            {/* <br/> */}
            <Link href="../user/MyOrder" className="w-full">
                <div class="flex items-center justify-between w-full">
                    <button class="border border-blue-200 my-2 w-60 bg-blue-50 hover:bg-blue-200 text-blue-500 font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        My Order
                    </button>
                </div>
            </Link>
            {/* <br/> */}
            {/* <Link href="#" className="w-full">
                <div class="flex items-center justify-between w-full">
                    <button class="w-60 bg-lime-500 hover:bg-lime-700 text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Logout
                    </button>
                </div>
            </Link> */}
            <Logout />
        </div>
    )
}
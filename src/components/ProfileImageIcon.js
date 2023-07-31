import { useSession, signOut } from "next-auth/react";

export default function ProfileImageIcon() {
    const { data: session } = useSession();

    if (session) {
        const { name, email, image } = session.user;
        return (
            <div class="p-4 flex flex-col justify-center items-center bg-gray-50 rounded-lg">
                {/* <p>{name}</p>
                <p>{email}</p> */}
                <div>
                    <img 
                    src={image} 
                    alt="Image" 
                    class="rounded-full w-10 h-10 object-cover border-gray-100 border"
                    />
                </div>
                {/* <br/> */}
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <p>{email}</p>
                </div>
                {/* <img 
                src={image} 
                alt="Image" 
                class="rounded-full w-10 h-10 object-cover border-gray-100 border"
                /> */}
            </div>
            // <div><p>{name}</p>/div>
        )
    }
}
import { useSession, signOut } from "next-auth/react";
import React, { useState } from 'react';
import ProfileFloat from "./ProfileFloat";

export default function Profile() {
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    if (session) {
        const { name, email, image } = session.user;
        return (
            <div class="p-4">
                <img 
                src={image} 
                alt="Image" 
                class="rounded-full w-10 h-10 object-cover border-gray-100 border hover:border-2 hover:border-gray-300 cursor-pointer"
                onClick={toggleModal}
                />
                {isModalOpen && (
                    <ProfileFloat />
                )}
            </div>
        )
    }
}
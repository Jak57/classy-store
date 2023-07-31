import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

export default function Contact() {
    return(
        <div className="text-sm text-gray-500">
            <div className="text-lg text-gray-700">Contact Us</div>
            <div className="flex flex-row justify-center items-center px-10 p-3">
                <BuildingOffice2Icon className="w-7 h-7 text-gray-600" />
                <p className="mx-5">Modina Market, Sylhet</p>
                <EnvelopeIcon className="w-7 h-7 text-gray-600" />
                <p className="mx-5">classy.store@gmail.com</p>
                <PhoneIcon className="w-7 h-7 text-gray-600" /><p className="mx-5">01721142225</p>
            </div>
            <p className="text-sm text-gray-500">
                © 2023 ClassyStore. All rights reserved.
            </p>
        </div>
    )
}
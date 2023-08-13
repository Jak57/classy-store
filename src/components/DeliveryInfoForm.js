import { useState } from 'react';
import { useRouter } from 'next/router';

export default function DeliveryInfoForm() {
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    house_no: '',
    phone: ''
  });
  
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);

    sessionStorage.setItem('city', formData.city);
    sessionStorage.setItem('area', formData.area);
    sessionStorage.setItem('house_no', formData.house_no);
    sessionStorage.setItem('phone', formData.phone);
    // Here you can perform any actions with the form data, like sending it to an API.
    //router.push(`../checkout/BankInfo/${encodeURIComponent(formData)}`);
    //router.push("../checkout/BankInfo");

    // TODO: Add form data to DB

    // router.push(`../checkout/BankInfo?name=${encodeURIComponent(formData)}`);
    router.push("../checkout/BankInfo");
  };

    return (
        <div className="w-full h-screen flex items-center justify-center">
          {/* <p>Bank Account Setup</p> */}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit} method="post">
            {/* <p class="block text-gray-700 text-lg font-bold mb-2" for="accountName">
              Bank Account Setup
            </p> */}
            <div className="flex items-center justify-center">
              {/* <p class="text-center mx-auto">Bank Account Setup</p> */}
              <p className="block text-gray-700 text-lg font-bold mb-2">
                Delivery Information
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input required name="city" value={formData.city} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="city" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Area
              </label>
              <input required name="area" value={formData.area} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="area" type="text" placeholder="area" />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                House No
              </label>
              <input required name="house_no" value={formData.house_no} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="houseNo" type="text" placeholder="house no" />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input required name="phone" value={formData.phone} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone" />
            </div>
            {/* <Link href="../checkout/BankInfo"> */}
              <div className="flex items-center justify-between">
                <button className="bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600  w-full text-white font-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Next
                </button>
              </div>
            {/* </Link> */}
          </form>
      </div>
    )
}


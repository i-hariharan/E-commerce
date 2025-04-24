import { useState } from "react";

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, here you would handle the form submission, like sending data to a server.
    console.log("Form Submitted", formData);
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row max-md:gap-5 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-lg font-medium text-gray-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md hover:scale-105 transition"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>
            Or reach us directly at:
            <br />
            <span className="font-semibold">support@yourstore.com</span>
          </p>
        </div>
      </div>
    </div>
  
  )
}

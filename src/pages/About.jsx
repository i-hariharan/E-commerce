
import Title from "../components/Title";

export default function About() {


  return (
    <div className="bg-white py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
      <div className='py-2 text-center text-3xl'>
        <Title titleword1={'About'} titleword2={' US'}/>
      </div>
        <p className="mt-4 max-w-2xl text-justify text-xl text-gray-500 mx-auto">
          We’re passionate about making product shopping easier and more enjoyable.
          With a wide selection and secure checkout, we ensure a seamless shopping experience from start to finish.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-2 text-gray-600">
            We aim to provide quality products at affordable prices with top-tier customer service.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Why Choose Us?</h3>
          <p className="mt-2 text-gray-600">
            Fast shipping, reliable service, and a carefully curated collection of products you’ll love.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800">Join Our Community</h3>
          <p className="mt-2 text-gray-600">
            We’re more than just a store. Join thousands of happy customers who trust us for their everyday needs.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800">Early Development & MvP</h3>
          <p className="mt-2 text-gray-600">
            In the beginning, the app focuses on creating a basic version of the product purchasing platform. This includes features like product listings, a shopping cart, and basic payment options. The goal is to launch quickly with core functionalities, and get feedback from early users to identify pain points and areas for improvement.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Data-Driven Decisions</h3>
          <p className="mt-2 text-gray-600">
          As the app matures, the use of data analytics becomes more significant. By analyzing purchasing behavior, user engagement, and feedback, the app can continuously improve and optimize: Marketing strategies, User Interface, product offerings.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Brand Partnership & Expansion</h3>
          <p className="mt-2 text-gray-600">
          At this stage, the app might form partnerships with brands, local stores, or larger e-commerce platforms to diversify its product range or offer exclusive items. Expanding into new markets, regions, or countries can also fuel growth.
          </p>
        </div>

      </div>
    </div>
  )
}

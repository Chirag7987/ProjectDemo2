const CallToAction = () => {
  return (
    <div className="w-full bg-blue-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Join the Bubble Developer movement
          </h2>
          <p className="mt-4 text-gray-700">
            Interested in becoming a Bubble Developer? Getting started is easy
            with a community of thousands of Bubble Developers and resources
            for every topic and learning style.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className="text-sm font-bold text-blue-600 uppercase bg-blue-100 py-1 px-3 rounded-full">
                Bubble Academy
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Find videos and interactive lessons to help you do more on
              Bubble.
            </h3>
            <div className="mt-6 flex items-center justify-between text-blue-600">
              <a href="#" className="font-semibold hover:underline">
                Browse the academy
              </a>
              <span className="material-icons">arrow_forward</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className="text-sm font-bold text-blue-600 uppercase bg-blue-100 py-1 px-3 rounded-full">
                Certification
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Take the official exam to prove your skills and gain a competitive
              edge.
            </h3>
            <div className="mt-6 flex items-center justify-between text-blue-600">
              <a href="#" className="font-semibold hover:underline">
                Get certified
              </a>
              <span className="material-icons">arrow_forward</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className="text-sm font-bold text-blue-600 uppercase bg-blue-100 py-1 px-3 rounded-full">
                Community
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ask and answer questions about Bubble in our user community.
            </h3>
            <div className="mt-6 flex items-center justify-between text-blue-600">
              <a href="#" className="font-semibold hover:underline">
                Explore the community
              </a>
              <span className="material-icons">arrow_forward</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className="text-sm font-bold text-blue-600 uppercase bg-blue-100 py-1 px-3 rounded-full">
                Marketplace
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Extend Bubble's functionality with elements, actions, and API
              connections.
            </h3>
            <div className="mt-6 flex items-center justify-between text-blue-600">
              <a href="#" className="font-semibold hover:underline">
                Browse the marketplace
              </a>
              <span className="material-icons">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

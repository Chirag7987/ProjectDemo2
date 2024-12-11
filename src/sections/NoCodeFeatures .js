import Image from 'next/image';

const NoCodeFeatures = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Title Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Build web and mobile apps with no code.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Bubble lets you create interactive, multi-user apps for web and mobile and includes all
                        the tools you need to build sites like Facebook or Airbnb.
                    </p>
                </div>

                {/* Image Section */}
                <div className="mt-10 flex justify-center">
                    <div className="relative w-[600px] h-[300px]"> {/* Use Tailwind classes to control the size */}
                        <Image
                            src="/images/NoCode.jpeg"
                            alt="No-code app workflow"
                            layout="fill" // Use layout="fill" for responsive sizing within the container
                            objectFit="contain" // Ensures the image is scaled proportionally
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NoCodeFeatures;

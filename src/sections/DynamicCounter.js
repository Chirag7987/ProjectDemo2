import { useState, useEffect } from 'react';

const DynamicCounter = ({ targetValue, duration }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = targetValue / (duration / 10);

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
                clearInterval(interval);
                start = targetValue; // Ensure it reaches the target value
            }
            setCurrentValue(Math.floor(start));
        }, 10);

        return () => clearInterval(interval);
    }, [targetValue, duration]);

    return <span>{currentValue.toLocaleString()}</span>;
};

const AnimatedStatsPage = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center space-y-10">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900">
                    Program faster on Bubble. No limitations.
                </h1>

                {/* Main Counter */}
                <div className="flex flex-col items-center">
                    <div className="bg-blue-100 px-10 py-6 rounded-lg">
                        <h2 className="text-5xl font-extrabold text-gray-900">
                            <DynamicCounter targetValue={4690000} duration={3000} />
                        </h2>
                    </div>
                    <p className="mt-2 text-blue-600 text-sm font-semibold uppercase">
                        Apps Built on Bubble
                    </p>
                </div>

                {/* Smaller Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div>
                        <h3 className="text-4xl font-extrabold text-gray-900">
                            <DynamicCounter targetValue={5000000000} duration={3000} />
                        </h3>
                        <p className="mt-2 text-blue-600 text-sm font-semibold uppercase">
                            Page Views Per Year
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-extrabold text-gray-900">
                            <DynamicCounter targetValue={15000000000} duration={3000} />
                        </h3>
                        <p className="mt-2 text-blue-600 text-sm font-semibold uppercase">
                            Funds Raised by Bubble Users
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-extrabold text-gray-900">
                            <DynamicCounter targetValue={6500} duration={3000} />
                        </h3>
                        <p className="mt-2 text-blue-600 text-sm font-semibold uppercase">
                            Integrations & Plugins
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedStatsPage;

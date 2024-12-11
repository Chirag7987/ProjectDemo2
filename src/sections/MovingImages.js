import React, { useEffect, useRef } from "react";

const MovingImages = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        let startPos = 0;
        const scroll = () => {
            startPos -= 2; // Adjust scroll speed here
            if (Math.abs(startPos) >= container.scrollWidth / 2) {
                startPos = 0;
            }
            container.style.transform = `translateX(${startPos}px)`;
            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);

    return (
        <div className="bg-blue-50 py-16">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                    Discover how companies build powerful products
                </h2>
                <p className="mt-4 text-blue-600 font-semibold cursor-pointer hover:underline">
                    Sign up for free
                </p>
            </div>

            {/* Scrolling Image Section */}
            <div className="relative overflow-hidden">
                <div
                    className="flex space-x-8"
                    ref={containerRef}
                    style={{ display: "flex", whiteSpace: "nowrap" }}
                >
                    {/* Image 1 */}
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io%2Ff1726512012160x554030195598831360%2Fstrabo.webp?w=512&h=311&auto=compress&dpr=1.25&fit=max"
                        alt="BetterLegal"
                        className="w-96 rounded-lg shadow-lg"
                    />
                    {/* Image 2 */}
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io%2Ff1726512012160x554030195598831360%2Fstrabo.webp?w=512&h=311&auto=compress&dpr=1.25&fit=max"
                        alt="Conscious Inclusion"
                        className="w-96 rounded-lg shadow-lg"
                    />
                    {/* Image 3 */}
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io%2Ff1726512012160x554030195598831360%2Fstrabo.webp?w=512&h=311&auto=compress&dpr=1.25&fit=max"
                        alt="Verve"
                        className="w-96 rounded-lg shadow-lg"
                    />
                    {/* Image 4 */}
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io%2Ff1726512012160x554030195598831360%2Fstrabo.webp?w=512&h=311&auto=compress&dpr=1.25&fit=max"
                        alt="MDSurg Academy"
                        className="w-96 rounded-lg shadow-lg"
                    />
                    {/* Repeat Images for Smooth Effect */}
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io%2Ff1726512012160x554030195598831360%2Fstrabo.webp?w=512&h=311&auto=compress&dpr=1.25&fit=max"
                        alt="BetterLegal"
                        className="w-96 rounded-lg shadow-lg"
                    />
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io%2Ff1726512012160x554030195598831360%2Fstrabo.webp?w=512&h=311&auto=compress&dpr=1.25&fit=max"
                        alt="Conscious Inclusion"
                        className="w-96 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default MovingImages;

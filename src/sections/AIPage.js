import { motion } from 'framer-motion';

const AIPage = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 space-y-10">
                {/* Section Title */}
                <div className="text-center">
                    <motion.h2
                        className="text-sm font-bold text-blue-600 uppercase"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        No-Code App Development
                    </motion.h2>
                    <motion.h1
                        className="text-4xl font-extrabold text-gray-900 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Create with AI, without code
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-gray-600 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Making apps the traditional way takes a long time—even for the most
                        experienced developers. Bubble lets you build without coding—connect
                        to ChatGPT or Claude in less than 5 minutes, and deploy your first
                        GPT-powered app in days, not months.
                    </motion.p>
                </div>

                {/* Buttons */}
                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
                        Get started
                    </button>
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-50">
                        See how it works
                    </button>
                </motion.div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {/* Feature 1 */}
                    <motion.div
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4h16v16H4V4z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                No coding required
                            </h3>
                            <p className="text-gray-600">
                                Bubble has all the building blocks you need to create
                                high-performing AI-powered apps without typing a single line of
                                code.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 12H4"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Never start from scratch
                            </h3>
                            <p className="text-gray-600">
                                Build your AI-powered app with any of the hundreds of
                                customizable Bubble templates and reusable components. Use our
                                drag-and-drop editor to arrange them however you’d like.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <div className="text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Your creativity, the speed of AI
                            </h3>
                            <p className="text-gray-600">
                                Bubble’s build guides give you step-by-step instructions to get
                                your app up and running with no-code, and our AI page designer
                                creates near-instant frontends based on your natural language
                                prompts.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AIPage;

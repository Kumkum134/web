import React from "react";

const VisionMission = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl w-full mb-12">
                <img
                    src="/Assets/vision and mission/Vision.png"
                    alt="Vision"
                    className="w-48 h-48 object-cover mb-4 md:mb-0 md:mr-6"
                />
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">Vision</h1>
                    <p className="text-lg text-gray-600 mt-3">
                        To be the most innovative, quality-oriented, and affordable healthcare &
                        nutrition company providing scientific & research-based solutions to delight
                        our customers globally.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left max-w-4xl w-full mb-12">
                <img
                    src="/Assets/vision and mission/Mission.png"
                    alt="Mission"
                    className="w-48 h-48 object-cover mb-4 md:mb-0 md:ml-6"
                />
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">Mission</h1>
                    <p className="text-lg text-gray-600 mt-3">
                        Work together as a team to provide our customers with extraordinary products
                        and superior quality at competitive prices. Provide opportunities and support
                        to each team member and business partner to lead in their area of business.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl w-full">
                <img
                    src="/Assets/vision and mission/Values.png"
                    alt="Values"
                    className="w-48 h-48 object-cover mb-4 md:mb-0 md:mr-6"
                />
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">Values</h1>
                    <ul className="text-lg text-gray-600 mt-3 space-y-2">
                        <li>🔹 Integrity</li>
                        <li>🔹 Quality mindset</li>
                        <li>🔹 Innovation focus</li>
                        <li>🔹 Customer service</li>
                        <li>🔹 Entrepreneurial drive</li>
                        <li>🔹 Dedication & Commitment</li>
                        <li>🔹 Teamwork & Trust</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;

import React from "react";

const Export = () => {
    return (
        <div className="font-sans">
            <div className="relative">
                <img
                    src="https://storage.googleapis.com/a1aa/image/2K7dQ6qCBTD_bYtRoDotMjDJmInAoUzmdOS8KDc0x1U.jpg"
                    alt="Export"
                    className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl font-bold">Export</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Global Presence</h2>
                    <div className="w-12 h-1 bg-orange-500 mb-6"></div>
                    <p className="mb-6">
                        Aurinko Healthcare markets veterinary and human healthcare products across the globe,
                        with primary focus in South and South-East Asia, SAARC, Gulf, Middle-East, and African regions.
                        We have dedicated manufacturing units in India to develop products suited to meet the diverse needs
                        and preferences of consumers in different markets.
                    </p>
                    <p className="mb-6">If you are looking for Business Opportunities or Business Association.</p>
                    <p className="mb-6">
                        <strong>Email to:</strong>{" "}
                        <a href="mailto:exim@aurinkohealthcare.com" className="text-blue-600 hover:underline">
                            exim@aurinkohealthcare.com
                        </a>
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="/Assets/vision and mission/GlobalMap.jpg"
                        alt="World map highlighting different regions"
                        className="w-full max-w-md mx-auto"
                        width="600"
                        height="400"
                    />
                </div>
            </div>
        </div>
    );
};

export default Export;

import React from "react";

const VisionMission = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex">
                <img
                    src="/Assets/Vision.png"
                    alt="Contact us-Page"
                    className="w-40 h-40 object-cover"
                />
                <h1 className="text-4xl font-bold">Vision & Mission</h1>
                <p className="text-lg mt-4">To be the Most Innovative, Quality Oriented and Affordable Healthcare & Nutrition
                    Company providing Scientific & Research based solutions to delight our customers
                    globally.</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Mission</h1>
                <p className="text-lg mt-4">Work together as a team to provide our customers with extraordinary products and
                    superior quality at competitive price. Provide opportunity and support to each team
                    member and business partner to lead in his area of business.</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Values</h1>
                <p className="text-lg mt-4">Integrity
                    Quality mindset
                    Innovation focus
                    Customer service
                    Entrepreneurial drive
                    Dedication and Commitment
                    Teamwork & Trust</p>
            </div>
        </div>
    );
};

export default VisionMission;
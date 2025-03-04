import React from "react";

const Gallery = () => {
    const images = [
        "https://storage.googleapis.com/a1aa/image/t-5oRmQ4akigGuf2Zeh1cOx1a7OTShbDI4stgDvbW6w.jpg",
        "https://storage.googleapis.com/a1aa/image/rTsFbXo4nLw-IjMIQBPG276Hyt62qk4sCTM2czLBm0Q.jpg",
        "https://storage.googleapis.com/a1aa/image/aocEJJhJ1CavWMhbjdADjOMi3yCDju7RrR9DwRCCZ3A.jpg",
        "https://storage.googleapis.com/a1aa/image/-AgFkiQrTQ1i4zzC4Tz_7IZeFj2UcSKevG4piAmQGOQ.jpg",
        "https://storage.googleapis.com/a1aa/image/N3BtQNB41Q5IDwc92cBrQX1JXiU3sP_BY1FRRyRwcDQ.jpg",
        "https://storage.googleapis.com/a1aa/image/7WV0h-HDOztBb2KxOWe1_3Rk1DuvdXWUMewJcm93Jt8.jpg",
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {images.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={`Manufacturing process ${index + 1}`} className="w-full h-auto rounded shadow" />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
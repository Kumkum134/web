import React from "react";
import ImageSlider from "../../Components/Home Parts/ImageSlider";
import Block1 from "../../Components/Home Parts/Block1";
import Block2 from "../../Components/Home Parts/Block2";
import Block3 from "../../Components/Home Parts/Block3";
import Block4 from "../../Components/Home Parts/Block4";
import Block5 from "../../Components/Home Parts/Block5";
import Block6 from "../../Components/Home Parts/Block6";
import Block7 from "../../Components/Home Parts/Block7";
import Block8 from "../../Components/Home Parts/Block8";
import Footer from "../../Layout/Footer/footer";
import Block9 from "../../Components/Home Parts/Block9";

const Home = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-auto bg-white">
            <ImageSlider />
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <Block6 />
            <Block7 />
            <Block8 />
            <Block9/>
            <Footer />
        </div>
    );
};

export default Home;

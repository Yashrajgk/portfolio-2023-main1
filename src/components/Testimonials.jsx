import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t5 from "../assets/t5.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const Testimonials = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
    return (
        <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img
                className="sec-4-p-e-1 rellax"
                style={{ y: y1 }}
                src={pe1}
            />
            <motion.img
                className="sec-4-p-e-2 rellax"
                style={{ y: y2 }}
                src={pe2}
            />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Recommended by
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                        Recommended by very well known people around the world.
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
                    <Carousel>
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src={t1}
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                />
                                <div className="font-bold">Bhargav Chaudhari</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                    CFO, JPMorgan Chase
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                            Yashraj is a person who prioritizes his work in the first hand, and passionately completes the given work abiding all set deadlines, He is trustworthy and also mentors friends...He is sincere to his seniors and takes criticism sportingly, he is highly skilled in multiple domains, and can perform any given task at ease
                            </div>
                        </div>
                        {/* SLIDE END */}
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src={t2}
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                />
                                <div className="font-bold">Aditya Sinha</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                Chief Revenue and Strategy Officer, Paramount Pictures
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                            He’s a zesty person always motivated to complete tasks and compete with his weaknesses and enjoys his work. He has strongly improved his skills over the time and he’s a man of his words
                            </div>
                        </div>
                        {/* SLIDE END */}
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src={t5}
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                />
                                <div className="font-bold">Vishal Bhidave</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                Vice President, Simplex Infrastructures Limited
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </div>
                        </div>
                        {/* SLIDE END */}
                    </Carousel>
                </Div>
                {/* CAROUSEL END */}
            </Wrapper>
        </div>
    );
};

export default Testimonials;

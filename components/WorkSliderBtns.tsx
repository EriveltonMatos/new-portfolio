"use client";

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react';

interface WorkSliderBtnsProps {
    containerStyles: string;
    btnStyles: string;
    iconsStyles: string;
}

export default function WorkSliderBtns({ containerStyles, btnStyles, iconsStyles }: WorkSliderBtnsProps) {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    )
}
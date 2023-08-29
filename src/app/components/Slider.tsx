"use client";
import { type } from "os"
type slider = {title: string, Description: string, genres: string, coverURL: string, URL: string, classification: string}
import Image from "next/image"
//type sliderPage ={title: string, Description: string, genres: string, coverURL: string, URL: string, classification: string}
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';
export default function Slider({pages}:{pages: Array<slider>}){ 
  const swiperElRef = useRef(null);
  
   register()
    const pagesELements = pages.map((e: slider, i: number) => <SliderPage key={i} {...e} />)
  
    return (
      <swiper-container ref={swiperElRef} slides-per-view="1" loop="true"  autoplay-delay="2500" autoplay-disable-on-interaction="false">
       {pagesELements}
      </swiper-container>

      
    )
}

function SliderPage({title, Description, genres, coverURL, URL, classification} : slider){
return (
        <SwiperSlide
       
        >
            <a href={URL}>
              <div className="mainslider" dir="rtl" >
                <div className="limit">
                  <div className="sliderinfo">
                    <div className="sliderinfolimit">
                      <span className="name" style={{fontSize: 'xx-large'}}>{title}</span>
                      <div className="meta flex flex-col " style={{gap:'5px'}}>
                      
                        <span className="text" dir="rtl">
                          <span>التصنيف: </span><b>{genres}</b> 
                        </span>
                       
                      </div>
                      <div className="desc">
                        <p>
                         {Description}
                        </p>

                      </div>
                      
                    </div>
                  </div>
                  <div
                    className="bigbanner relative flex justify-center h-full"
                  />
                  <Image unoptimized src={coverURL} fill style={{objectFit:'cover'}} alt={title}/>
                </div>
              </div>
            </a>
            </SwiperSlide>
)
}
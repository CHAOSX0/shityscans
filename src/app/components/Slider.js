"use client";
import { type } from "os"
import Image from "next/image"
//type sliderPage ={title: string, Description: string, genres: string, coverURL: string, URL: string, classification: string}
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';
export default function Slider({pages}){
  const swiperElRef = useRef(null);
  
   register()
    const pagesELements = pages.map((e, i) => <SliderPage key={i} {...e} />)
    console.log(pagesELements)
    return (
      <swiper-container ref={swiperElRef} slides-per-view="1" loop="true"  autoplay-delay="2500" autoplay-disable-on-interaction="false">
       {pagesELements}
      </swiper-container>

      
    )
}

function SliderPage({title, Description, genres, coverURL, URL, classification}){
return (
        <SwiperSlide
       
        >
            <a href={URL}>
              <div className="mainslider" >
                <div className="limit">
                  <div className="sliderinfo">
                    <div className="sliderinfolimit">
                      <span className="name" style={{fontSize: 'xx-large'}}>{title}</span>
                      <div className="meta flex flex-col " style={{gap:'5px'}}>
                        
                        <span className="text">
                          النوع: <b>{classification}</b>
                        </span>
                        <span className="text">
                          التصنيف: <b>{classification}</b>
                        </span>
                        <span className="quality" style={{width: 'fit-content'}}>8.0 </span>
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
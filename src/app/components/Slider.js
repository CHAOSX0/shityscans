"use client";
import { type } from "os"
//type slider = {title: string, Description: string, genres: string, coverURL: string, URL: string, classification: string}
import Image from "next/image"
//type sliderPage ={title: string, Description: string, genres: string, coverURL: string, URL: string, classification: string}
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';
import Link from 'next/link'
register();
export default function Slider({pages}){ 
  const swiperElRef = useRef(null);
  
  
    const pagesELements = pages.map((e, i) => <SliderPage key={i} {...e} />)
    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef?.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef?.current.addEventListener('slidechange', (e) => {
        console.log('slide changed');
      });
    }, []);
    return (
      <swiper-container ref={swiperElRef} slides-per-view="1" loop="true"  autoplay-delay="2500" autoplay-disable-on-interaction="false">
       {pagesELements}
      </swiper-container>

      
    )
}

function SliderPage({title, Description, genres, coverURL, URL, classification}){
return (
        <SwiperSlide>
            <Link href={URL}>
              <div className="mainslider" dir="rtl" >
                <div className="limit">
                  <div className="sliderinfo">
                    <div className="sliderinfolimit">
                      <span className="name" style={{fontSize: 'xx-large'}}>{title}</span>
                      <div className="meta flex flex-col " style={{gap:'5px'}}>
                        

                        <span className="text" dir="rtl">
                          <span>التصنيف: </span><b>{genres}</b> 
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
                  <Image priority unoptimized src={coverURL} fill style={{objectFit:'cover'}} alt={title}/>
                </div>
              </div>
            </Link>
            </SwiperSlide>
)
}
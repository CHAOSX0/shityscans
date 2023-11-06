"use client";
import React, { useState, DOMAttributes }  from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from 'swiper/element/bundle';
import Link from 'next/link';
import Image from 'next/image';
register();
function SLide({coverURL, title, genres, URL, Description, i}:{coverURL: string, title: string, type: string, URL: string, i: number, Description: string, genres: string[]}): JSX.Element{
  
 return(
  <swiper-slide 
  style={{width:'100%', display: 'block'}}
  class="swiper-slide"
>
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
                  <Image priority={i==0} src={coverURL} fill style={{objectFit:'cover'}} alt={title}/>
                </div>
              </div>
            </Link>
</swiper-slide>
 )
}
type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['swiper-container']: CustomElement<any>;
      ['swiper-slide']: CustomElement<any>;
    }
  }
}
export default function SeriesSwiper({pages}: {pages: any}): JSX.Element{
  
    const sliders = pages.map((slide: any, i: number) => <SLide key={slide.title} {...slide} i={i}/>)
  return (
    <>
      
       {sliders.length && <swiper-container
          id="home-slider"
          slideClass="swiper-slide"
          
          style={{overflow: 'hidden'}}
          slides-per-view={1}
          centeredSlides={false}
          loop= {true}
        
        >
        
         {sliders}
  </swiper-container>}
  </>
    
  );
}   
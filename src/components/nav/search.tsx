"use client";
import { useState } from 'react';
import {supabase} from '../../../lib/supabase'
import SeriesData from '@/app/types/seriesData';
function Result({coverURL, title, coverWidth, coverHeight, latestChaptersMeta, genres, status, }: SeriesData){
    const chapterTitle = `فصل ${latestChaptersMeta.list[0].number} `
    return (
        <li
          result-type="object"
          index-type="series"
          className="live-search_lnk live-search_item"
        >
          <a href="https://aresnov.org/series/im-really-not-a-demon-lord/">
            <div className="post-thumbnail">
              <img
                src={coverURL}
                alt={title}
                title={title}
                width={50}
                height={75}
              />
            </div>
            <div className="over">
              <div className="autotitle">
               {title}
              </div>
              <span>
            {status}<i  style={{backgroundColor: status == 'ongoing'? 'green' : status == 'completed'? 'yellow' : ''}}/> {chapterTitle}
              </span>
              <span className="post-meta">
              {genres.join(', ')}
              </span>
            </div>
          </a>
        </li>
    )

}
async function getResults(query: string){
    const { data, error: err } = await supabase.from('series').select().textSearch('title', `'${query}'`, {
        type: 'plain',
    })
    if( err){
        throw err
    }
    return data
}
export default function Search(){
const [isLoding, setIsLoading] = useState(false)
const [isShowing, setIsShowing] = useState(false)
const [results, setResults]:[any, any] = useState([]);
return (
    <>
    <div className="searchx minmb">
    <form
      onBlur={()=>{
        setIsShowing(false)
      }}
      onSubmit={(e)=>{
          e.preventDefault()
         const input: any = (document!.getElementById("s") as HTMLInputElement)!.value;
         if(input){
            setIsLoading(true)
            setIsShowing(true)
            getResults(input).then(res=>{
                console.log(res)
                setResults(res)
            })
         }
        }}
      id="form"
    >
     
      <input
        id="s"
        className="search-live"
        type="text"
        placeholder="بحث"
        autoComplete="off"
      />
      <button type="submit" id="submit">
        <i className="fas fa-search" aria-hidden="true" />
      </button>
      <div className="srcmob srccls">
        <i className="fas fa-times-circle" />
      </div>

    </form>
    <div
  id="live-search_sb"
  className="live-search_sb"
  style={{
    position: "absolute",
    width: 350,
    zIndex: 9999,
    top: 130,
  }}
>
  <div className="live-search_sb_cont">
    <div className="live-search_sb_top" />
    <div id="live-search_results" style={{ width: "100%" }}>
      <div id="live-search_val">
        <ul className="live-search_main">
          <li className="live-search_header">Search</li>
          <li>
            <div className="live-search_result_container">
              <ul>
                {isShowing? results.map((e: SeriesData, i: number)=> <Result {...e} key={i} />) : <></>}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div id="live-search_more" />
    </div>
    <div className="live-search_sb_bottom" />
  </div>
</div>
  </div>
   
 </>
)
}
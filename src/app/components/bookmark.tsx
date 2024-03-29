'use client'

import { useEffect, useState } from "react"
import React from "react"

type series = {title: string, lastChapter: {number: number, URL: string}, URL: string, coverURL: string, id: string, created_at: string}
export default function Bookmark(data: series){
    const [isClicked, setIsClicked] = useState(false)
    function getStorage(): Array<series> | undefined{
        const rawData: string | null = localStorage.getItem('bookmarks')
        if(rawData){
            return JSON.parse(rawData)
        }
       
    }
    function getSeries(series: string): series | undefined{
        const data = getStorage()
        if(data && data.length > 0){
            const res = data.filter((e)=>e.id== series)[0]
            console.log(res)
          return res
        }
    }

    function removeSeries(series: string): true | false{
        const data = getStorage()
        const index = data?.findIndex(s=> s.id == series)
        console.log(index, 'index')
        console.log(data, 'data')
        if(data){
            if(index !== -1 && index !== undefined){
                console.log('trying to remove')
                data?.splice(index, 1)
                console.log(data)
                localStorage.setItem('bookmarks', JSON.stringify(data))
                return true
            }else{
                console.log(index)
                console.log('no index')
                return false
        }
    }else{
        console.log('no data')
        return false
    }
}

    function addSeries(series: series){
        const data = getStorage() || []
        data.push(series)
        console.log(series)
        localStorage.setItem('bookmarks', JSON.stringify(data))
    }
    function bookmark(series: series, setIsClicked: any){
       if(getSeries(series.id)){
         console.log('already clicked')
         removeSeries(series.id)
         setIsClicked(false)
       }else{
        console.log('not already clicked')
        addSeries(series)
        setIsClicked(true)
       }
    }
    useEffect(()=>{
        const series = getSeries(data.id)
        if(series){
         setIsClicked(true)
        }
    }, [])
    const color = isClicked ? '#2f2f2f' : '#01d9b9'
    console.log('rerendeer')
    console.log(color)
return (
    <div style={{backgroundColor:  color}} data-id={JSON.stringify(isClicked)}  className="bookmark" onClick={(e)=>{bookmark(data, setIsClicked)}}>
      <i className="far fa-bookmark" aria-hidden="true" /> Bookmark
    </div>
)
}
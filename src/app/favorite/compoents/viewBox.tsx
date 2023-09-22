"use client"
import NC from "@/app/components/cards/NC"
import { useEffect, useState } from "react"
type series = {coverURL: string, URL: string, lastChapter: {URL:string, number: number}, title: string, id: string, created_at: string}
export default function View(){
    const [Data, setData]: [Array<any>, any] = useState([])
    useEffect(()=>{
        const data: Array<series> = JSON.parse(localStorage.getItem('bookmarks') || '[]')
        setData(data)
    }, [])
    const cards = Data.map(e=> <NC {...e} latestChaptersMeta={{list:[e.lastChapter]}} />)
return (
    <div>
      {cards}
    </div>
)
}
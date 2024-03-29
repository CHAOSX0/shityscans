import Link from "next/link";
import SeriesData from "../../types/seriesData";
import Image from 'next/image'
export default function NC({title, coverURL, coverWidth, coverHeight, latestChaptersMeta, created_at,URL }: SeriesData){
    const cover: string = coverURL;
    const width: number = coverWidth || 0;
    const height: number = coverHeight || 0;
    const chapterNumber: number = latestChaptersMeta.list.reverse()[latestChaptersMeta.list.length - 1]?.number;
    console.log(chapterNumber, 'nummmm')
    const chapterTitle: string = `الفصل ${chapterNumber}`;
    const publishDate: Date = new Date(created_at);

    return(
        <div className="bs styletere" style={{maxWidth:'150px'}}>
        <div className="bsx">
          <Link
            href={URL}
            title={title}
          >
            <div className="limit">
              <div className="ply" />
              <span className="type Manhua" />
              
              <Image
                src={cover}
                className="ts-post-image wp-post-image attachment-medium size-medium"
                loading="lazy"
                title={title}
                alt={title}
               fill
               
              
              />{" "}
            </div>
            <div className="bigor">
              <div className="tt">{title}</div>
              <div className="adds">
                <div className="epxs" style={{textAlign:'right'}}>{chapterTitle}</div>
                <div className="epxdate" style={{textAlign:'right'}}>{getDiff(publishDate)}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
}


function getDiff(date: Date){
const time: number = date.getTime()
const timeNow: number = new Date().getTime()
const diffinms: number = Math.abs(timeNow - time)
function inTime(ms: number, div: number){
const number = Math.floor(ms / div)
const prefixes:any={
    "31557600000":{
        one:'سنة',
        two:'سنتين',
        many:'سنين'
    },
    "2592000000":{
        one:'شهر',
        two:'شهرين',
        many:'أشهر'
    },
    "604800000":{
        one:'اسبوع',
        two:'اسبوعين',
        many:'اسابيع'
    },
    "86400000":{
        one:'يوم',
        two:'يومين',
        many:'ايام'
    },
    "3600000":{
    one:'ساعة',
    two:'ساعتين',
    many:'ساعات'
    },
    "60000":{
        one: 'دقيقة',
        two:'دقيقتين',
        many: 'دقائق'
    }

}

if(number == 1){
    
    return `قبل ${prefixes[div.toString()].one}`
}
if(number == 2){
    return `قبل ${prefixes[div.toString()].two}`
}
if(number > 3){
    return `قبل ${number} ${prefixes[div.toString()].many}`
}
}
const year = 1000*60*60*24*365.25
const month =  1000*60*60*24*30
const week = 1000*60*60*24*7
const day = 1000*60*60*24
const hour = 1000*60*60
const minute = 1000*60
return diffinms >= year ?  inTime(diffinms, year) : diffinms >= month? inTime(diffinms, month) : diffinms>= week? inTime(diffinms, week) : diffinms >= day? inTime(diffinms, day) : diffinms >= hour? inTime(diffinms, hour) : diffinms >= minute? inTime(diffinms, hour) : 'now'
}
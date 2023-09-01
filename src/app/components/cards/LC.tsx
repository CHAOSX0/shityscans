import SeriesData from '@/app/types/seriesData';
import Link from 'next/link'

export default function LCard({title, coverURL, created_at, coverHeight, coverWidth, rating, latestChaptersMeta, URL}: SeriesData){
   
    const type: string = 'Manhua';
    const cover: string = coverURL
    const width: number = coverHeight;
    const height: number = coverWidth;
    const chapters = latestChaptersMeta.list.map((e: any, i: number)=><Chapter key={i} {...e}/>)
    return(
        <div className="bs styletere stylefiv" dir="rtl">
              <div className="bsx">
                <Link
                  href={URL}
                  title={title}
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className={`type ${type}`} />
                    <img
                      src={cover}
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title={title}
                      alt={title}
                      width={width}
                      height={height}
                    />
                  </div>
                </Link>
                <div className="bigor" style={{height:100}}>
                  <div className="tt" style={{paddingLeft:'7px'}}>
                    <a
                      href={URL}
                      title={title}
                    >
                      {title}
                    </a>
                  </div>
                  <ul className="chfiv">
                
                   {chapters}
                  </ul>
                </div>
              </div>
            </div>
    )
}

function Chapter({URL, created_at, number}:{URL: string, created_at: string, number: number}){
    const title: string = `الفصل ${number}`
    console.log(created_at)
    const ago: string = getDiff(new Date(created_at))
return (
    <li>
    <a href={URL}>
      {title}
    </a>
    <span>{ago}</span>
  </li>
)
}

function getDiff(date: Date): string{
  console.log(date)
  const time: number = date.getTime()
  const timeNow: number = new Date().getTime()
  const diffinms: number = Math.abs(timeNow - time)
  console.log(diffinms)
  function inTime(ms: number, div: number): string{
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
  return ''
  }
  const year = 1000*60*60*24*365.25
  const month =  1000*60*60*24*30
  const week = 1000*60*60*24*7
  const day = 1000*60*60*24
  const hour = 1000*60*60
  const minute = 1000*60
  return diffinms >= year ?  inTime(diffinms, year) : diffinms >= month? inTime(diffinms, month) : diffinms>= week? inTime(diffinms, week) : diffinms >= day? inTime(diffinms, day) : diffinms >= hour? inTime(diffinms, hour) : diffinms >= minute? inTime(diffinms, hour) : 'now'
  }
import Nav from "@/components/nav"
import SeriesData from "@/app/types/seriesData";
import Link from "next/dist/client/link";
import genre from "@/app/types/genre";
import  Image  from "next/image";
import Bookmark from "@/app/components/bookmark";
import { Metadata } from "next";

async function getData(seriesID: string){
  const res = await fetch(`https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?id=eq.${seriesID}`, {
    next:{
      revalidate: 10
    },
    headers:{
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  });
  if (!res.ok) {
    console.log(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
    return;
  }
  const result = await res.json()
 // console.log(result)
  return result
}

async function getChapters(seriesID: string, n: number, S ='0'){
  const url = `https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/chapters?series=eq.${seriesID}&order=number.desc&select=created_at, number, URL`
  const res = await fetch(url, {
    cache: 'no-cache',
    headers:{
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  });
  if (!res.ok) {
    console.log(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
    return;
  }
  const result = await res.json()
 
  return result
}
async function getDetails(id: string, S=60*60*12) {
  const url = `https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/seriesDetails?id=eq.${id}`
  const res = await fetch(url, {
    next:{
      revalidate: S
    },
    headers:{
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  });
  if (!res.ok) {
    console.log(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
    return;
  }
  const result = await res.json()
  //console.log(result)
  return result
}

export async function generateMetadata({ params }: {params: {seriesID: string}}): Promise<Metadata>{
  const [{coverURL, title, details, URL}]: [SeriesData] = await getData(params.seriesID)
  const [{description}] : [{description: string}] = await getDetails(details)
  return {
    title: `مانهوا ${title} على ساكنلي مانجا`,
    description: description,
    openGraph: {
      images:[coverURL],
    },
  }
}
export default async function Page({ params }: { params: { seriesID: string } }) {
    const chapters = await getChapters(params.seriesID, 100)
    
    const [d]  = await getData(params.seriesID);
    const {title, coverURL, created_at, coverHeight, coverWidth, rating, latestChaptersMeta, genres:  genresData, id, URL: url}: SeriesData = d;
    const genres = genresData.map((e: genre, i)=><Genre URL={`/genre/${e}`} text={e} key={i} />)
    const {details}: {details: string} = d
    const [d2] = await getDetails(details)
    const {description} : {description: string} = d2
    return (
    <div className="mainholder rtl" dir='rtl'>
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
     <div id="content" className="manga-info mangastyle">
  <div className="wrapper">
    <div className="bigcover" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <Image
      src={coverURL}
      alt="baner"
      fill
      style={{objectFit:'cover'}}
       />
    </div>
    <div className="postbody full">
      <article
        id="post-112"
        className="post-112 hentry"
        itemType="http://schema.org/CreativeWorkSeries"
      >
        <div className="main-info">
          <div className="info-left">
           <CoverInfo status="OnGoing" type="Manhua" coverURL={coverURL} title={title} created_at={created_at} URL={`${url}`} latestChaptersMeta={latestChaptersMeta} id={id} coverHeight={0} coverWidth={0} rating={0} genres={[]} details=""/>
          </div>
          <div className="info-right">
            <div className="info-desc bixbox">
              <div id="titledesktop">
                <div id="titlemove">
                  <h1 className="entry-title" itemProp="name">
                    {title}
                  </h1>
                  <span className="alternative">{title}</span>
                </div>
              </div>
              <div className="wd-full">
                <span className="mgen">
                 {genres}
                </span>
              </div>
              <div className="wd-full">
                <h2>قصة مانجا: {title}</h2>
                <div
                  className="entry-content entry-content-single"
                  itemProp="description"
                >
                  <p>
                   {description}
                  </p>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: "\n.series-history-pool{\n    margin:15px;\n}\n"
              }}
            />
            {/* series history*/}
             <ChapterBox chapters={chapters} lastChapter={latestChaptersMeta.list[0]} title={title}/>
            <div className="ts-breadcrumb bixbox">
              <ol itemScope itemType="http://schema.org/BreadcrumbList">
                <li
                  itemProp="itemListElement"
                  itemType="http://schema.org/ListItem"
                >
                  <a itemProp="item" href="/">
                    <span itemProp="name">
                      مانجا Scanly |أفضل موقع للمانهوا والمانجا العربية
                    </span>
                  </a>
                  <meta itemProp="position" />
                </li>
                ›
                <li
                  itemProp="itemListElement"
                  itemType="http://schema.org/ListItem"
                >
                  <a
                    itemProp="item"
                    href={`${url}`}
                  >
                    <span itemProp="name">{title}</span>
                  </a>
                  <meta itemProp="position"/>
                </li>
              </ol>
            </div>
            <div className="ts-breadcrumb bixbox">
              مانجا <strong>{title}</strong>, مانجا{" "}
              <strong>{title}</strong> مترجمة, read{" "}
              <strong>{title}</strong>, <strong>{title}</strong>{" "}
              english, <strong>{title}</strong> eng, download{" "}
              <strong>{title}</strong> eng, read{" "}
              <strong>{title}</strong> online, قراءة{" "}
              <strong>{title}</strong>, <strong>{title}</strong>{" "}
              مترجم, <strong>{title}</strong> بالعربية ,تنزيل{" "}
              <strong>{title}</strong> مترجم ,قراءة{" "}
              <strong>{title}</strong> مجانا,{" "}
              <strong>{title}</strong> مانجا لايك,{" "}
              <strong>{title}</strong> motarjam
            </div>
          </div>
        </div>
        <span
          style={{ display: "none" }}
          itemProp="publisher"
          itemType="https://schema.org/Organization"
        >
          <span
            style={{ display: "none" }}
            itemProp="logo"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta
              itemProp="url"
              content="http://aresmanga.org/wp-content/uploads/2022/12/ares-logo-blank.png"
            />
          </span>
          <meta
            itemProp="name"
            content="مانجا Scanly أفضل موقع للمانهوا والمانجا العربية"
          />
        </span>
      </article>
    </div>
  </div>
</div>

    </div>
    )
}
function ChapterBox({chapters, lastChapter, title}: {chapters: Array<{URL: string, number: number}>, lastChapter: {URL: string, number: number}, title: string}){
  if(!chapters.length){
    return(<>
    <div style={{height: '150px', display: 'flex', alignItems: 'center', backgroundColor:'#222', borderRadius: '5px', fontSize: 'large', paddingRight:'10px'}}>
      لا يوجد فصول
    </div>
    </>)
  }else{
   
  }
  const chapterELements = chapters.map((e:any, i: number) => <Chapter {...e} key={i} />)
  const firstChapter = [...chapters].sort((a, b)=> a.number - b.number)[0]

  const firstChapterTitle = `الفصل ${firstChapter.number}`
  const lastChapterTitle = `الفصل ${lastChapter.number}`
  return (
    <>  <div
    className="bixbox bxcl"
    id="series-history"
    style={{ display: "none" }}
  >
    <div className="releases">
      <h2>سجل القراءة</h2>
    </div>
    <div className="series-history-pool">
      <ul className="clstyle" id="series-history-ul" />
    </div>
  </div>

  {/* /series history*/}
  <div className="bixbox bxcl epcheck">
    <div className="releases">
      <h2>فصول {title}</h2>
    </div>
    <div className="lastend">
      <div className="inepcx">
        <Link href={firstChapter.URL}>
          <span>الفصل الأول</span>
          <span className="epcur epcurfirst">{firstChapterTitle}</span>
        </Link>
      </div>
      <div className="inepcx">
       <Link href={lastChapter.URL}>
          <span>فصل جديد</span>
          <span className="epcur epcurlast">{lastChapterTitle}</span>
       </Link>
      </div>
    </div>
    <div className="search-chapter">
      <input
        id="searchchapter"
        type="text"
        placeholder="البحث عن الفصل. مثال: 25 or 178"
        autoComplete="off"
      />
    </div>
    <div className="eplister" id="chapterlist">
    <ul>
      {chapterELements}
    </ul>
    </div>
  </div>
  </>
  )
}
function Genre({URL, text}: {URL: string, text: string}){
    return (
     <>
      <a href={URL} rel="tag">
       {text}
      </a>
      {" "}
     </>
    )

}
function CoverInfo({coverURL, title, type, created_at, status, latestChaptersMeta, id, URL} : SeriesData){
    const creationDateString: string = toDate(created_at)
return(
    <div className="info-left-margin">
    <div
      className="thumb"
      itemProp="image"
      style={{aspectRatio: 1/1.41}}
      itemType="https://schema.org/ImageObject"
    >
      <Image
        src={coverURL}
        className="attachment- size- wp-post-image"
        alt={title}
        decoding="async"
        title={title}
        itemProp="image"
        fill
      />{" "}
    </div>
    <div id="mobiletitle" />
    <Bookmark coverURL={coverURL} URL={`${URL}`} created_at={latestChaptersMeta.list[0].created_at} lastChapter={{number: latestChaptersMeta.list[0].number, URL: latestChaptersMeta.list[0].URL}} title={title} id={id} />
  
    <div className="rating bixbox">
      <div
        className="rating-prc"
        itemProp="aggregateRating"
        itemType="//schema.org/AggregateRating"
      >
        <meta itemProp="worstRating"/>
        <meta itemProp="bestRating"  />
        <meta itemProp="ratingCount"  />
        <div className="rtp">
          <div className="rtb">
            <span style={{ width: "90%" }} />
          </div>
        </div>
        <div className="num" itemProp="ratingValue" >
          9.0
        </div>
      </div>
    </div>
    <div className="tsinfo bixbox">
      <div className="imptdt">
        الحالة <i>{status}</i>
      </div>
      <div className="imptdt">
        النوع <a>{type}</a>
      </div>
      
      <div className="imptdt">
        منشور في{" "}
        <i>
          <time
            itemProp="datePublished"
            dateTime={created_at}
          >
            {new Date(created_at).toLocaleDateString()}
          </time>
        </i>
      </div>
      <div className="imptdt">
        جديد إصداراتنا{" "}
        <i>
          <time
            itemProp="dateModified"
            dateTime="2023-07-31T02:52:33+02:00"
          >
            يوليو 31, 2023
          </time>
        </i>
      </div>
    </div>
  </div>
)
}
function toDate(date: string){
    const options: {weekday: any, year: any, month: any, day: any} = { weekday: "long", year: 'numeric', month: 'long', day: 'numeric'};
    const res = convertNumeral(new Date(date).toLocaleDateString('ar-EG', options))
    function convertNumeral(text: string) : string{
        let txt = text
     txt = txt.replaceAll('١', '1')
     txt = txt.replaceAll('٢', '2')
     txt = txt.replaceAll('٣', '3')
     txt = txt.replaceAll('٤', '4')
     txt = txt.replaceAll('٥', '5')
     txt = txt.replaceAll('٦', '6')
     txt = txt.replaceAll('٧', '7')
     txt = txt.replaceAll('٨', '8')
     txt = txt.replaceAll('٩', '9')
     txt = txt.replaceAll('٠', '0')
     
      return txt
    }
    return res 
}
function Chapter({number, created_at, URL}: {number: number, created_at: string, URL: string}){
    const chapterTitle: string = `الفصل ${number}`
   
   
    
    const chapterEnglishDate:string = toDate(created_at)
    
    
     return (
        <li data-num={number}>
                    <div className="chbox">
                      <div className="eph-num">
                        <a href={URL}>
                          <span className="chapternum">{chapterTitle}</span>
                          <span className="chapterdate">{chapterEnglishDate}</span>
                        </a>
                      </div>
                    </div>
                  </li>
    )
}
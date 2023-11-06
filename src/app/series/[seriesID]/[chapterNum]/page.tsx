import Nav from "@/components/nav"
import chapter from "@/app/types/chapter";
import SeriesData from "@/app/types/seriesData";
import { Metadata } from "next";
import Link from "next/link";
async function getData(number: string, series: string, S: number = 0) {
 
    const url = `https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/chapters?series=eq.${series}&number=eq.${number}`
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
     // console.log(await res.json());
      // This will activate the closest `error.js` Error Boundary
      throw 'fuck';
      return;
    }
    const result = await res.json()
   
    return result
}
async function getPreviousChapter(number: number,series: string, S:number = 0){
  const res = await fetch(`https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/chapters?number=lt.${number}&series=eq.${series}&select=URL&order=number.desc`, {
    next:{
      revalidate: S
    },
    headers:{
      'Range-Unit': 'items',
      'Range': `0-0`,
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  });
  if (!res.ok) {
   // console.log(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
    return;
  }
  const result = await res.json()
  if(!result.length){
    return [{URL: `/series/${series}`}]
  }
 // console.log(result)
  return result
}
async function getNextChapter(number: number,series: string, S:number = 0){
  const res = await fetch(`https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/chapters?number=gt.${number}&series=eq.${series}&select=URL&order=number`, {
    next:{
      revalidate: S
    },
    headers:{
      'Range-Unit': 'items',
      'Range': `0-0`,
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
 if(!result.length){
  return [{URL: `/series/${series}`}]
 }
 console.log(result)
  return result
}
async function getParentData(seriesID: string, S: number = 0){
  const res = await fetch(`https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?id=eq.${seriesID}`, {
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
 // console.log(result)
  return result
}
export async function generateMetadata({ params }: {params:{ chapterNum: string, seriesID: string }}): Promise<Metadata>{
  const [{number, series}]: [chapter] = await getData(params.chapterNum, params.seriesID, 60*60*24)
  const [{title, coverURL }] : [SeriesData] = await getParentData(series, 60*60*24)
  return {
    title: `الفصل ${number} ${title} على سكانلي مانجا`,
    openGraph: {
      images:[coverURL],
    },
  }
}

export default async function Chapter ({ params }: { params: { chapterNum: string, seriesID: string } }) {
 
  const [{number, pages, URL, series, created_at}] : [chapter] = await getData(params.chapterNum, params.seriesID, 60*60*24)
  const [{title, coverURL, URL: seriesURL }] : [SeriesData] = await getParentData(series, 60*60*24)
  const [{URL: nextURL}]: [chapter] = await getNextChapter(number, series, 60)
  const [{URL: prevURL}]: [chapter] = await getPreviousChapter(number, series, 60*60*24)
  console.log(nextURL)
  console.log(prevURL)
    const images = pages.map((e: string) =>{
      return {URL: e}
    })
  
    const pagesELements = images.map((e: {URL: string}, i: number)=> <Page {...e} key={i}/>)
    return (
        <div className="mainholder rtl">
          
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
  <div id="content" className="readercontent">
    <div className="wrapper">
      <div className="chapterbody">
        <div className="postarea">
          <article
            id="post-142903"
            className="post-142903 hentry"
            itemScope
            itemType="http://schema.org/CreativeWork"
          >
            <div className="headpost">
              <h1 className="entry-title" itemProp="name">
                {title} – Chapter {number}
              </h1>
              <div className="allc">
                All chapters are in{" "}
                <a href={seriesURL}>
                  {title}
                </a>
              </div>
            </div>
            <div className="ts-breadcrumb bixbox">
              <ol itemScope itemType="http://schema.org/BreadcrumbList">
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <a itemProp="item" href="/">
                    <span itemProp="name">
                      مانجا Scanly | أفضل موقع للمانهوا والمانجا العربية
                    </span>
                  </a>
                  <meta itemProp="position" />
                </li>
                ›
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <Link
                    itemProp="item"
                    href={seriesURL}
                  >
                    <span itemProp="name">{title}</span>
                  </Link>
                  <meta itemProp="position" />
                </li>
                ›
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <a
                    itemProp="item"
                    href={URL}
                  >
                    <span itemProp="name">{title} – Chapter {number}</span>
                  </a>
                  <meta itemProp="position" />
                </li>
              </ol>
            </div>
            <div className="ts-breadcrumb bixbox">
              مانجا <strong>{title} – Chapter {number}</strong>, مانجا{" "}
              <strong>{title} – Chapter {number}</strong> مترجمة, read{" "}
              <strong>{title} – Chapter {number}</strong>,{" "}
              <strong>{title} – Chapter {number}</strong> english,{" "}
              <strong>{title} – Chapter {number}</strong> eng, download{" "}
              <strong>{title} – Chapter {number}</strong> eng, read{" "}
              <strong>{title} – Chapter {number}</strong> online, قراءة{" "}
              <strong>{title} – Chapter {number}</strong>,{" "}
              <strong>{title} – Chapter {number}</strong> مترجم,{" "}
              <strong>{title} – Chapter {number}</strong> بالعربية ,تنزيل{" "}
              <strong>{title} – Chapter {number}</strong> مترجم ,قراءة{" "}
              <strong>{title} – Chapter {number}</strong> مجانا,{" "}
              <strong>{title} – Chapter {number}</strong> مانجا لايك,{" "}
              <strong>{title} – Chapter {number}</strong> motarjam
            </div>
            <div
              className="entry-content entry-content-single maincontent"
              itemProp="description"
            >
              <div className="chdesc">
                <p>
                  مانجا <b> {title} – Chapter {number} </b> ,
                  <b> مانجا Scanly| أفضل موقع للمانهوا والمانجا العربية </b>
                  . مانجا <b> {title} </b> مترجمة على{" "}
                  <b> مانجا Scanly| أفضل موقع للمانهوا والمانجا العربية </b>
                  .{" "}
                </p>
              </div>
              <div className="chnav ctop nomirror">
                <span className="selector slc l">
                  {" "}
                  <div className="nvx">

                  </div>
                </span>
                <span className="navrig">
                  <span className="selector readingmode l">
                    <select name="readingmode" id="readingmode">
                      <option value="full" selected>
                        صفحة كاملة
                      </option>
                      <option value="single">صفحة واحدة</option>
                    </select>
                  </span>
                </span>
                <span className="navlef">
                  <span className="npv r">
                    {" "}
                    <div className="nextprev">
                      <Link
                        className="ch-prev-btn"
                        href={prevURL}
                        rel="prev"
                      >
                        <i className="fas fa-angle-left" /> السابق{" "}
                      </Link>
                      <Link
                        className="ch-next-btn disabled"
                        href={nextURL}
                        rel="next"
                      >
                        التالي <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </span>
                  <span className="amob nodlx">
                    <span className="selector pagedsel r">
                      <select
                        name="select-paged"
                        className="ts-select-paged"
                        id="select-paged"
                      >
                        <option value={0}>1/9</option>
                        <option value={1}>2/9</option>
                        <option value={2}>3/9</option>
                        <option value={3}>4/9</option>
                        <option value={4}>5/9</option>
                        <option value={5}>6/9</option>
                        <option value={6}>7/9</option>
                        <option value={7}>8/9</option>
                        <option value={8}>9/9</option>
                      </select>
                    </span>
                  </span>
                </span>
              </div>
              <div id="readerarea">
               {pagesELements}
              </div>
              <div
                id="readerarea-loading"
                style={{ textAlign: "center", display: "none" }}
              >
                <img src="https://aresnov.org/wp-content/themes/mangareader/assets/img/readerarea.svg" />
              </div>
              <div className="kln">
               
              </div>
              
            </div>
            <span className="npv r" style={{width:'100%', display:'flex', paddingBottom: '15px', paddingTop:'10px', justifyContent:'space-evenly'}}>
                    {" "}
                    <div className="nextprev">
                      <Link
                        className="ch-prev-btn"
                        href={prevURL}
                        rel="prev"
                      >
                        <i className="fas fa-angle-left" /> السابق{" "}
                      </Link>
                      <Link
                        className="ch-next-btn disabled"
                        href={nextURL}
                        rel="next"
                      >
                        التالي <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </span>
            <div className="chaptertags">
              <p>
                Tags: مانجا {title} – Chapter{number}, كوميك {title}
                – Chapter{number}, قراءة {title} – Chapter {number} اونلاين,
                {title} – Chapter {number} الفصل, {title} – Chapter {number}
                الفصل, {title} – Chapter {number} جودة عالية, {title}
                – Chapter {number} مترجم, ترجمة{title} – Chapter {number},مانجا
                {title} – Chapter {number},
                <time
                  className="entry-date"
                  dateTime="2023-07-31CEST02:52:21+0200"
                  itemProp="datePublished"
                 
                >
                {new Date(created_at).toLocaleDateString()}
                </time>
                , <span itemProp="author">Scanly</span>
              </p>
            </div>
          </article>
      
        </div>
      </div>
    </div>
  </div>
  <div id="footer">
    <footer
      id="colophon"
      className="site-footer"
      itemScope
      itemType="http://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="footermenu">
        <div className="menu-footer-container">
          <ul id="menu-footer" className="menu">
            <li
              id="menu-item-116"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-116"
            >
              <a href="https://aresnov.org" itemProp="url">
                الصفحة الرئيسية
              </a>
            </li>
            <li
              id="menu-item-17953"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17953"
            >
              <a
                href="https://aresnov.org/%d8%ad%d9%82%d9%88%d9%82-%d8%a7%d9%84%d8%b7%d8%a8%d8%b9-%d9%88%d8%a7%d9%84%d9%86%d8%b4%d8%b1-dmca/"
                itemProp="url"
              >
                حقوق الطبع والنشر DMCA
              </a>
            </li>
            <li
              id="menu-item-17954"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17954"
            >
              <a
                href="https://aresnov.org/terms-and-conditions/"
                itemProp="url"
              >
                الشروط والأحكام
              </a>
            </li>
            <li
              id="menu-item-17955"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17955"
            >
              <a href="https://aresnov.org/privacy-policy-2/" itemProp="url">
                سياسة الخصوصية
              </a>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="footercopyright">
        <div className="sosmedmrgn" />{" "}
        <div className="copyright">
          <div className="txt">
            <p>
              All the comics on this website are only previews of the original
              comics, there may be many language errors, character names, and
              story lines. For the original version, please buy the comic if
              it's available in your city.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

    )
}


function Page({URL}: {URL: string}){
    return (
        <img
                  className="ts-main-image curdown"
                  data-index={0}
                  src={URL}
                  data-server="Server1"
                 
                />
    )
}

import PTCCard from './components/cards/PTC';
import LCard from './components/cards/LC';
import NC from './components/cards/NC';
import Nav from '@/components/nav';
import Slider from './components/Slider';
import Genres from './components/genres';
import SeriesData from './types/seriesData';
import genre from './types/genre';
async function getLatesAddedSeriesData(n: number){
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=created_at', {
    next:{
      revalidate: 10
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-'+n,
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  });
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    console.log(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
    return;
  }

  return await res.json()
}
async function getPopularSeriesData(n: number) : Promise<Array<any>>{
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?is_popular=is.true', {
    next:{
      revalidate: 10
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-'+ n,
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  });
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    console.error(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
  }

  return await res.json()
}
async function getLatestSeriesData(n: number) {
 
  //const {data, error} = await supabase.from('series').select().order('title')
//console.log(data)
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=updated', {
    next:{
      revalidate: 10*60
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-' + n,
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  })
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    console.log(await res.json())
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
  }

  return await res.json()
}
async function getGenres(n:number){
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/genres', {
   next:{
    revalidate: 60*60
   },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-' + n,
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  })
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    console.log(await res.json())
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
  }
  const result = await res.json()
  return result
}
export default async function Home() {
  //@ get the popular series data, query based on is_popular column
  const popularseriesdata =  await getPopularSeriesData(30);
  //@get the first 30 series ordered by "updated" column 
  const latestSeriesData = await getLatestSeriesData(30);
  //@ get the firs 30 series ordered by "created_at" column
  const latestAddedSeriesData = await getLatesAddedSeriesData(30);
  const latestAdedSeries = latestAddedSeriesData.map((e: SeriesData, i:number)=> <NC {...e} key={i}/>);
  const PopularSeries: any = popularseriesdata.map((e: SeriesData, i:number)=><PTCCard {...e} key={i}/>);
  const latestSeries: any = latestSeriesData.map((e: SeriesData, i: number)=><LCard key={i} {...e}/>);
  //>temporary data
  const tempSliderData = [{title: 'martial peak',
  Description: 'واحد ضعيف بصير قوي و بيجمع مية الف مرأة',
  genres: ' هكر, مصاري, نسوان, اغتصاب',
  coverURL: 'https://i3.wp.com/aresnov.org/wp-content/uploads/2022/12/GE_Yang_Kai.jpg',
  URL: '/series/martialpeak',
  classification: 'Manhua'},
  { title: 'martial peak',
  Description: 'واحد ضعيف بصير قوي و بيجمع مية الف مرأة',
  genres: 'هكر,مصاري, نسوان, اغتصاب',
  coverURL: 'https://i3.wp.com/aresnov.org/wp-content/uploads/2022/12/GE_Yang_Kai.jpg',
  URL: '/series/martialpeak',
  classification: 'Manhua'}];

 /* const genres: Array<genre> = [
    {URL: '/genre/action', text: 'أكشن'},{ URL: '/genre/romance', text: 'رومانسي'},{ URL: '/genre/comedy', text: 'كوميديا'},{URL: '/genre/school', text: 'مدرسي'}
  ]*/
  const genres = await getGenres(6)
  return (
    <>
    <div className="mainholder rtl" dir='rtl'>
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
     <Slider pages={tempSliderData} />
     <Genres data={genres}/>
  <div id="content">
    <div className="wrapper">
      <div className="hotslid">
        <div className="bixbox hothome full">
          <div className="releases">
            <h2>شائع اليوم</h2>
          </div>
          <div className="listupd">
           {PopularSeries}
          </div>
        </div>
      </div>
      <div className="postbody">
        <div className="kln">
        </div>
        <br />
        <div className="bixbox">
          <div className="releases">
            <h2>جديد إصداراتنا</h2>
            <a className="vl" href="https://aresmanga.org/series/?order=update">
              جميــع الأعمال
            </a>
          </div>
          <div className="listupd">
            {latestSeries}
          </div>
        </div>
        <div className="bixbox">
          <div className="releases">
            <h2>مضاف حديثا</h2>
          </div>
          <div className="listupd">
            {latestAdedSeries}
          </div>
        </div>{" "}
       
      
      </div>
     
    </div>
  </div>
  <div id="footer">
    <footer
      id="colophon"
      className="site-footer"
    
      itemType="http://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="footermenu">
        <div className="menu-footer-container">
          <ul id="menu-footer" className="menu">
            <li
              id="menu-item-116"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-116"
            >
              <a
                href="https://aresmanga.org"
                aria-current="page"
                itemProp="url"
              >
                الصفحة الرئيسية
              </a>
            </li>
            <li
              id="menu-item-17953"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17953"
            >
              <a
                href="https://aresmanga.org/%d8%ad%d9%82%d9%88%d9%82-%d8%a7%d9%84%d8%b7%d8%a8%d8%b9-%d9%88%d8%a7%d9%84%d9%86%d8%b4%d8%b1-dmca/"
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
                href="https://aresmanga.org/terms-and-conditions/"
                itemProp="url"
              >
                الشروط والأحكام
              </a>
            </li>
            <li
              id="menu-item-17955"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17955"
            >
              <a href="https://aresmanga.org/privacy-policy-2/" itemProp="url">
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
</>
  )
}

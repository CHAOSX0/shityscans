import PTCCard from './components/cards/PTC'
import LCard from './components/cards/LC'
import NC from './components/cards/NC'
import Nav from '@/components/nav'
import Slider from './components/Slider.js'
async function getLatesAddedSeriesData(){
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=created_at', {
    next:{
      revalidate: 10
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-30',
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
    return
  }

  return await res.json()
}
async function getPopularSeriesData() : Promise<Array<any>>{
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?is_popular=is.true', {
    next:{
      revalidate: 10
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-30',
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  })
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    console.error(await res.json())
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
  }

  return await res.json()
}
async function getLatestSeriesData() {
  //const {data, error} = await supabase.from('series').select().order('title')
//console.log(data)
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=updated', {
    next:{
      revalidate: 10
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-30',
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
export default async function Home() {
  type SeriesData = {id: string, created_at: string, title: string, coverURL: string, coverWidth: number, coverHeight: number, rating: number, latestChaptersMeta:{list:Array<{number: number, created_at:string, URL: string}>, details: string}}
  const popularseriesdata =  await getPopularSeriesData()
  console.log(popularseriesdata)
  const latestSeriesData = await getLatestSeriesData()
  const latestAddedSeriesData = await getLatesAddedSeriesData()
  const latestAdedSeries = latestAddedSeriesData.map((e: SeriesData, i:number)=> <NC {...e} key={i}/>)
  const PopularSeries: any = popularseriesdata.map((e: SeriesData, i:number)=><PTCCard {...e} key={i}/>)
  const latestSeries: any = latestSeriesData.map((e: SeriesData, i: number)=><LCard key={i} {...e}/>)
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
  classification: 'Manhua'}]
  return (
    <>
    <div className='relative'>
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
     <Slider pages={tempSliderData} />
 
  <div id="content" className='overflow-hidden max-w-screen-xl mt-9 relative pb-72 mx-auto mb-0'>
    <div className="my-0 mx-5 relative">
      <div className="hotslid"> 
        <div className="bixbox hothome full overflow-hidden rounded mb-4  bg-neutral-800">
          <div className="releases">
            <h2 className="mt-4 text-sm">شائع اليوم</h2>
          </div>
          <div className="p-2 overflow-hidden">
           {PopularSeries}
          </div>
        </div>
      </div>
      <div className="float-right w-8/12"> 
        <div className="text-center relative overflow-hidden">
        </div>
        <br />
        <div className="bixbox rounded-sm mb-4 overflow-hidden"> 
          <div className="releases relative flex justify-between items-baseline">
            <h2>جديد إصداراتنا</h2>
            <a className="vl" href="https://aresmanga.org/series/?order=update">
              جميــع الأعمال
            </a>
          </div>
          <div className="p-2 overflow-hidden">
            {latestSeries}
          </div>
        </div>
        <div className="bixbox rounded-sm mb-4 overflow-hidden">
          <div className="releases relative flex justify-between items-baseline">
            <h2>مضاف حديثا</h2>
          </div>
          <div className="p-2 overflow-hidden">
            {latestAdedSeries}
          </div>
        </div>{" "}
       
      
      </div>
     
    </div>
  </div>
  <div id="footer">
    <footer
      id="colophon"
      className="site-footer mt-8 text-center leading-5 p-0 text-xs text-white absolute w-full bottom-0"
    
      itemType="http://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="footermenu">
        <div className="menu-footer-container">
          <ul id="menu-footer" className="menu p-0 m-0 block overflow-hidden">
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
      <div className="footercopyright overflow-hidden relative">
        <div className="sosmedmrgn mt-8" />{" "}
        <div className="copyright overflow-hidden mb-8">
          <div className="txt">
            <p className='m-0 mt-1 mb-0 leading-4'>
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

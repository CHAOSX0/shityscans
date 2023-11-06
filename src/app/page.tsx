import PTCCard from './components/cards/PTC';
import LCard from './components/cards/LC';
import NC from './components/cards/NC';
import Nav from '@/components/nav';
import Slider from './components/Slider';
import Genres from './components/genres';
import SeriesData from './types/seriesData';
import { Metadata } from 'next/types';
import Footer from './components/footer';
export const metadata: Metadata = {
  
  title: 'سكانلي مانجا Scanly',
  description:'موقع سكانلي مانجا وافضل موقع مانجا و مانها و مانهوا عربي ',
  openGraph: {
    title: 'سكانلي مانجا Scanly',
  },
}
async function getBanners(n: number){
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/baners', {
    next:{
      revalidate: 60*60
    },
    headers:{
      'Range-Unit': 'items',
      'Range': '0-'+n,
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  })
  if (!res.ok) {
    console.log(await res.json());
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
    return;
  }

  return await res.json()
}
async function getLatesAddedSeriesData(n: number){
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=created_at', {
    next:{
      revalidate: 10*60
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
      revalidate: 10*60
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
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=updated_at', {
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
  const tempSliderData = await getBanners(6)
 /* const genres: Array<genre> = [
    {URL: '/genre/action', text: 'أكشن'},{ URL: '/genre/romance', text: 'رومانسي'},{ URL: '/genre/comedy', text: 'كوميديا'},{URL: '/genre/school', text: 'مدرسي'}
  ]*/
  const genres = await getGenres(6)
  return (
    <>
    <div className='relative'>
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text:'المفضلة', URL: '/favorite'}]}/>
     <Slider pages={tempSliderData} />
     <Genres data={genres}/>
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
      <div className="float-right w-8/12" style={{width: '100%', maxWidth: '750px'}}> 
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
          <div className="p-2 overflow-hidden" style={{display: 'flex',flexWrap: 'wrap',rowGap: '20px',justifyContent: 'space-between'}}>
            {latestSeries}
          </div>
        </div>
        <div className="bixbox rounded-sm mb-4 overflow-hidden">
          <div className="releases relative flex justify-between items-baseline">
            <h2>مضاف حديثا</h2>
          </div>
          <div className="p-2 overflow-hidden" style={{display: 'flex',flexWrap: 'wrap',rowGap: '20px',justifyContent: 'space-between'}}>
            {latestAdedSeries}
          </div>
        </div>{" "}
       
      
      </div>
     
    </div>
  </div>
 <Footer />
</div>
</>
  )
}

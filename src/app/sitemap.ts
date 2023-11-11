import { MetadataRoute } from 'next'
import SeriesData from './types/seriesData';
import chapter from './types/chapter';
 
async function getAllSeries(): Promise<any>{
 
    //const {data, error} = await supabase.from('series').select().order('title')
  //console.log(data)
    const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=updated_at', {
      cache:'no-cache',
      headers:{
      
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
 async  function getAllChapters(): Promise<any>{
 
        const url = `https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/chapters?select=number, series, created_at`
        const res = await fetch(url, {
          cache:'no-cache',
          headers:{
            'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
          }
        });
        if (!res.ok) {
         // console.log(await res.json());
          // This will activate the closest `error.js` Error Boundary
          throw 'fuck';
          
        }
        const result = await res.json()
       
        return result
  }

export default async function sitemap(s: any): Promise<MetadataRoute.Sitemap> {
console.log(s)
    const seriesRaw = (await getAllSeries())
    const chaptersRaw = (await getAllChapters())
    const chapters: any = []
    chaptersRaw.forEach((c: any)=>{
    //  chapters.push({url: `https://xn--mgba2gffg.online/series/${c.series}/${c.number}`,  lastModified: new Date(c.created_at), changeFrequency: "yearly", priority: 0.75  })
    //  chapters.push({url: `https://scanly.org/series/${c.series}/${c.number}`,  lastModified: new Date(c.created_at), changeFrequency: "yearly", priority: 0.75  })
      chapters.push({url: `https://xn--mgbao2hg.center/series/${c.series}/${c.number}`,  lastModified: new Date(c.created_at), changeFrequency: "yearly", priority: 0.75  })
    //  chapters.push({url: `https://xn--mgba2gff.online/series/${c.series}/${c.number}`,  lastModified: new Date(c.created_at), changeFrequency: "yearly", priority: 0.75  })
    })
    const series:any = []
    seriesRaw.forEach((s: any)=>{  
   //  series.push({url: `https://xn--mgba2gffg.online/series/${s.id}`,  lastModified: new Date(s.updated_at || s.created_at), changeFrequency: "weekly", priority: 1  })
  //   series.push({url: `https://scanly.org/series/${s.id}`,  lastModified: new Date(s.updated_at || s.created_at), changeFrequency: "weekly", priority: 1  })
     series.push({url: `https://xn--mgbao2hg.center/series/${s.id}`,  lastModified: new Date(s.updated_at || s.created_at), changeFrequency: "weekly", priority: 1  })
   //  series.push({url: `https://xn--mgba2gff.online/series/${s.id}`,  lastModified: new Date(s.updated_at || s.created_at), changeFrequency: "weekly", priority: 1  })

    })
  return [
   {
        url: 'https://xn--mgbao2hg.center/',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
   },
   ...series, ...chapters
  ]
}
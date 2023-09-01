type SeriesData = {
     id: string,
     created_at: string,
     title: string,
     coverURL: string,
     coverWidth: number,
     coverHeight: number,
     rating: number,
     status:string,
     genres: Array<string>,
     latestChaptersMeta:{
        list:Array<{
            number: number,
            created_at:string,
            URL: string,
          }>},
     details: string,
     URL: string
    }


export default SeriesData
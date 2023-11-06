import genre from "./genre"

type SeriesData = {
     id: string,
     created_at: string,
     title: string,
     coverURL: string,
     coverWidth: number | undefined,
     coverHeight: number | undefined,
     rating: number | undefined,
     status:string | undefined,
     type: "Manhua" | "Manga" | "manha",
     genres: Array<genre>,
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
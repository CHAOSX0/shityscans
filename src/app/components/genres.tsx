import genre from "../types/genre"
export default function Genres({data} : {data : Array<{URL: string, text: string}>}){
    const genresElements = data.map((e: {URL: string, text: string}, i: number) => <Genre key={i} {...e} />)
    return (
    <div className="home-genres">
     <span className="genre-listx">
      {genresElements}
     </span>
     <span className="alman">
      <a href="/seriesList">جميــع الأعمال</a>
     </span>
  </div>
    )
}

function Genre({URL, text}: {URL: string, text: string}){
    return(
      <a
        href={URL}
        title={`View all series in ${text}`}
      >
      {text}
      </a>
    )
}
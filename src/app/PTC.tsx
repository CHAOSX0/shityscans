import SeriesData from "./types/seriesData";

export default function PTCCard({title, coverURL, created_at, coverHeight, coverWidth, rating, latestChaptersMeta} : SeriesData){
    const link: string = 'https://aresmanga.org/series/evolution-begins-with-a-big-tree/';
    const cover: string = coverURL
    const chapterNumber = latestChaptersMeta.list[latestChaptersMeta.list.length -1 ].number
    const chapterTitle: string = `الفصل ${chapterNumber}`;
    console.log(latestChaptersMeta)

return(
    <div className="bs">
    <div className="bsx">
      <a
        href={link}
        title={title}
      >
        <div className="limit">
          <div className="ply" />
          <span className="type Manhua" />
          <span className="hotx">
            <i className="fab fa-hotjar" />
          </span>{" "}
          <img
            src={cover}
            className="ts-post-image wp-post-image attachment-medium size-medium"
            loading="lazy"
            title={title}
            alt={title}
            width={coverWidth}
            height={coverHeight}
          />{" "}
        </div>
        <div className="bigor">
          <div className="tt" style={{textAlign:'left'}}>{title}</div>
          <div className="adds">
            <div className="epxs">{chapterTitle}</div>
            
          </div>
        </div>
      </a>
    </div>
  </div>
)
}
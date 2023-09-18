import SeriesData from "../../types/seriesData";
import Link from 'next/link'
import Image from 'next/image'
export default function PTCCard({title, coverURL, created_at, coverHeight, coverWidth, rating, latestChaptersMeta, URL} : SeriesData){
    const link: string = URL;
    const cover: string = coverURL
    const chapterNumber = latestChaptersMeta.list[latestChaptersMeta.list.length -1 ].number
    const chapterTitle: string = `الفصل ${chapterNumber}`;
    

return(
    <div className="bs" style={{minWidth: '100px', display: 'block !important', maxWidth:'150px'}}>
    <div className="bsx">
      <Link
        href={link}
        title={title}
      >
        <div className="limit">
          <div className="ply" />
          <span className="type Manhua" />
          <span className="hotx">
            <i className="fab fa-hotjar" />
          </span>{" "}
          <Image
            src={cover}
            className="ts-post-image wp-post-image attachment-medium size-medium"
            loading="lazy"
            title={title}
            alt={title}
            fill
          
          />{" "}
        </div>
        <div className="bigor">
          <div className="tt" style={{textAlign:'left'}}>{title}</div>
          <div className="adds">
            <div className="epxs">{chapterTitle}</div>
            
          </div>
        </div>
      </Link>
    </div>
  </div>
)
}
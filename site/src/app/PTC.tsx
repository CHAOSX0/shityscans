export default function PTCCard(){
    const link: string = 'https://aresmanga.org/series/evolution-begins-with-a-big-tree/';
    const title: string = 'Evolution Begins With a Big Tree';
    const cover: string = 'https://i3.wp.com/aresmanga.org/wp-content/uploads/2023/02/Evolution-Begins-With-a-Big-Tree.jpg'
    const chapterTitle: string = 'الفصل 99';
    const rating: number = 0.9
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
            width={500}
            height={666}
          />{" "}
        </div>
        <div className="bigor">
          <div className="tt">{title}</div>
          <div className="adds">
            <div className="epxs">{chapterTitle}</div>
            <div className="rt">
              <div className="rating">
                <div className="rating-prc">
                  <div className="rtp">
                    <div className="rtb">
                      <span style={{ width: "90%" }} />
                    </div>
                  </div>
                </div>
                <div className="numscore">{rating}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
)
}
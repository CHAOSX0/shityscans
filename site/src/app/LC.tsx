export default function LCard(){
    const URL: string = "https://aresmanga.org/series/84519-rise-of-the-god-slaying-master/";
    const title: string ="Rise of the God Slaying Master";
    const type: string = 'Manhua';
    const cover: string = "https://aresmanga.org/wp-content/uploads/2023/04/Rise-of-the-God-Slaying-Master.webp";
    const width: number = 500;
    const height: number = 662;
    return(
        <div className="bs styletere stylefiv">
              <div className="bsx">
                <a
                  href={URL}
                  title={title}
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className={`type ${type}`} />
                    <img
                      src={cover}
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title={title}
                      alt={title}
                      width={width}
                      height={height}
                    />
                  </div>
                </a>
                <div className="bigor">
                  <div className="tt">
                    <a
                      href={URL}
                      title={title}
                    >
                      {title}
                    </a>
                  </div>
                  <ul className="chfiv">
                
                    <li>
                      <a href="https://aresmanga.org/rise-of-the-god-slaying-master-chapter-59/">
                        الفصل 59
                      </a>
                      <span className="status-new" />
                      <i>جديد</i>
                    </li>
                    {/*1692429575*/}
                    {/*1692871117*/}
                    <li>
                      <a href="https://aresmanga.org/rise-of-the-god-slaying-master-chapter-58/">
                        الفصل 58
                      </a>
                      <span>منذ 6 أيام</span>
                    </li>
                    {/*1692124501*/}
                    {/*1692871117*/}
                    <li>
                      <a href="https://aresmanga.org/rise-of-the-god-slaying-master-chapter-57/">
                        الفصل 57
                      </a>
                      <span>منذ أسبوع واحد</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
}

function chapter({}){
    const URL: string = "https://aresmanga.org/rise-of-the-god-slaying-master-chapter-57/";
    const number: number = 57;
    const title: string = `الفصل ${number}`
    const ago: string = 'منذ اسبوع واحد'
return (
    <li>
    <a href={URL}>
      {title}
    </a>
    <span>{ago}</span>
  </li>
)
}
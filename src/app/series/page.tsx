import Nav from "@/components/nav"

export default async function Series(){
    const coverURL = ''
    const chapters = [{number: 1, date: new Date(2023, 6, 10).toDateString(), URL: '/chapter/hi'}, {number: 2, date: new Date(2023, 7, 10).toDateString(), URL: '/chapter/hi1',}]
    const chapterELements = chapters.map((e, i: number) => <Chapter {...e} key={i} />)
    const genresDummyData = [{URL: '/genre/action', text: 'أكشن'}, {URL: '/genre/romance', text: 'روومانسي'}, {URL: '/genre/comedy', text: 'كوميديا'}, {URL: '/genre/system', text: 'نظام'}]
    const genres = genresDummyData.map((e, i)=><Genre {...e} key={i} />)
    return (
     
    <div className="mainholder rtl" dir='rtl'>
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
     <div id="content" className="manga-info mangastyle">
  <div className="wrapper">
    <div className="bigcover">
      <div
        className="bigbanner"
        style={{
          backgroundImage:
            'url("https://i3.wp.com/aresnov.org/wp-content/uploads/2022/12/banner-villain-is-here-1.jpg")'
        }}
      />
    </div>
    <div className="postbody full">
      <article
        id="post-112"
        className="post-112 hentry"
        itemType="http://schema.org/CreativeWorkSeries"
      >
        <div className="main-info">
          <div className="info-left">
           <CoverInfo status="OnGoing" type="Manhua" coverURL="https://aresnov.org/wp-content/uploads/2022/12/Villain-is-Here.webp" title="testing" created_at={new Date(2023, 5, 20).toDateString()}/>
          </div>
          <div className="info-right">
            <div className="info-desc bixbox">
              <div id="titledesktop">
                <div id="titlemove">
                  <h1 className="entry-title" itemProp="name">
                    Villain is Here
                  </h1>
                  <span className="alternative">I am the Fated Villain</span>
                </div>
              </div>
              <div className="wd-full">
                <span className="mgen">
                 {genres}
                </span>
              </div>
              <div className="wd-full">
                <h2>قصة مانجا: Villain is Here</h2>
                <div
                  className="entry-content entry-content-single"
                  itemProp="description"
                >
                  <p>
                    فورًا بعد أن استوعب غو تشان غي بأنه قد انتقل إلى عالم خيالي
                    آخر… هناك حيث أقسم بطل القصة الرئيسي، ومُختار إلهة الحظ بأنه
                    سينتقم منه. بينما يغار منه الجميع، هو لم يكن يملك “البطلة”
                    إلى جانبه فحسب ولكنه كان يُعامل بصفته ضيفًا موقرًا أينما حلّ
                    وارتحل. من حسن حظه أن قوته كانت تفوق أي أحد آخر، ولكن ألا
                    يعني هذا أن بإمكانه أن يتعامل مع البطل الرئيسي للقصة بسهولة
                    تامة؟
                    <br />
                    تابعونا لمعرفة ما تخفيه قصة الشرير غو من خبايا فقط على
                    موقعكم المفضل Aresmanga
                  </p>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: "\n.series-history-pool{\n    margin:15px;\n}\n"
              }}
            />
            {/* series history*/}
            <div
              className="bixbox bxcl"
              id="series-history"
              style={{ display: "none" }}
            >
              <div className="releases">
                <h2>سجل القراءة</h2>
              </div>
              <div className="series-history-pool">
                <ul className="clstyle" id="series-history-ul" />
              </div>
            </div>

            {/* /series history*/}
            <div className="bixbox bxcl epcheck">
              <div className="releases">
                <h2>فصول Villain is Here</h2>
              </div>
              <div className="lastend">
                <div className="inepcx">
                  <a href="https://aresnov.org/villain-is-here-chapter-1/">
                    <span>الفصل الأول</span>
                    <span className="epcur epcurfirst">الفصل 1</span>
                  </a>
                </div>
                <div className="inepcx">
                  <a href="https://aresnov.org/villain-is-here-chapter-95/">
                    <span>فصل جديد</span>
                    <span className="epcur epcurlast">الفصل 95</span>
                  </a>
                </div>
              </div>
              <div className="search-chapter">
                <input
                  id="searchchapter"
                  type="text"
                  placeholder="البحث عن الفصل. مثال: 25 or 178"
                  autoComplete="off"
                />
              </div>
              <div className="eplister" id="chapterlist">
              <ul>
                {chapterELements}
              </ul>
              </div>
            </div>
            <div className="ts-breadcrumb bixbox">
              <ol itemScope itemType="http://schema.org/BreadcrumbList">
                <li
                  itemProp="itemListElement"
                  itemType="http://schema.org/ListItem"
                >
                  <a itemProp="item" href="https://aresnov.org/">
                    <span itemProp="name">
                      مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية
                    </span>
                  </a>
                  <meta itemProp="position" />
                </li>
                ›
                <li
                  itemProp="itemListElement"
                  itemType="http://schema.org/ListItem"
                >
                  <a
                    itemProp="item"
                    href="https://aresnov.org/series/villain-is-here/"
                  >
                    <span itemProp="name">Villain is Here</span>
                  </a>
                  <meta itemProp="position"/>
                </li>
              </ol>
            </div>
            <div className="ts-breadcrumb bixbox">
              مانجا <strong>Villain is Here</strong>, مانجا{" "}
              <strong>Villain is Here</strong> مترجمة, read{" "}
              <strong>Villain is Here</strong>, <strong>Villain is Here</strong>{" "}
              english, <strong>Villain is Here</strong> eng, download{" "}
              <strong>Villain is Here</strong> eng, read{" "}
              <strong>Villain is Here</strong> online, قراءة{" "}
              <strong>Villain is Here</strong>, <strong>Villain is Here</strong>{" "}
              مترجم, <strong>Villain is Here</strong> بالعربية ,تنزيل{" "}
              <strong>Villain is Here</strong> مترجم ,قراءة{" "}
              <strong>Villain is Here</strong> مجانا,{" "}
              <strong>Villain is Here</strong> مانجا لايك,{" "}
              <strong>Villain is Here</strong> motarjam
            </div>
          </div>
        </div>
        {/*
        <div className="bixbox">
          <div className="releases">
            <h2>
              <span>أعمال ذات صلة</span>
            </h2>
          </div>
          <div className="listupd">
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/the-blade-of-evolution/"
                  title="The Blade of Evolution"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="status Completed">Completed</span>{" "}
                    <span className="type Manhua" />
                    <img
                      src="https://aresnov.org/wp-content/uploads/2022/12/The-Blade-of-Evolution.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="The Blade of Evolution"
                      alt="The Blade of Evolution"
                      width={500}
                      height={666}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">The Blade of Evolution </div>
                    <div className="adds">
                      <div className="epxs">الفصل 75</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "80%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">8.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/47455-omnipotent-warrior/"
                  title="Omnipotent Warrior"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="type Manhua" />
                    <span className="hotx">
                      <i className="fab fa-hotjar" />
                    </span>{" "}
                    <img
                      src="https://aresnov.org/wp-content/uploads/2023/06/Omnipotent-Warrior-1.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="Omnipotent Warrior"
                      alt="Omnipotent Warrior"
                      width={550}
                      height={791}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">Omnipotent Warrior </div>
                    <div className="adds">
                      <div className="epxs">الفصل 12</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "74%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">7.4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/beholder-of-the-abyss/"
                  title="Beholder of The Abyss"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="status Completed">Completed</span>{" "}
                    <span className="type Manhua" />
                    <span className="hotx">
                      <i className="fab fa-hotjar" />
                    </span>{" "}
                    <img
                      src="https://aresnov.org/wp-content/uploads/2023/02/Beholder-of-The-Abyss.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="Beholder of The Abyss"
                      alt="Beholder of The Abyss"
                      width={500}
                      height={666}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">Beholder of The Abyss </div>
                    <div className="adds">
                      <div className="epxs">الفصل 44</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "100%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">10</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/i-who-saw-the-blood-bar-punish-the-gods/"
                  title="I Who Saw The Blood Bar, Punish The Gods!"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="type Manhua" />
                    <span className="hotx">
                      <i className="fab fa-hotjar" />
                    </span>{" "}
                    <img
                      src="https://aresnov.org/wp-content/uploads/2023/08/I-Who-Saw-The-Blood-Bar-Punish-The-Gods-1.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="I Who Saw The Blood Bar, Punish The Gods!"
                      alt="I Who Saw The Blood Bar, Punish The Gods!"
                      width={500}
                      height={650}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">
                      I Who Saw The Blood Bar, Punish The Gods!{" "}
                    </div>
                    <div className="adds">
                      <div className="epxs">الفصل 60</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "80%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/heavens-devourer/"
                  title="Heaven’s Devourer"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="status Completed">Completed</span>{" "}
                    <span className="type Manhua" />
                    <span className="hotx">
                      <i className="fab fa-hotjar" />
                    </span>{" "}
                    <img
                      src="https://aresnov.org/wp-content/uploads/2023/02/thumb.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="Heaven’s Devourer"
                      alt="Heaven’s Devourer"
                      width={810}
                      height={1074}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">Heaven’s Devourer </div>
                    <div className="adds">
                      <div className="epxs">الفصل 16</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "86%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">8.6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/disaster-class-necromancer/"
                  title="Disaster Class Necromancer"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="type Manhua" />
                    <span className="hotx">
                      <i className="fab fa-hotjar" />
                    </span>{" "}
                    <img
                      src="https://aresnov.org/wp-content/uploads/2023/06/Disaster-Class-Necromancer.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="Disaster Class Necromancer"
                      alt="Disaster Class Necromancer"
                      width={550}
                      height={729}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">Disaster Class Necromancer </div>
                    <div className="adds">
                      <div className="epxs">الفصل 10</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "90%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">9.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bs">
              <div className="bsx">
                <a
                  href="https://aresnov.org/series/94903-plundering-the-heavens/"
                  title="Plundering The Heavens"
                >
                  <div className="limit">
                    <div className="ply" />
                    <span className="type Manhua" />
                    <img
                      src="https://aresnov.org/wp-content/uploads/2022/12/Plundering-The-Heavens.webp"
                      className="ts-post-image wp-post-image attachment-medium size-medium"
                      loading="lazy"
                      title="Plundering The Heavens"
                      alt="Plundering The Heavens"
                      width={500}
                      height={666}
                    />{" "}
                  </div>
                  <div className="bigor">
                    <div className="tt">Plundering The Heavens </div>
                    <div className="adds">
                      <div className="epxs">الفصل 86</div>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{ width: "83%" }} />
                              </div>
                            </div>
                          </div>
                          <div className="numscore">8.3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
       
        <div id="comments" className="bixbox comments-area">
          <div className="releases">
            <h2>
              <span>تعليق</span>
            </h2>
          </div>
          <div className="cmt commentx">
            <div id="disqus_thread">
              <iframe
                id="dsq-app2238"
                name="dsq-app2238"
                allowTransparency="true"
                frameBorder={0}
                scrolling="no"
                tabIndex={0}
                title="Disqus"
                width="100%"
                src="https://disqus.com/embed/comments/?base=default&f=aresmanga-net&t_i=112%20https%3A%2F%2Faresmanga.net%2F%3Fpost_type%3Dmanga%26p%3D112&t_u=https%3A%2F%2Faresnov.org%2Fseries%2Fvillain-is-here%2F&t_e=Villain%20is%20Here&t_d=%D9%85%D8%A7%D9%86%D8%AC%D8%A7%20Villain%20is%20Here%20-%20%D9%85%D8%A7%D9%86%D8%AC%D8%A7%20ARESManga%20%7C%20%D8%A3%D9%81%D8%B6%D9%84%20%D9%85%D9%88%D9%82%D8%B9%20%D9%84%D9%84%D9%85%D8%A7%D9%86%D9%87%D9%88%D8%A7%20%D9%88%D8%A7%D9%84%D9%85%D8%A7%D9%86%D8%AC%D8%A7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9&t_t=Villain%20is%20Here&s_o=default#version=d3a7e0f9d834ec1287136e3d51e7ef82"
                style={{
                  width: "1px !important",
                  minWidth: "100% !important",
                  border: "none !important",
                  overflow: "hidden !important",
                  height: "614px !important"
                }}
                horizontalscrolling="no"
                verticalscrolling="no"
              />
            </div>
          </div>
        </div>
         */}
        <span
          style={{ display: "none" }}
          itemProp="publisher"
          itemType="https://schema.org/Organization"
        >
          <span
            style={{ display: "none" }}
            itemProp="logo"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta
              itemProp="url"
              content="http://aresmanga.org/wp-content/uploads/2022/12/ares-logo-blank.png"
            />
          </span>
          <meta
            itemProp="name"
            content="مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية"
          />
        </span>
      </article>
    </div>
  </div>
</div>

    </div>
    )
}

function Genre({URL, text}: {URL: string, text: string}){
    return (
     <>
      <a href={URL} rel="tag">
       {text}
      </a>
      {" "}
     </>
    )

}
function CoverInfo({coverURL, title, type, created_at, status}: {coverURL: string, title: string, created_at: string, type: string, status: string}){
    const creationDateString: string = toDate(created_at)
return(
    <div className="info-left-margin">
    <div
      className="thumb"
      itemProp="image"
      itemType="https://schema.org/ImageObject"
    >
      <img
        src={coverURL}
        className="attachment- size- wp-post-image"
        alt={title}
        decoding="async"
        title={title}
        itemProp="image"
      />{" "}
    </div>
    <div id="mobiletitle" />
    <div data-id={112} className="bookmark">
      <i className="far fa-bookmark" aria-hidden="true" /> Bookmark
    </div>
  
    <div className="rating bixbox">
      <div
        className="rating-prc"
        itemProp="aggregateRating"
        itemType="//schema.org/AggregateRating"
      >
        <meta itemProp="worstRating"/>
        <meta itemProp="bestRating"  />
        <meta itemProp="ratingCount"  />
        <div className="rtp">
          <div className="rtb">
            <span style={{ width: "90%" }} />
          </div>
        </div>
        <div className="num" itemProp="ratingValue" >
          9.0
        </div>
      </div>
    </div>
    <div className="tsinfo bixbox">
      <div className="imptdt">
        الحالة <i>{status}</i>
      </div>
      <div className="imptdt">
        النوع <a>{type}</a>
      </div>
      
      <div className="imptdt">
        منشور في{" "}
        <i>
          <time
            itemProp="datePublished"
            dateTime={created_at}
          >
            ديسمبر 24, 2022
          </time>
        </i>
      </div>
      <div className="imptdt">
        جديد إصداراتنا{" "}
        <i>
          <time
            itemProp="dateModified"
            dateTime="2023-07-31T02:52:33+02:00"
          >
            يوليو 31, 2023
          </time>
        </i>
      </div>
    </div>
  </div>
)
}
function toDate(date: string){
    const options: {weekday: any, year: any, month: any, day: any} = { weekday: "long", year: 'numeric', month: 'long', day: 'numeric'};
    const res = convertNumeral(new Date(date).toLocaleDateString('ar-EG', options))
    function convertNumeral(text: string) : string{
        let txt = text
     txt = txt.replaceAll('١', '1')
     txt = txt.replaceAll('٢', '2')
     txt = txt.replaceAll('٣', '3')
     txt = txt.replaceAll('٤', '4')
     txt = txt.replaceAll('٥', '5')
     txt = txt.replaceAll('٦', '6')
     txt = txt.replaceAll('٧', '7')
     txt = txt.replaceAll('٨', '8')
     txt = txt.replaceAll('٩', '9')
     txt = txt.replaceAll('٠', '0')
     
      return txt
    }
    return res 
}
function Chapter({number, date, URL}: {number: number, date: string, URL: string}){
    const chapterTitle: string = `الفصل ${number}`
   
   
    
    const chapterEnglishDate:string = toDate(date)
    
    
     return (
        <li data-num={number}>
                    <div className="chbox">
                      <div className="eph-num">
                        <a href={URL}>
                          <span className="chapternum">{chapterTitle}</span>
                          <span className="chapterdate">{chapterEnglishDate}</span>
                        </a>
                      </div>
                    </div>
                  </li>
    )
}
import Nav from "@/components/nav"

export default function Chapter ({ params }: { params: { slug: string } }) {
    const images = [
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/01.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/02.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/03.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/04.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/05.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/06.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/07.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/08.jpg'},
     {URL: 'https://aresnov.org/wp-content/uploads/data/142903/09.jpg'}]
    const pagesELements = images.map((e: {URL: string}, i: number)=> <Page {...e} key={i}/>)
    return (
        <div className="mainholder rtl">
     <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
  <div id="content" className="readercontent">
    <div className="wrapper">
      <div className="chapterbody">
        <div className="postarea">
          <article
            id="post-142903"
            className="post-142903 hentry"
            itemScope
            itemType="http://schema.org/CreativeWork"
          >
            <div className="headpost">
              <h1 className="entry-title" itemProp="name">
                Villain is Here – Chapter 95
              </h1>
              <div className="allc">
                All chapters are in{" "}
                <a href="https://aresnov.org/series/villain-is-here/">
                  Villain is Here
                </a>
              </div>
            </div>
            <div className="ts-breadcrumb bixbox">
              <ol itemScope itemType="http://schema.org/BreadcrumbList">
                <li
                  itemProp="itemListElement"
                  itemScope
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
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <a
                    itemProp="item"
                    href="https://aresnov.org/series/villain-is-here/"
                  >
                    <span itemProp="name">Villain is Here</span>
                  </a>
                  <meta itemProp="position" />
                </li>
                ›
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <a
                    itemProp="item"
                    href="https://aresnov.org/villain-is-here-chapter-95/"
                  >
                    <span itemProp="name">Villain is Here – Chapter 95</span>
                  </a>
                  <meta itemProp="position" />
                </li>
              </ol>
            </div>
            <div className="ts-breadcrumb bixbox">
              مانجا <strong>Villain is Here – Chapter 95</strong>, مانجا{" "}
              <strong>Villain is Here – Chapter 95</strong> مترجمة, read{" "}
              <strong>Villain is Here – Chapter 95</strong>,{" "}
              <strong>Villain is Here – Chapter 95</strong> english,{" "}
              <strong>Villain is Here – Chapter 95</strong> eng, download{" "}
              <strong>Villain is Here – Chapter 95</strong> eng, read{" "}
              <strong>Villain is Here – Chapter 95</strong> online, قراءة{" "}
              <strong>Villain is Here – Chapter 95</strong>,{" "}
              <strong>Villain is Here – Chapter 95</strong> مترجم,{" "}
              <strong>Villain is Here – Chapter 95</strong> بالعربية ,تنزيل{" "}
              <strong>Villain is Here – Chapter 95</strong> مترجم ,قراءة{" "}
              <strong>Villain is Here – Chapter 95</strong> مجانا,{" "}
              <strong>Villain is Here – Chapter 95</strong> مانجا لايك,{" "}
              <strong>Villain is Here – Chapter 95</strong> motarjam
            </div>
            <div
              className="entry-content entry-content-single maincontent"
              itemProp="description"
            >
              <div className="chdesc">
                <p>
                  مانجا <b> Villain is Here – Chapter 95 </b> ,
                  <b> مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية </b>
                  . مانجا <b> Villain is Here </b> مترجمة على{" "}
                  <b> مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية </b>
                  .{" "}
                </p>
              </div>
              <div className="chnav ctop nomirror">
                <span className="selector slc l">
                  {" "}
                  <div className="nvx">

                  </div>
                </span>
                <span className="navrig">
                  <span className="selector readingmode l">
                    <select name="readingmode" id="readingmode">
                      <option value="full" selected>
                        صفحة كاملة
                      </option>
                      <option value="single">صفحة واحدة</option>
                    </select>
                  </span>
                </span>
                <span className="navlef">
                  <span className="npv r">
                    {" "}
                    <div className="nextprev">
                      <a
                        className="ch-prev-btn"
                        href="https://aresnov.org/villain-is-here-chapter-94/"
                        rel="prev"
                      >
                        <i className="fas fa-angle-left" /> السابق{" "}
                      </a>
                      <a
                        className="ch-next-btn disabled"
                        href="#/next/"
                        rel="next"
                      >
                        التالي <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </span>
                  <span className="amob nodlx">
                    <span className="selector pagedsel r">
                      <select
                        name="select-paged"
                        className="ts-select-paged"
                        id="select-paged"
                      >
                        <option value={0}>1/9</option>
                        <option value={1}>2/9</option>
                        <option value={2}>3/9</option>
                        <option value={3}>4/9</option>
                        <option value={4}>5/9</option>
                        <option value={5}>6/9</option>
                        <option value={6}>7/9</option>
                        <option value={7}>8/9</option>
                        <option value={8}>9/9</option>
                      </select>
                    </span>
                  </span>
                </span>
              </div>
              <div id="readerarea">
               {pagesELements}
              </div>
              <div
                id="readerarea-loading"
                style={{ textAlign: "center", display: "none" }}
              >
                <img src="https://aresnov.org/wp-content/themes/mangareader/assets/img/readerarea.svg" />
              </div>
              <div className="kln">
                {/*

<div id="so-gr">
    <a href="https://aresnov.org/blog/recruitment/" class="item-so">
  <img src="https://aresnov.org/wp-content/uploads/Cover/indimam_v3.webp" alt="main"></a>

    <a href="https://discord.gg/HPyruh7U2k" class="item-so"><img src="https://aresnov.org/wp-content/uploads/Cover/underCoverDiscord.webp" alt="discord" style="width:800px"> </a>

    <a href="https://www.instagram.com/aresmanga/" class="item-so"><img src="https://aresnov.org/wp-content/uploads/Cover/underCoverInstegram.webp" alt="instagram" style="width:800px"> </a>

    <a href="http://facebook.com/aresmangaofficial" class="item-so"><img src="https://aresnov.org/wp-content/uploads/Cover/underCoverFacebook.webp" alt="facebook" style="width:800px"> </a>



*/}
              </div>
              <div className="chnav cbot">
                <span className="selector slc l">
                  {" "}
                  <div className="nvx">
                    <select
                      name="chapter"
                      id="chapter"
                    >
                      <option value="">
                        إختيار الفصل
                      </option>
                      <option
                        data-id={142903}
                        value="https://aresnov.org/villain-is-here-chapter-95/"
                        selected
                      >
                        Chapter 95
                      </option>
                      <option
                        data-id={138342}
                        value="https://aresnov.org/villain-is-here-chapter-94/"
                      >
                        Chapter 94
                      </option>
                      <option
                        data-id={137602}
                        value="https://aresnov.org/villain-is-here-chapter-93-5/"
                      >
                        Chapter 93.5
                      </option>
                      <option
                        data-id={135341}
                        value="https://aresnov.org/villain-is-here-chapter-93-4/"
                      >
                        Chapter 93.4
                      </option>
                      <option
                        data-id={135336}
                        value="https://aresnov.org/villain-is-here-chapter-93-3/"
                      >
                        Chapter 93.3
                      </option>
                      <option
                        data-id={135331}
                        value="https://aresnov.org/villain-is-here-chapter-93-2/"
                      >
                        Chapter 93.2
                      </option>
                      <option
                        data-id={135326}
                        value="https://aresnov.org/villain-is-here-chapter-93-1/"
                      >
                        Chapter 93.1
                      </option>
                      <option
                        data-id={135088}
                        value="https://aresnov.org/villain-is-here-chapter-93/"
                      >
                        Chapter 93
                      </option>
                      <option
                        data-id={126282}
                        value="https://aresnov.org/villain-is-here-chapter-92/"
                      >
                        Chapter 92
                      </option>
                      <option
                        data-id={123664}
                        value="https://aresnov.org/villain-is-here-chapter-91/"
                      >
                        Chapter 91
                      </option>
                      <option
                        data-id={119454}
                        value="https://aresnov.org/villain-is-here-chapter-90/"
                      >
                        Chapter 90
                      </option>
                      <option
                        data-id={112877}
                        value="https://aresnov.org/villain-is-here-chapter-89/"
                      >
                        Chapter 89
                      </option>
                      <option
                        data-id={108721}
                        value="https://aresnov.org/villain-is-here-chapter-88/"
                      >
                        Chapter 88
                      </option>
                      <option
                        data-id={112725}
                        value="https://aresnov.org/villain-is-here-chapter-87/"
                      >
                        Chapter 87
                      </option>
                      <option
                        data-id={112714}
                        value="https://aresnov.org/villain-is-here-chapter-86/"
                      >
                        Chapter 86
                      </option>
                      <option
                        data-id={112702}
                        value="https://aresnov.org/villain-is-here-chapter-85/"
                      >
                        Chapter 85
                      </option>
                      <option
                        data-id={112691}
                        value="https://aresnov.org/villain-is-here-chapter-84/"
                      >
                        Chapter 84
                      </option>
                      <option
                        data-id={112681}
                        value="https://aresnov.org/villain-is-here-chapter-83/"
                      >
                        Chapter 83
                      </option>
                      <option
                        data-id={112669}
                        value="https://aresnov.org/villain-is-here-chapter-82/"
                      >
                        Chapter 82
                      </option>
                      <option
                        data-id={112656}
                        value="https://aresnov.org/villain-is-here-chapter-81/"
                      >
                        Chapter 81
                      </option>
                      <option
                        data-id={112645}
                        value="https://aresnov.org/villain-is-here-chapter-80/"
                      >
                        Chapter 80
                      </option>
                      <option
                        data-id={1122}
                        value="https://aresnov.org/villain-is-here-chapter-61/"
                      >
                        Chapter 61
                      </option>
                      <option
                        data-id={1120}
                        value="https://aresnov.org/villain-is-here-chapter-60/"
                      >
                        Chapter 60
                      </option>
                      <option
                        data-id={1118}
                        value="https://aresnov.org/villain-is-here-chapter-59/"
                      >
                        Chapter 59
                      </option>
                      <option
                        data-id={1116}
                        value="https://aresnov.org/villain-is-here-chapter-58/"
                      >
                        Chapter 58
                      </option>
                      <option
                        data-id={1114}
                        value="https://aresnov.org/villain-is-here-chapter-57/"
                      >
                        Chapter 57
                      </option>
                      <option
                        data-id={1112}
                        value="https://aresnov.org/villain-is-here-chapter-56/"
                      >
                        Chapter 56
                      </option>
                      <option
                        data-id={1110}
                        value="https://aresnov.org/villain-is-here-chapter-55/"
                      >
                        Chapter 55
                      </option>
                      <option
                        data-id={1108}
                        value="https://aresnov.org/villain-is-here-chapter-54/"
                      >
                        Chapter 54
                      </option>
                      <option
                        data-id={1106}
                        value="https://aresnov.org/villain-is-here-chapter-53/"
                      >
                        Chapter 53
                      </option>
                      <option
                        data-id={1104}
                        value="https://aresnov.org/villain-is-here-chapter-52/"
                      >
                        Chapter 52
                      </option>
                      <option
                        data-id={1101}
                        value="https://aresnov.org/villain-is-here-chapter-51/"
                      >
                        Chapter 51
                      </option>
                      <option
                        data-id={1099}
                        value="https://aresnov.org/villain-is-here-chapter-50/"
                      >
                        Chapter 50
                      </option>
                      <option
                        data-id={1097}
                        value="https://aresnov.org/villain-is-here-chapter-49/"
                      >
                        Chapter 49
                      </option>
                      <option
                        data-id={1095}
                        value="https://aresnov.org/villain-is-here-chapter-48/"
                      >
                        Chapter 48
                      </option>
                      <option
                        data-id={1093}
                        value="https://aresnov.org/villain-is-here-chapter-47/"
                      >
                        Chapter 47
                      </option>
                      <option
                        data-id={1091}
                        value="https://aresnov.org/villain-is-here-chapter-46/"
                      >
                        Chapter 46
                      </option>
                      <option
                        data-id={1089}
                        value="https://aresnov.org/villain-is-here-chapter-45/"
                      >
                        Chapter 45
                      </option>
                      <option
                        data-id={1086}
                        value="https://aresnov.org/villain-is-here-chapter-44/"
                      >
                        Chapter 44
                      </option>
                      <option
                        data-id={1083}
                        value="https://aresnov.org/villain-is-here-chapter-43/"
                      >
                        Chapter 43
                      </option>
                      <option
                        data-id={1081}
                        value="https://aresnov.org/villain-is-here-chapter-42/"
                      >
                        Chapter 42
                      </option>
                      <option
                        data-id={1079}
                        value="https://aresnov.org/villain-is-here-chapter-41/"
                      >
                        Chapter 41
                      </option>
                      <option
                        data-id={1077}
                        value="https://aresnov.org/villain-is-here-chapter-40/"
                      >
                        Chapter 40
                      </option>
                      <option
                        data-id={1075}
                        value="https://aresnov.org/villain-is-here-chapter-39/"
                      >
                        Chapter 39
                      </option>
                      <option
                        data-id={1073}
                        value="https://aresnov.org/villain-is-here-chapter-38/"
                      >
                        Chapter 38
                      </option>
                      <option
                        data-id={1071}
                        value="https://aresnov.org/villain-is-here-chapter-37/"
                      >
                        Chapter 37
                      </option>
                      <option
                        data-id={1069}
                        value="https://aresnov.org/villain-is-here-chapter-36/"
                      >
                        Chapter 36
                      </option>
                      <option
                        data-id={1067}
                        value="https://aresnov.org/villain-is-here-chapter-35/"
                      >
                        Chapter 35
                      </option>
                      <option
                        data-id={1065}
                        value="https://aresnov.org/villain-is-here-chapter-34/"
                      >
                        Chapter 34
                      </option>
                      <option
                        data-id={1063}
                        value="https://aresnov.org/villain-is-here-chapter-33/"
                      >
                        Chapter 33
                      </option>
                      <option
                        data-id={1061}
                        value="https://aresnov.org/villain-is-here-chapter-32/"
                      >
                        Chapter 32
                      </option>
                      <option
                        data-id={1059}
                        value="https://aresnov.org/villain-is-here-chapter-31/"
                      >
                        Chapter 31
                      </option>
                      <option
                        data-id={1057}
                        value="https://aresnov.org/villain-is-here-chapter-30/"
                      >
                        Chapter 30
                      </option>
                      <option
                        data-id={1055}
                        value="https://aresnov.org/villain-is-here-chapter-29/"
                      >
                        Chapter 29
                      </option>
                      <option
                        data-id={1053}
                        value="https://aresnov.org/villain-is-here-chapter-28/"
                      >
                        Chapter 28
                      </option>
                      <option
                        data-id={1051}
                        value="https://aresnov.org/villain-is-here-chapter-27/"
                      >
                        Chapter 27
                      </option>
                      <option
                        data-id={1049}
                        value="https://aresnov.org/villain-is-here-chapter-26/"
                      >
                        Chapter 26
                      </option>
                      <option
                        data-id={1047}
                        value="https://aresnov.org/villain-is-here-chapter-25/"
                      >
                        Chapter 25
                      </option>
                      <option
                        data-id={1045}
                        value="https://aresnov.org/villain-is-here-chapter-24/"
                      >
                        Chapter 24
                      </option>
                      <option
                        data-id={1043}
                        value="https://aresnov.org/villain-is-here-chapter-23/"
                      >
                        Chapter 23
                      </option>
                      <option
                        data-id={1041}
                        value="https://aresnov.org/villain-is-here-chapter-22/"
                      >
                        Chapter 22
                      </option>
                      <option
                        data-id={1039}
                        value="https://aresnov.org/villain-is-here-chapter-21/"
                      >
                        Chapter 21
                      </option>
                      <option
                        data-id={1037}
                        value="https://aresnov.org/villain-is-here-chapter-20/"
                      >
                        Chapter 20
                      </option>
                      <option
                        data-id={1035}
                        value="https://aresnov.org/villain-is-here-chapter-19/"
                      >
                        Chapter 19
                      </option>
                      <option
                        data-id={1033}
                        value="https://aresnov.org/villain-is-here-chapter-18/"
                      >
                        Chapter 18
                      </option>
                      <option
                        data-id={1031}
                        value="https://aresnov.org/villain-is-here-chapter-17/"
                      >
                        Chapter 17
                      </option>
                      <option
                        data-id={1029}
                        value="https://aresnov.org/villain-is-here-chapter-16/"
                      >
                        Chapter 16
                      </option>
                      <option
                        data-id={1027}
                        value="https://aresnov.org/villain-is-here-chapter-15/"
                      >
                        Chapter 15
                      </option>
                      <option
                        data-id={1025}
                        value="https://aresnov.org/villain-is-here-chapter-14/"
                      >
                        Chapter 14
                      </option>
                      <option
                        data-id={1023}
                        value="https://aresnov.org/villain-is-here-chapter-13/"
                      >
                        Chapter 13
                      </option>
                      <option
                        data-id={1021}
                        value="https://aresnov.org/villain-is-here-chapter-12/"
                      >
                        Chapter 12
                      </option>
                      <option
                        data-id={1019}
                        value="https://aresnov.org/villain-is-here-chapter-11/"
                      >
                        Chapter 11
                      </option>
                      <option
                        data-id={1017}
                        value="https://aresnov.org/villain-is-here-chapter-10/"
                      >
                        Chapter 10
                      </option>
                      <option
                        data-id={1015}
                        value="https://aresnov.org/villain-is-here-chapter-9/"
                      >
                        Chapter 9
                      </option>
                      <option
                        data-id={1013}
                        value="https://aresnov.org/villain-is-here-chapter-8/"
                      >
                        Chapter 8
                      </option>
                      <option
                        data-id={1011}
                        value="https://aresnov.org/villain-is-here-chapter-7/"
                      >
                        Chapter 7
                      </option>
                      <option
                        data-id={1009}
                        value="https://aresnov.org/villain-is-here-chapter-6/"
                      >
                        Chapter 6
                      </option>
                      <option
                        data-id={1007}
                        value="https://aresnov.org/villain-is-here-chapter-5/"
                      >
                        Chapter 5
                      </option>
                      <option
                        data-id={1005}
                        value="https://aresnov.org/villain-is-here-chapter-4/"
                      >
                        Chapter 4
                      </option>
                      <option
                        data-id={1003}
                        value="https://aresnov.org/villain-is-here-chapter-3/"
                      >
                        Chapter 3
                      </option>
                      <option
                        data-id={1001}
                        value="https://aresnov.org/villain-is-here-chapter-2/"
                      >
                        Chapter 2
                      </option>
                      <option
                        data-id={999}
                        value="https://aresnov.org/villain-is-here-chapter-1/"
                      >
                        Chapter 1
                      </option>
                    </select>
                  </div>
                </span>
                <span className="amob">
                  <span className="npv r">
                    {" "}
                    <div className="nextprev">
                      <a
                        className="ch-prev-btn"
                        href="https://aresnov.org/villain-is-here-chapter-94/"
                        rel="prev"
                      >
                        <i className="fas fa-angle-left" /> السابق{" "}
                      </a>
                      <a
                        className="ch-next-btn disabled"
                        href="#/next/"
                        rel="next"
                      >
                        التالي <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </span>
                  {/* muncul jika single mode */}
                  <span className="selector pagedsel r">
                    <select
                      name="select-paged"
                      className="ts-select-paged"
                      id="select-paged"
                    >
                      <option value={0}>1/9</option>
                      <option value={1}>2/9</option>
                      <option value={2}>3/9</option>
                      <option value={3}>4/9</option>
                      <option value={4}>5/9</option>
                      <option value={5}>6/9</option>
                      <option value={6}>7/9</option>
                      <option value={7}>8/9</option>
                      <option value={8}>9/9</option>
                    </select>
                  </span>
                </span>
              </div>
            </div>
            <div className="chaptertags">
              <p>
                Tags: مانجا Villain is Here – Chapter 95, كوميك Villain is Here
                – Chapter 95, قراءة Villain is Here – Chapter 95 اونلاين,
                Villain is Here – Chapter 95 الفصل, Villain is Here – Chapter 95
                الفصل, Villain is Here – Chapter 95 جودة عالية, Villain is Here
                – Chapter 95 مترجم, ترجمةVillain is Here – Chapter 95,مانجا
                Villain is Here – Chapter 95,
                <time
                  className="entry-date"
                  dateTime="2023-07-31CEST02:52:21+0200"
                  itemProp="datePublished"
                 
                >
                  31/07/2023
                </time>
                , <span itemProp="author">HOUSSINE</span>
              </p>
            </div>
          </article>
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
                    href="https://aresnov.org/series/apotheosis/"
                    title="Apotheosis"
                  >
                    <div className="limit">
                      <div className="ply" />
                      <span className="type Manhua" />
                      <span className="hotx">
                        <i className="fab fa-hotjar" />
                      </span>{" "}
                      <img
                        src="https://aresnov.org/wp-content/uploads/2022/12/Apotheosis.webp"
                        className="ts-post-image wp-post-image attachment-medium size-medium"
                        loading="lazy"
                        title="Apotheosis"
                        alt="Apotheosis"
                        width={500}
                        height={675}
                      />{" "}
                    </div>
                    <div className="bigor">
                      <div className="tt">Apotheosis </div>
                      <div className="adds">
                        <div className="epxs">الفصل 1106</div>
                        <div className="rt">
                          <div className="rating">
                            <div className="rating-prc">
                              <div className="rtp">
                                <div className="rtb">
                                  <span style={{ width: "81%" }} />
                                </div>
                              </div>
                            </div>
                            <div className="numscore">8.1</div>
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
                    href="https://aresnov.org/series/yuan-zun/"
                    title="Yuan Zun"
                  >
                    <div className="limit">
                      <div className="ply" />
                      <span className="type Manhua" />
                      <img
                        src="https://i3.wp.com/aresnov.org/wp-content/uploads/2023/06/288bb3b6-6b3f-4103-a3a7-45ac2d0fc86c.png"
                        className="ts-post-image wp-post-image attachment-medium size-medium"
                        loading="lazy"
                        title="Yuan Zun"
                        alt="Yuan Zun"
                        width={750}
                        height={1000}
                      />{" "}
                    </div>
                    <div className="bigor">
                      <div className="tt">Yuan Zun </div>
                      <div className="adds">
                        <div className="epxs">الفصل 525.5</div>
                        <div className="rt">
                          <div className="rating">
                            <div className="rating-prc">
                              <div className="rtp">
                                <div className="rtb">
                                  <span style={{ width: "85%" }} />
                                </div>
                              </div>
                            </div>
                            <div className="numscore">8.5</div>
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
                    href="https://aresnov.org/series/demonic-emperor/"
                    title="Demonic Emperor"
                  >
                    <div className="limit">
                      <div className="ply" />
                      <span className="type Manhua" />
                      <img
                        src="https://aresnov.org/wp-content/uploads/2022/12/Demonic-Emperor.webp"
                        className="ts-post-image wp-post-image attachment-medium size-medium"
                        loading="lazy"
                        title="Demonic Emperor"
                        alt="Demonic Emperor"
                        width={500}
                        height={807}
                      />{" "}
                    </div>
                    <div className="bigor">
                      <div className="tt">Demonic Emperor </div>
                      <div className="adds">
                        <div className="epxs">الفصل 433</div>
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
                        <div className="epxs">الفصل 13</div>
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
                    href="https://aresnov.org/series/heavenly-sword-intent/"
                    title="Heavenly Sword Intent"
                  >
                    <div className="limit">
                      <div className="ply" />
                      <span className="type Manhua" />
                      <img
                        src="https://i3.wp.com/aresnov.org/wp-content/uploads/2023/06/Heavenly-Sword-Intent.jpg"
                        className="ts-post-image wp-post-image attachment-medium size-medium"
                        loading="lazy"
                        title="Heavenly Sword Intent"
                        alt="Heavenly Sword Intent"
                        width={840}
                        height={1120}
                      />{" "}
                    </div>
                    <div className="bigor">
                      <div className="tt">Heavenly Sword Intent </div>
                      <div className="adds">
                        <div className="epxs">الفصل 3</div>
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
                    href="https://aresnov.org/series/global-martial-arts/"
                    title="Global Martial Arts"
                  >
                    <div className="limit">
                      <div className="ply" />
                      <span className="type Manhua" />
                      <img
                        src="https://aresnov.org/wp-content/uploads/2022/12/Global-Martial-Arts.webp"
                        className="ts-post-image wp-post-image attachment-medium size-medium"
                        loading="lazy"
                        title="Global Martial Arts"
                        alt="Global Martial Arts"
                        width={500}
                        height={675}
                      />{" "}
                    </div>
                    <div className="bigor">
                      <div className="tt">Global Martial Arts </div>
                      <div className="adds">
                        <div className="epxs">الفصل 219</div>
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
                  id="dsq-app5519"
                  name="dsq-app5519"
                  allowTransparency
                  frameBorder={0}
                  scrolling="no"
                  tabIndex={0}
                  title="Disqus"
                  width="100%"
                  src="https://disqus.com/embed/comments/?base=default&f=aresmanga-net&t_i=142903%20https%3A%2F%2Faresmanga.org%2Fvillain-is-here-chapter-95%2F&t_u=https%3A%2F%2Faresnov.org%2Fvillain-is-here-chapter-95%2F&t_e=Villain%20is%20Here%20%E2%80%93%20Chapter%2095&t_d=Villain%20is%20Here%20-%20Chapter%2095%20-%20%D9%85%D8%A7%D9%86%D8%AC%D8%A7%20ARESManga%20%7C%20%D8%A3%D9%81%D8%B6%D9%84%20%D9%85%D9%88%D9%82%D8%B9%20%D9%84%D9%84%D9%85%D8%A7%D9%86%D9%87%D9%88%D8%A7%20%D9%88%D8%A7%D9%84%D9%85%D8%A7%D9%86%D8%AC%D8%A7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9&t_t=Villain%20is%20Here%20%E2%80%93%20Chapter%2095&s_o=default#version=d3a7e0f9d834ec1287136e3d51e7ef82"
                  style={{
                    width: "1px !important",
                    minWidth: "100% !important",
                    border: "none !important",
                    overflow: "hidden !important",
                    height: "3219px !important"
                  }}
                  
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="footer">
    <footer
      id="colophon"
      className="site-footer"
      itemScope
      itemType="http://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="footermenu">
        <div className="menu-footer-container">
          <ul id="menu-footer" className="menu">
            <li
              id="menu-item-116"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-116"
            >
              <a href="https://aresnov.org" itemProp="url">
                الصفحة الرئيسية
              </a>
            </li>
            <li
              id="menu-item-17953"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17953"
            >
              <a
                href="https://aresnov.org/%d8%ad%d9%82%d9%88%d9%82-%d8%a7%d9%84%d8%b7%d8%a8%d8%b9-%d9%88%d8%a7%d9%84%d9%86%d8%b4%d8%b1-dmca/"
                itemProp="url"
              >
                حقوق الطبع والنشر DMCA
              </a>
            </li>
            <li
              id="menu-item-17954"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17954"
            >
              <a
                href="https://aresnov.org/terms-and-conditions/"
                itemProp="url"
              >
                الشروط والأحكام
              </a>
            </li>
            <li
              id="menu-item-17955"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17955"
            >
              <a href="https://aresnov.org/privacy-policy-2/" itemProp="url">
                سياسة الخصوصية
              </a>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="footercopyright">
        <div className="sosmedmrgn" />{" "}
        <div className="copyright">
          <div className="txt">
            <p>
              All the comics on this website are only previews of the original
              comics, there may be many language errors, character names, and
              story lines. For the original version, please buy the comic if
              it's available in your city.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

    )
}


function Page({URL}: {URL: string}){
    return (
        <img
                  className="ts-main-image curdown"
                  data-index={0}
                  src={URL}
                  data-server="Server1"
                 
                />
    )
}
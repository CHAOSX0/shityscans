import Image from 'next/image'
import PTCCard from './PTC'
import LCard from './LC'
import NC from './NC'
import {supabase} from '../../lib/supabase'
import { error } from 'console'

async function getLatesAddedSeriesData(){
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=created_at', {
    cache: 'no-store',
    headers:{
      'Range-Unit': 'items',
      'Range': '0-30',
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
    return
  }

  return await res.json()
}
async function getPopularSeriesData() : Promise<Array<any>>{
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?is_popular=is.true', {
    cache: 'no-store',
    headers:{
      'Range-Unit': 'items',
      'Range': '0-30',
      'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U'
    }
  })
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    console.error(await res.json())
    // This will activate the closest `error.js` Error Boundary
    throw 'fuck';
  }

  return await res.json()
}
async function getLatestSeriesData() {
  //const {data, error} = await supabase.from('series').select().order('title')
//console.log(data)
  const res = await fetch('https://rathqhufdejjehkdxfuy.supabase.co/rest/v1/series?order=updated', {
    cache: 'no-store',
    headers:{
      'Range-Unit': 'items',
      'Range': '0-30',
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
    return
  }

  return await res.json()
}
export default async function Home() {
  type SeriesData = {id: string, created_at: string, title: string, coverURL: string, coverWidth: number, coverHeight: number, rating: number, latestChaptersMeta:{list:Array<{number: number, created_at:string, URL: string}>, details: string}}
  const popularseriesdata =  await getPopularSeriesData()
  console.log(popularseriesdata)
  const latestSeriesData = await getLatestSeriesData()
  const latestAddedSeriesData = await getLatesAddedSeriesData()
  const latestAdedSeries = latestAddedSeriesData.map((e: SeriesData, i:number)=> <NC {...e} key={i}/>)
  const PopularSeries: any = popularseriesdata.map((e: SeriesData, i:number)=><PTCCard {...e} key={i}/>)
  const latestSeries: any = latestSeriesData.map((e: SeriesData, i: number)=><LCard key={i} {...e}/>)

  return (
    <>
    <div className="mainholder rtl">
  <div className="th">
    <div className="centernav bound">
      <div className="shme">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <header role="banner" >
        <div className="site-branding logox">
          <span className="logos">
            <a
              title="مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية - افضل موقع للمانجا المترجمة يضم مكتبة هائلة من المانجا المترجمة يمتاز بسرعة ترجمة الفصول الجديدة."
              itemProp="url"
              href="https://aresmanga.org/"
            >
              <img
                src="https://aresmanga.org/wp-content/uploads/2022/12/ares-logo-blank.png"
                alt="مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية - افضل موقع للمانجا المترجمة يضم مكتبة هائلة من المانجا المترجمة يمتاز بسرعة ترجمة الفصول الجديدة."
              />
              <span className="hdl">
                مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية
              </span>
            </a>
          </span>
          <meta
            itemProp="name"
            content="مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية"
          />
        </div>
      </header>
      <nav id="main-menu" className="mm">
        <span
          itemType="http://schema.org/SiteNavigationElement"
          role="navigation"
        >
          <ul id="menu-menu" className="menu">
            <li
              id="menu-item-235"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-235"
            >
              <a href="https://aresmanga.org/random" itemProp="url">
                <span itemProp="name">
                 
                </span>
              </a>
            </li>
            <li
              id="menu-item-76"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-76"
            >
              <a
                href="https://aresmanga.org"
                aria-current="page"
                itemProp="url"
              >
                <span itemProp="name">الرئيسية</span>
              </a>
            </li>
            <li
              id="menu-item-117"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-117"
            >
              <a href="https://aresmanga.org/series/" itemProp="url">
                <span itemProp="name">أعمــالنا</span>
              </a>
            </li>
            <li
              id="menu-item-119"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119"
            >
              <a
                href="https://aresmanga.org/%d8%a7%d9%84%d9%85%d9%81%d8%b6%d9%84%d8%a9/"
                itemProp="url"
              >
                <span itemProp="name">المفضلة</span>
              </a>
            </li>
            <li
              id="menu-item-47049"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47049"
            >
              <a
                href="https://ko-fi.com/aresmanga#tier16717256267191"
                itemProp="url"
              >
                <span itemProp="name">اشتراكات</span>
              </a>
            </li>
            <li
              id="menu-item-120"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-120"
            >
              <a href="#" itemProp="url">
                <span itemProp="name">للتواصل معنا</span>
              </a>
              <ul className="sub-menu">
                <li
                  id="menu-item-121"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-121"
                >
                  <a href="https://discord.gg/HPyruh7U2k" itemProp="url">
                    <span itemProp="name">Discord</span>
                  </a>
                </li>
                <li
                  id="menu-item-122"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-122"
                >
                  <a href="https://t.me/+DnMLiVZaMYpiM2Nk" itemProp="url">
                    <span itemProp="name">Telegram</span>
                  </a>
                </li>
                <li
                  id="menu-item-123"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-123"
                >
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://facebook.com/aresmangaofficial"
                    itemProp="url"
                  >
                    <span itemProp="name">Facebook</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-24714"
              className="menu-item menu-item-type- menu-item-object-login menu-item-has-children menu-item-24714"
            >
              <a
                href="https://aresmanga.org/wp-login.php?redirect_to=https%3A%2F%2Faresmanga.org%2F"
                itemProp="url"
              >
                <span itemProp="name">تسجيل الدخول</span>
              </a>
              <ul className="sub-menu">
                <li
                  id="menu-item-24715"
                  className="menu-item menu-item-type- menu-item-object-register menu-item-24715"
                >
                  <a
                    href="https://aresmanga.org/wp-login.php?action=register&redirect_to=https://aresmanga.org/"
                    itemProp="url"
                  >
                    <span itemProp="name">التسجيل</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>{" "}
        </span>
        <div className="clear" />
      </nav>
      <div className="searchx minmb">
        <form
          action="https://aresmanga.org/"
          id="form"
          method="get"
          itemProp="potentialAction"

          itemType="http://schema.org/SearchAction"
        >
          <meta itemProp="target" content="https://aresmanga.org/?s={query}" />
          <input
            id="s"
            itemProp="query-input"
            className="search-live"
            type="text"
            placeholder="بحث"
            name="s"
            autoComplete="off"
          />
          <button type="submit" id="submit">
            <i className="fas fa-search" aria-hidden="true" />
          </button>
          <div className="srcmob srccls">
            <i className="fas fa-times-circle" />
          </div>
        </form>
      </div>
      <div className="srcmob">
        <i className="fas fa-search" aria-hidden="true" />
      </div>
    </div>
    <div className="clear" />
  </div>
  <div className="big-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-rtl">
    <div
      className="swiper-wrapper"
      style={{
        transitionDuration: "0ms",

      }}
    >
      <div
        className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
        data-swiper-slide-index={0}
        style={{ width: 1519 }}
      >
        <a href="https://aresmanga.org/series/12278-martial-peak/">
          <div className="mainslider">
            <div className="limit">
              <div className="sliderinfo">
                <div className="sliderinfolimit">
                  <span className="name">Martial Peak</span>
                  <div className="meta">
                    <span className="quality">8.0 </span>
                    <span className="text">
                      النوع: <b>Manhua</b>
                    </span>
                    <span className="text">
                      التصنيف: أكشن, تاريخي, حريم, خيال, فانتازيا, فنون قتالية,
                      مغامرات
                    </span>
                  </div>
                  <div className="desc">
                    <p>
                      رحلة الوصول إلى قمة فنون القتال هي رحلة وحيدة موحشة
                      وطويلة. في مواجهة الشدائد يجب عليك البقاء على قيد الحياة
                      والقتال بلا هوادة، وعندها فقط يمكنك الارتقاء ومتابعة رحلتك
                      لتصبح…
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bigbanner"
                style={{
                  backgroundImage:
                    'url("https://i3.wp.com/aresmanga.org/wp-content/uploads/2022/12/GE_Yang_Kai.jpg")'
                }}
              />
            </div>
          </div>
        </a>
      </div>
      <div
        className="swiper-slide swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next"
        data-swiper-slide-index={0}
        style={{ width: 1519 }}
      >
        <a href="https://aresmanga.org/series/12278-martial-peak/">
          <div className="mainslider">
            <div className="limit">
              <div className="sliderinfo">
                <div className="sliderinfolimit">
                  <span className="name">Martial Peak</span>
                  <div className="meta">
                    <span className="quality">8.0 </span>
                    <span className="text">
                      النوع: <b>Manhua</b>
                    </span>
                    <span className="text">
                      التصنيف: أكشن, تاريخي, حريم, خيال, فانتازيا, فنون قتالية,
                      مغامرات
                    </span>
                  </div>
                  <div className="desc">
                    <p>
                      رحلة الوصول إلى قمة فنون القتال هي رحلة وحيدة موحشة
                      وطويلة. في مواجهة الشدائد يجب عليك البقاء على قيد الحياة
                      والقتال بلا هوادة، وعندها فقط يمكنك الارتقاء ومتابعة رحلتك
                      لتصبح…
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bigbanner"
                style={{
                  backgroundImage:
                    'url("https://i3.wp.com/aresmanga.org/wp-content/uploads/2022/12/GE_Yang_Kai.jpg")'
                }}
              />
            </div>
          </div>
        </a>
      </div>
      <div
        className="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-prev"
        data-swiper-slide-index={0}
        style={{ width: 1519 }}
      >
        <a href="https://aresmanga.org/series/12278-martial-peak/">
          <div className="mainslider">
            <div className="limit">
              <div className="sliderinfo">
                <div className="sliderinfolimit">
                  <span className="name">Martial Peak</span>
                  <div className="meta">
                    <span className="quality">8.0 </span>
                    <span className="text">
                      النوع: <b>Manhua</b>
                    </span>
                    <span className="text">
                      التصنيف: أكشن, تاريخي, حريم, خيال, فانتازيا, فنون قتالية,
                      مغامرات
                    </span>
                  </div>
                  <div className="desc">
                    <p>
                      رحلة الوصول إلى قمة فنون القتال هي رحلة وحيدة موحشة
                      وطويلة. في مواجهة الشدائد يجب عليك البقاء على قيد الحياة
                      والقتال بلا هوادة، وعندها فقط يمكنك الارتقاء ومتابعة رحلتك
                      لتصبح…
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bigbanner"
                style={{
                  backgroundImage:
                    'url("https://i3.wp.com/aresmanga.org/wp-content/uploads/2022/12/GE_Yang_Kai.jpg")'
                }}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="paging">
      <div className="centerpaging">
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 1"
          />
        </div>
      </div>
    </div>
    <span
      className="swiper-notification"
      aria-live="assertive"
      aria-atomic="true"
    />
  </div>
  <div className="home-genres">
    <span className="genre-listx">
      <a
        href="https://aresmanga.org/genres/%d8%a3%d9%83%d8%b4%d9%86/"
        title="View all series in أكشن"
      >
        أكشن
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%a3%d9%84%d8%b9%d8%a7%d8%a8/"
        title="View all series in ألعاب"
      >
        ألعاب
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%a5%d8%ab%d8%a7%d8%b1%d8%a9/"
        title="View all series in إثارة"
      >
        إثارة
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%a5%d8%b9%d8%a7%d8%af%d8%a9-%d8%a5%d8%ad%d9%8a%d8%a7%d8%a1/"
        title="View all series in إعادة إحياء"
      >
        إعادة إحياء
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae%d9%8a/"
        title="View all series in تاريخي"
      >
        تاريخي
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%ad%d8%b1%d9%8a%d9%85/"
        title="View all series in حريم"
      >
        حريم
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%ad%d9%8a%d8%a7%d8%a9-%d9%85%d8%af%d8%b1%d8%b3%d9%8a%d8%a9/"
        title="View all series in حياة مدرسية"
      >
        حياة مدرسية
      </a>
      <a
        href="https://aresmanga.org/genres/%d8%ae%d8%a7%d8%b1%d9%82-%d9%84%d9%84%d8%b7%d8%a8%d9%8a%d8%b9%d8%a9/"
        title="View all series in خارق للطبيعة"
      >
        خارق للطبيعة
      </a>{" "}
    </span>
    <span className="alman">
      <a href="https://aresmanga.org/series">جميــع الأعمال</a>
    </span>
  </div>
  <div id="content">
    <div className="wrapper">
      <div className="hotslid">
        <div className="bixbox hothome full">
          <div className="releases">
            <h2>شائع اليوم</h2>
          </div>
          <div className="listupd">
           {PopularSeries}
          </div>
        </div>
      </div>
      <div className="postbody">
        <div className="kln">
        </div>
        <br />
        <div className="bixbox">
          <div className="releases">
            <h2>جديد إصداراتنا</h2>

            <a className="vl" href="https://aresmanga.org/series/?order=update">
              جميــع الأعمال
            </a>
          </div>
          <div className="listupd">
            {latestSeries}
          </div>
        </div>
        <div className="bixbox">
          <div className="releases">
            <h2>مضاف حديثا</h2>
          </div>
          <div className="listupd">
            {latestAdedSeries}
          </div>
        </div>{" "}
        <div className="bixbox">
          <div className="releases">
            <h2>إقتراحاتنا</h2>
          </div>
          <div className="series-gen">
            <ul className="nav-tabs">
              <li className="active">
                <a href="#series-283">Seinen</a>
              </li>
              <li>
                <a href="#series-6">حريم</a>
              </li>
              <li>
                <a href="#series-128">طبي</a>
              </li>
              <li>
                <a href="#series-101">فنون قتالية</a>
              </li>
              <li>
                <a href="#series-114">موريم</a>
              </li>
            </ul>
            <div className="listupd">
              <div id="series-283" className="tab-pane active"></div>
              <div id="series-6" className="tab-pane">
                <div className="bs">
                  <div className="bsx">
                    <a
                      href="https://aresmanga.org/series/15442-otherworldly-evil-monarch/"
                      title="Otherworldly Evil Monarch"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://aresmanga.org/wp-content/uploads/2022/12/Otherworldly-Evil-Monarch.webp"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Otherworldly Evil Monarch"
                          alt="Otherworldly Evil Monarch"
                          width={500}
                          height={707}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Otherworldly Evil Monarch </div>
                        <div className="adds">
                          <div className="epxs">الفصل ?</div>
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
                      href="https://aresmanga.org/series/invincible-at-the-start/"
                      title="Invincible At The Start"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://i1.wp.com/aresmanga.org/wp-content/uploads/2023/01/senkaitenseiki_220921_cover-1.jpg"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Invincible At The Start"
                          alt="Invincible At The Start"
                          width={750}
                          height={1060}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Invincible At The Start </div>
                        <div className="adds">
                          <div className="epxs">الفصل 95</div>
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
                      href="https://aresmanga.org/series/12278-martial-peak/"
                      title="Martial Peak"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://i2.wp.com/aresmanga.org/wp-content/uploads/2022/12/cover-1.jpg"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Martial Peak"
                          alt="Martial Peak"
                          width={1293}
                          height={1940}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Martial Peak </div>
                        <div className="adds">
                          <div className="epxs">الفصل 3514</div>
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
                      href="https://aresmanga.org/series/strongest-anti-m-e-t-a/"
                      title="Strongest Anti M.E.T.A"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://i0.wp.com/aresmanga.org/wp-content/uploads/2022/12/1-2.jpg"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Strongest Anti M.E.T.A"
                          alt="Strongest Anti M.E.T.A"
                          width={800}
                          height={1132}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Strongest Anti M.E.T.A </div>
                        <div className="adds">
                          <div className="epxs">الفصل 628</div>
                          <div className="rt">
                            <div className="rating">
                              <div className="rating-prc">
                                <div className="rtp">
                                  <div className="rtb">
                                    <span style={{ width: "70%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="numscore">7</div>
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
                      href="https://aresmanga.org/series/36454-martial-god-asura/"
                      title="Martial God Asura"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://aresmanga.org/wp-content/uploads/2022/12/Martial-God-Asura.webp"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Martial God Asura"
                          alt="Martial God Asura"
                          width={500}
                          height={666}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Martial God Asura </div>
                        <div className="adds">
                          <div className="epxs">الفصل 778</div>
                          <div className="rt">
                            <div className="rating">
                              <div className="rating-prc">
                                <div className="rtp">
                                  <div className="rtb">
                                    <span style={{ width: "70%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="numscore">7.0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
              </div>
              <div id="series-128" className="tab-pane"></div>
              <div id="series-101" className="tab-pane">
                <div className="bs">
                  <div className="bsx">
                    <a
                      href="https://aresmanga.org/series/15442-otherworldly-evil-monarch/"
                      title="Otherworldly Evil Monarch"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://aresmanga.org/wp-content/uploads/2022/12/Otherworldly-Evil-Monarch.webp"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Otherworldly Evil Monarch"
                          alt="Otherworldly Evil Monarch"
                          width={500}
                          height={707}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Otherworldly Evil Monarch </div>
                        <div className="adds">
                          <div className="epxs">الفصل ?</div>
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
                      href="https://aresmanga.org/series/dormant-since-ancient-times-thrusting-through-the-heavens-after-coming-into-being/"
                      title="Dormant Since Ancient Times: Thrusting Through the Heavens After Coming Into Being"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <span className="hotx">
                          <i className="fab fa-hotjar" />
                        </span>{" "}
                        <img
                          src="https://i0.wp.com/aresmanga.org/wp-content/uploads/2023/08/Dormant-Since-Ancient-Times-Thrusting-Through-the-Heavens-After-Coming-Into-Being.jpg"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Dormant Since Ancient Times: Thrusting Through the Heavens After Coming Into Being"
                          alt="Dormant Since Ancient Times: Thrusting Through the Heavens After Coming Into Being"
                          width={979}
                          height={1357}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">
                          Dormant Since Ancient Times: Thrusting Through the
                          Heavens After Coming Into Being{" "}
                        </div>
                        <div className="adds">
                          <div className="epxs">الفصل 3</div>
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
                      href="https://aresmanga.org/series/master-rebel-not-the-holy-son/"
                      title="Master: Rebel, not the Holy Son"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://aresmanga.org/wp-content/uploads/2023/08/Master-Rebel-not-the-Holy-Son.webp"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Master: Rebel, not the Holy Son"
                          alt="Master: Rebel, not the Holy Son"
                          width={500}
                          height={662}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">
                          Master: Rebel, not the Holy Son{" "}
                        </div>
                        <div className="adds">
                          <div className="epxs">الفصل 4</div>
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
                      href="https://aresmanga.org/series/blade-debt/"
                      title="Blade Debt"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <img
                          src="https://aresmanga.org/wp-content/uploads/2023/08/Blade-Debt.webp"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Blade Debt"
                          alt="Blade Debt"
                          width={500}
                          height={666}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Blade Debt </div>
                        <div className="adds">
                          <div className="epxs">الفصل 13</div>
                          <div className="rt">
                            <div className="rating">
                              <div className="rating-prc">
                                <div className="rtp">
                                  <div className="rtb">
                                    <span style={{ width: "90%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="numscore">9</div>
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
                      href="https://aresmanga.org/series/8719-leveling-up-by-hoarding/"
                      title="Leveling Up By Hoarding"
                    >
                      <div className="limit">
                        <div className="ply" />
                        <span className="type Manhua" />
                        <span className="hotx">
                          <i className="fab fa-hotjar" />
                        </span>{" "}
                        <img
                          src="https://aresmanga.org/wp-content/uploads/2023/06/leveling-Up-By-Hoarding.webp"
                          className="ts-post-image wp-post-image attachment-medium size-medium"
                          loading="lazy"
                          title="Leveling Up By Hoarding"
                          alt="Leveling Up By Hoarding"
                          width={550}
                          height={729}
                        />{" "}
                      </div>
                      <div className="bigor">
                        <div className="tt">Leveling Up By Hoarding </div>
                        <div className="adds">
                          <div className="epxs">الفصل 7</div>
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
                </div>{" "}
              </div>
              <div id="series-114" className="tab-pane"></div>
            </div>
          </div>
        </div>
        <div className="bixbox">
          <div className="releases blog">
            <h3>المزيد من الأعمال</h3>
            <a className="vl" href="https://aresmanga.org/blog/">
              جميــع الأعمال
            </a>
          </div>
          <div className="bloglist">
            <article
              className="blogbox hentry"
          
              itemType="http://schema.org/CreativeWork"
            >
              <div className="innerblog">
                <div className="thumb">
                  <a
                    href="https://aresmanga.org/blog/recruitment/"
                    title="للراغبين في الانضمام لطاقم العمل"
                    itemProp="url"
                  ></a>
                </div>
                <div className="infoblog">
                  <header className="entry-header">
                    <h2 className="entry-title" itemProp="headline">
                      <a
                        href="https://aresmanga.org/blog/recruitment/"
                        title="للراغبين في الانضمام لطاقم العمل"
                        itemProp="url"
                      >
                        للراغبين في الانضمام لطاقم العمل{" "}
                      </a>
                    </h2>
                  </header>
                  <div className="entry-content" itemProp="text">
                    <p>
                      السلام عليكم ورحمة الله وبركــاته يا معشر المتــابعين~ نحن
                      نعلن لكم بكل سرور فرصة الانضمام إلينا وأن تكونوا جزءً من
                      فريق عملنا المتحمس والمتفاني. سواء كان هدفك البحث عن
                      المرح…
                    </p>
                  </div>
                  <div className="entry-meta">
                    <span className="author vcard">
                      <i className="far fa-user" /> <i className="fn">ARES</i>
                    </span>{" "}
                    ·{" "}
                    <span>
                      <i className="far fa-clock" />{" "}
                      <time
                        itemProp="datePublished"
                        dateTime="2023-03-07T21:15:34+01:00"
                        className="updated"
                      >
                        مارس 7, 2023
                      </time>
                    </span>
                    <span className="hide">
                      <time
                        itemProp="dateModified"
                        dateTime="2023-06-16T13:46:35+02:00"
                      >
                        يونيو 16, 2023
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
     
    </div>
  </div>
  <div id="footer">
    <footer
      id="colophon"
      className="site-footer"
    
      itemType="http://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="footermenu">
        <div className="menu-footer-container">
          <ul id="menu-footer" className="menu">
            <li
              id="menu-item-116"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-116"
            >
              <a
                href="https://aresmanga.org"
                aria-current="page"
                itemProp="url"
              >
                الصفحة الرئيسية
              </a>
            </li>
            <li
              id="menu-item-17953"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17953"
            >
              <a
                href="https://aresmanga.org/%d8%ad%d9%82%d9%88%d9%82-%d8%a7%d9%84%d8%b7%d8%a8%d8%b9-%d9%88%d8%a7%d9%84%d9%86%d8%b4%d8%b1-dmca/"
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
                href="https://aresmanga.org/terms-and-conditions/"
                itemProp="url"
              >
                الشروط والأحكام
              </a>
            </li>
            <li
              id="menu-item-17955"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17955"
            >
              <a href="https://aresmanga.org/privacy-policy-2/" itemProp="url">
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
<script  src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
</>
  )
}

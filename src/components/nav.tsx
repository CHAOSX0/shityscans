import Search from "./nav/search"

export default function Nav({Items}: {Items: Array<{text: string, URL: string}>}){
    function NavELement({text, URL}: {text: string, URL: string}){
        return (
            <li
          id="menu-item-76"
          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-76"
        >
          <a
            href={URL}
            aria-current="page"
            itemProp="url"
          >
            <span itemProp="name">{text}</span>
          </a>
        </li>
        )

    }
    const navELements = Items.map((e:{text: string, URL: string}, i)=><NavELement key={i} {...e} />)
    
    return (
        <div className="th">
<div className="centernav bound">
  <div className="hidden">
    <i className="fa fa-bars font-black inline-block not-italic leading-none" aria-hidden="true" />
  </div>
  <header role="banner" className="bannerClassName float-right" >
    <div className="site-branding logox">
      <span className="logos m-0 block">
        <a
          title="مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية - افضل موقع للمانجا المترجمة يضم مكتبة هائلة من المانجا المترجمة يمتاز بسرعة ترجمة الفصول الجديدة."
          itemProp="url"
          href="https://aresmanga.org/"
          className="logosA text-white no-underline"
        >
          <img
            src="https://aresmanga.org/wp-content/uploads/2022/12/ares-logo-blank.png"
            alt="مانجا ARESManga | أفضل موقع للمانهوا والمانجا العربية - افضل موقع للمانجا المترجمة يضم مكتبة هائلة من المانجا المترجمة يمتاز بسرعة ترجمة الفصول الجديدة."
            className="block align-middle max-w-full h-auto"
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
  <nav id="main-menu" className="mm float-right">
    <span
      itemType="http://schema.org/SiteNavigationElement"
      role="navigation"
    >
      <ul id="menu-menu" className="menu relative float-left p-0 m-0">
        {navELements}
      </ul>{" "}
    </span>
    <div className="clear-both" />
  </nav>
  <div className="searchx minmb relative float-left">
    <form
      action="https://aresmanga.org/"
      id="form"
      method="get"
      itemProp="potentialAction"

      itemType="http://schema.org/SearchAction"
      className="p-0 relative"
    >
      <meta itemProp="target" content="https://aresmanga.org/?s={query}" />
      <input
        id="s"
        itemProp="query-input"
        className="search-live pl-8 pr-3 font-light bg-gray-900 block w-full h-8 text-sm text-white"
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
  <div className="srcmob hidden">
    <i className="fas fa-search" aria-hidden="true" />
  </div>
</div>
<div className="clear-both" />
</div>
    )
}


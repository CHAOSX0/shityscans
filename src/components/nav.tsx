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
<div className="centernav bound" style={{flexDirection:'row-reverse', alignItems: 'center'}}>
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
          {/*image here*/}
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
  <nav id="main-menu" className="mm float-right" style={{display: 'block !important', position: 'static', backgroundColor: 'transparent', float: 'right' }}>
    <span
      itemType="http://schema.org/SiteNavigationElement"
      role="navigation"
    >
      <ul id="menu-menu" className="menu relative float-left p-0 m-0" style={{float: 'left', display:'flex'}}>
        {navELements}
      </ul>{" "}
    </span>
    <div className="clear-both" />
  </nav>
  <Search />
</div>
<div className="clear-both" />
</div>
    )
}


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
        {navELements}
      </ul>{" "}
    </span>
    <div className="clear" />
  </nav>
  <Search />
 
</div>
<div className="clear" />
</div>
    )
}


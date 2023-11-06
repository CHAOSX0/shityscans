import Link from "next/link";

export default function Footer(){
    return (
        <div id="footer">
        <footer
          id="colophon"
          className="site-footer mt-8 text-center leading-5 p-0 text-xs text-white absolute w-full bottom-0"
        
          itemType="http://schema.org/WPFooter"
          role="contentinfo"
        >
          <div className="footermenu">
            <div className="menu-footer-container">
              <ul id="menu-footer" className="menu p-0 m-0 block overflow-hidden">
                <li
                  id="menu-item-116"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-116"
                >
                  <Link
                  prefetch={false}
                    href="/"
                    aria-current="page"
                    itemProp="url"
                  >
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li
                  id="menu-item-17953"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17953"
                >
                  <Link
                  prefetch={false}
        
                    href="/dmca/"
                    itemProp="url"
                  >
                    حقوق الطبع والنشر DMCA
                  </Link>
                </li>
                <li
                  id="menu-item-17954"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17954"
                >
                  <Link
                    href="/terms-and-conditions/"
                    itemProp="url"
                  prefetch={false}

                  >
                    الشروط والأحكام
                  </Link>
                </li>
                <li
                  id="menu-item-17955"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17955"
                >
                  <Link href="/privacy-policy/" prefetch={false} itemProp="url">
                    سياسة الخصوصية
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="footercopyright overflow-hidden relative">
            <div className="sosmedmrgn mt-8" />{" "}
            <div className="copyright overflow-hidden mb-8">
              <div className="txt">
                <p className='m-0 mt-1 mb-0 leading-4'>
                  All the comics on this website are only previews of the original
                  comics, there may be many language errors, character names, and
                  story lines. For the original version, please buy the comic if
                  it's available in your country.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}
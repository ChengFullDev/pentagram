import React from "react";

const Header = () => {
  return (
    <>
      <header
        className="h-header flex flex-row items-center"
        data-behavior="stickyHeader tracking"
        data-header
      >
        <div className="container flex flex-row items-center justify-between overflow-hidden">
          <h1>
            <a
              href="https://www.pentagram.com"
              className="text-primary relative block z-[305]"
              data-logo-btn
              data-home-btn
            >
              <svg
                width="192"
                height="38"
                fill="none"
                className="w-103 h-24"
                name="logo"
                viewBox="0 0 192 38"
                aria-hidden="true"
              >
                <use xlinkHref="#logo"></use>
              </svg>
              <span className="sr-only">Pentagram</span>
            </a>
          </h1>
          <nav className="hidden md:block f-body-1">
            <h2 id="mainNavHeading" className="sr-only">
              Site navigation
            </h2>
            <ul
              aria-labelledby="mainNavHeading"
              className="flex flex-row gap-x-24"
            >
              <li>
                <a
                  href="https://www.pentagram.com/work"
                  className="header__item--work header__item--casestudy"
                  data-work-btn
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="https://www.pentagram.com/about"
                  className="header__item--about"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.pentagram.com/news"
                  className="header__item--news"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="News"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="https://www.pentagram.com/contact"
                  className="header__item--contact"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="Contact"
                >
                  Contact
                </a>
              </li>

              <li className="flex items-center">
                <button
                  aria-label="Toggle search panel"
                  type="button"
                  className="w-20 h-20 z-[900] relative header__item--search"
                  data-behavior="searchToggle"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="toggle-search"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    className="[.js-searchOpened_&amp;]:hidden"
                    name="search-20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#search-20"></use>
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    className="text-primary hover:text-secondary hidden [.js-searchOpened_&amp;]:block absolute top-0 left-0"
                    name="close-20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#close-20"></use>
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="/archive"
                  className="header__item--archive no-pjax"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="archive"
                >
                  Archive
                </a>
              </li>
            </ul>
          </nav>

          <div
            className="header__nav header__nav--ham md:hidden block top-0 absolute z-[1351] right-outer-gutter overflow-hidden"
            data-behavior="navToggle"
            data-tracking-element
            data-tracking-event="navigation_use"
            data-tracking-event-category="Navigation Use"
            data-tracking-event-label="toggle_mobile_nav"
          >
            <button
              aria-label="Toggle menu"
              type="button"
              className="btn ham"
              data-ham-btn
            >
              <svg
                width="20"
                height="20"
                fill="none"
                className="[.js--nav_&amp;]:hidden"
                name="menu"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <use xlinkHref="#menu"></use>
              </svg>
              <svg
                width="20"
                height="20"
                fill="none"
                className="text-inverse hidden [.js--nav_&amp;]:block"
                name="close-20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <use xlinkHref="#close-20"></use>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className="headerMobile invisible f-body-1 z-[1350] fixed inset-0 w-full h-full bg-inverse transition-all duration-300 text-inverse opacity-0 overflow-y-auto scroll-smooth"
        data-header-mobile
      >
        <nav className="w-full h-full">
          <div className="container h-full flex flex-col">
            <div className="h-60 flex items-center text-link relative shrink-0">
              <a
                href="https://www.pentagram.com"
                aria-label="Pentagram"
                className="text-inverse relative block z-[305]"
                data-logo-btn
                data-tracking-element
                data-tracking-event="navigation_use"
                data-tracking-event-category="Navigation Use"
                data-tracking-event-label="homepage"
              >
                <svg
                  width="192"
                  height="38"
                  fill="none"
                  className="w-103 h-24"
                  name="logo"
                  viewBox="0 0 192 38"
                  aria-hidden="true"
                >
                  <use xlinkHref="#logo"></use>
                </svg>
              </a>
            </div>

            <ul className="f-heading-4 flex flex-col gap-16 mt-48">
              <li>
                <a
                  href="https://www.pentagram.com/work"
                  className=""
                  data-work-btn
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="https://www.pentagram.com/about"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.pentagram.com/news"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="news"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="https://www.pentagram.com/contact"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="contact"
                >
                  Contact
                </a>
              </li>

              <li>
                <button
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="toggle-search"
                  data-behavior="searchTrigger"
                >
                  Search
                </button>
              </li>
              <li>
                <a
                  href="/archive"
                  className="flex items-baseline no-pjax"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="archive"
                >
                  Archive
                </a>
              </li>
            </ul>

            <div className="mt-auto pt-24 text-secondary pb-24 flex flex-col gap-y-16">
              <h3 id="mobileSocialHeading" className="sr-only">
                Social links
              </h3>
              <ul
                aria-labelledby="mobileSocialHeading"
                className="flex flex-row gap-x-24 flex-wrap gap-y-16"
              >
                <li>
                  <a
                    href="https://www.instagram.com/pentagramdesign"
                    target="_blank"
                    rel="noopenner noreferrer"
                    data-tracking-element
                    data-tracking-event="navigation_use"
                    data-tracking-event-category="Navigation Use"
                    data-tracking-event-label="instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/pentagram"
                    target="_blank"
                    rel="noopenner noreferrer"
                    data-tracking-element
                    data-tracking-event="navigation_use"
                    data-tracking-event-category="Navigation Use"
                    data-tracking-event-label="linkedin"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/pentagram"
                    target="_blank"
                    rel="noopenner noreferrer"
                    data-tracking-element
                    data-tracking-event="navigation_use"
                    data-tracking-event-category="Navigation Use"
                    data-tracking-event-label="x"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/pentagramdesign/"
                    target="_blank"
                    rel="noopenner noreferrer"
                    data-tracking-element
                    data-tracking-event="navigation_use"
                    data-tracking-event-category="Navigation Use"
                    data-tracking-event-label="facebook"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <button
                    aria-label="Subscribe to newsletter"
                    className="no-pjax text-left"
                    data-behavior="newsletterToggle"
                    data-tracking-element
                    data-tracking-event="navigation_use"
                    data-tracking-event-category="Navigation Use"
                    data-tracking-event-label="newsletter"
                  >
                    Newsletter
                  </button>
                </li>
                <li>
                  <a
                    href="/careers"
                    data-tracking-element
                    data-tracking-event="navigation_use"
                    data-tracking-event-category="Navigation Use"
                    data-tracking-event-label="careers"
                  >
                    Careers
                  </a>
                </li>
              </ul>
              <div className="flex flex-row gap-24">
                <a
                  href="/privacypolicy"
                  data-tracking-element
                  data-tracking-event="navigation_use"
                  data-tracking-event-category="Navigation Use"
                  data-tracking-event-label="privacy_policy"
                >
                  Privacy Policy
                </a>
                <span className="order-2 md:order-1">
                  &copy; 1972 &ndash; 2025 Pentagram
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

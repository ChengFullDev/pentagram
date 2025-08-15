import React from "react";

const StickyHeader = () => {
  return (
    <>
      <div
        className="stickyTop js--top stickyTop--portfolio"
        data-behavior="stickyTop"
      >
        <div className="container h-header flex flex-row items-center justify-between overflow-hidden">
          <h1>
            <a
              href="https://www.pentagram.com"
              className="text-primary relative block z-[999]"
              data-logo-btn
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

          <div className="stickyTop__navContainer">
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
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pentagram.com/news"
                    className="header__item--news"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pentagram.com/contact"
                    className="header__item--contact"
                  >
                    Contact
                  </a>
                </li>

                <li className="flex items-center">
                  <button
                    type="button"
                    className="w-20 h-20 header__item--search"
                    data-behavior="searchToggle"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      className=""
                      name="search-20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <use xlinkHref="#search-20"></use>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </li>
                <li>
                  <a href="/archive" className="header__item--archive">
                    Archive
                  </a>
                </li>
              </ul>
            </nav>

            <div
              className="header__nav header__nav--ham md:hidden block top-0 absolute z-[900] right-outer-gutter"
              data-behavior="navToggle"
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
        </div>
      </div>

      <div className="stickySearch js--top" data-behavior="stickySearch">
        <div className="container">
          <span className="stickySearch__title" data-search-stickytitle></span>

          <button
            type="button"
            className="btn btnClose stickySearch__btn"
            data-behavior="searchTrigger"
          >
            <span className="icon--close">
              <svg>
                <title>Close</title>
                <use xlinkHref="#icon--close" />
              </svg>
            </span>
            <span className="icon--close_mobile">
              <svg>
                <title>Close Mobile</title>
                <use xlinkHref="#icon--close_mobile" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyHeader;

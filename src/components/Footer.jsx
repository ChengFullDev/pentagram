import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer text-dark-secondary f-body-1 overflow-hidden bg-black relative z-1 mt-spacing-9"
      data-footer
    >
      <div className="footer__inner pb-24 mx-auto">
        <div className="container">
          <div className="footer-sections flex flex-col gap-y-48">
            <section
              className="footer-news keyline-t w-full pt-24 flex flex-wrap gap-y-32 f-body-1 text-inverse gap-x-gutter"
              data-behavior="lazyloadImg"
              data-hideshownews-el
            >
              <div className="w-12-cols md:w-6-cols">
                <h3>News</h3>
              </div>
              <div className="w-12-cols md:w-6-cols flex flex-col sm:flex-row sm:flex-wrap md:flex-col sm:gap-x-12 gap-y-24">
                <article className="news-item w-full relative border-primary sm:w-6-cols md:w-full">
                  <a
                    className="inset-0 absolute"
                    href="https://www.pentagram.com/work/yale-engineering"
                    target="_blank"
                    rel="noopenner noreferrer"
                  ></a>
                  <div className="flex flex-row gap-x-gutter">
                    <div className="shrink-0 w-2-cols-vw sm:w-2-cols-vw md:w-3-cols-vw lg:w-2-cols-vw">
                      <picture
                        className="aspect-1/1 block"
                        style={{
                          backgroundImage: `url('https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&amp;crop=entropy&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=1%2C0%2C4042%2C2695&amp;w=20&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
                        }}
                      >
                        <source
                          media="screen and (max-width: 599px)"
                          srcSet="https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=155&fit=crop&fm=jpg&q=70&auto=format&h=155, https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=155&fit=crop&q=70&fm=jpg&auto=format&h=155&dpr=2 2x"
                        />
                        <source
                          media="screen and (max-width: 799px)"
                          srcSet="https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=115&fit=crop&fm=jpg&q=70&auto=format&h=115, https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=115&fit=crop&q=70&fm=jpg&auto=format&h=115&dpr=2 2x"
                        />
                        <source
                          media="screen and (min-width: 800px) and (max-width:1039px)"
                          srcSet="https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=240&fit=crop&fm=jpg&q=70&auto=format&h=240, https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=240&fit=crop&q=70&fm=jpg&auto=format&h=240&dpr=2 2x"
                        />
                        <source
                          media="screen and (min-width: 1040px)"
                          srcSet="https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=300&fit=crop&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=300&fit=crop&q=70&fm=jpg&auto=format&h=300&dpr=2 2x"
                        />
                        <img
                          data-src="https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/22_yale_eng_poster_02.png?auto=compress%2Cformat&crop=entropy&fit=min&fm=jpg&q=80&rect=1%2C0%2C4042%2C2695&w=140&h=140&fit=crop&fm=jpg&q=70&auto=format"
                          alt="22 Yale Eng Poster 02"
                          className="aspect-1/1 w-full h-full md:object-cover"
                        />
                      </picture>
                    </div>
                    <div className="news-item-content flex flex-col sm:pr-12 lg:pr-24">
                      <div className="flex flex-row flex-wrap gap-12 items-center mb-12">
                        <a
                          className="relative z-1"
                          href="https://www.pentagram.com/news/category/work"
                        >
                          <span className="f-caption text-tertiary bg-secondary rounded-4 block px-8 py-4">
                            Work
                          </span>
                        </a>
                        <span className="f-caption text-secondary">
                          Aug 12, 2025
                        </span>
                      </div>
                      <div>
                        <h2 className="f-body-1 underline-bg-transparent underline-offset-2 underline-thickness-1">
                          Yale Engineering
                        </h2>
                        <p className="text-secondary f-body-1">
                          Eddie Opara and team design a new brand strategy and
                          visual identity framework that highlights a culture of
                          innovation, cooperation and collaboration across
                          disciplines.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="news-item w-full relative border-primary pt-24 sm:pt-0 md:pt-24 border-t sm:border-t-0 md:border-t sm:w-6-cols md:w-full">
                  <a
                    className="inset-0 absolute"
                    href="https://fastcompanyme.com/co-design/samar-maakaroun-believes-complexity-makes-design-more-human/"
                    target="_blank"
                    rel="noopenner noreferrer"
                  ></a>
                  <div className="flex flex-row gap-x-gutter">
                    <div className="shrink-0 w-2-cols-vw sm:w-2-cols-vw md:w-3-cols-vw lg:w-2-cols-vw">
                      <picture
                        className="aspect-1/1 block"
                        style={{
                          backgroundImage: `url('https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=272%2C0%2C649%2C649&amp;w=20&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
                        }}
                      >
                        <source
                          media="screen and (max-width: 599px)"
                          srcSet="https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=155&fit=crop&fm=jpg&q=70&auto=format&h=155, https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=155&fit=crop&q=70&fm=jpg&auto=format&h=155&dpr=2 2x"
                        />
                        <source
                          media="screen and (max-width: 799px)"
                          srcSet="https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=115&fit=crop&fm=jpg&q=70&auto=format&h=115, https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=115&fit=crop&q=70&fm=jpg&auto=format&h=115&dpr=2 2x"
                        />
                        <source
                          media="screen and (min-width: 800px) and (max-width:1039px)"
                          srcSet="https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=240&fit=crop&fm=jpg&q=70&auto=format&h=240, https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=240&fit=crop&q=70&fm=jpg&auto=format&h=240&dpr=2 2x"
                        />
                        <source
                          media="screen and (min-width: 1040px)"
                          srcSet="https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=300&fit=crop&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=300&fit=crop&q=70&fm=jpg&auto=format&h=300&dpr=2 2x"
                        />
                        <img
                          data-src="https://pentagram-production.imgix.net/635fa72c-ffdc-4e96-a0a6-0d26c96a85e5/Samar-Maakaroun-believes-complexity-makes-design-more-human.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=272%2C0%2C649%2C649&w=140&h=140&fit=crop&fm=jpg&q=70&auto=format"
                          alt="Samar Maakaroun Believes Complexity Makes Design More Human"
                          className="aspect-1/1 w-full h-full md:object-cover"
                        />
                      </picture>
                    </div>
                    <div className="news-item-content flex flex-col sm:pr-12 lg:pr-24">
                      <div className="flex flex-row flex-wrap gap-12 items-center mb-12">
                        <a
                          className="relative z-1"
                          href="https://www.pentagram.com/news/category/press"
                        >
                          <span className="f-caption text-tertiary bg-secondary rounded-4 block px-8 py-4">
                            Press
                          </span>
                        </a>
                        <span className="f-caption text-secondary">
                          Aug 11, 2025
                        </span>
                      </div>
                      <div>
                        <h2 className="f-body-1 underline-bg-transparent underline-offset-2 underline-thickness-1">
                          Samar Maakaroun Featured on FastCo Middle East
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="news-item w-full relative border-primary pt-24 border-t sm:w-6-cols md:w-full">
                  <a
                    className="inset-0 absolute"
                    href="https://www.eventbrite.co.uk/e/nicer-tuesdays-september-tickets-1555702621419?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopenner noreferrer"
                  ></a>
                  <div className="flex flex-row gap-x-gutter">
                    <div className="news-item-content flex flex-col justify-between sm:pr-12 lg:pr-24">
                      <div className="flex flex-row flex-wrap gap-12 items-center mb-12">
                        <a
                          className="relative z-1"
                          href="https://www.pentagram.com/news/category"
                        >
                          <span className="f-caption text-tertiary bg-secondary rounded-4 block px-8 py-4">
                            Event
                          </span>
                        </a>
                        <span className="f-caption text-secondary">
                          Sep 09, 2025
                        </span>
                      </div>
                      <div>
                        <h2 className="f-body-1 underline-bg-transparent underline-offset-2 underline-thickness-1">
                          Michael Bierut at Nicer Tuesdays NYC
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="news-item w-full relative border-primary pt-24 border-t sm:w-6-cols md:w-full">
                  <a
                    className="inset-0 absolute"
                    href="https://www.designthinkers.com/tor/"
                    target="_blank"
                    rel="noopenner noreferrer"
                  ></a>
                  <div className="flex flex-row gap-x-gutter">
                    <div className="news-item-content flex flex-col justify-between sm:pr-12 lg:pr-24">
                      <div className="flex flex-row flex-wrap gap-12 items-center mb-12">
                        <a
                          className="relative z-1"
                          href="https://www.pentagram.com/news/category"
                        >
                          <span className="f-caption text-tertiary bg-secondary rounded-4 block px-8 py-4">
                            Event
                          </span>
                        </a>
                        <span className="f-caption text-secondary">
                          Oct 01, 2025
                        </span>
                      </div>
                      <div>
                        <h2 className="f-body-1 underline-bg-transparent underline-offset-2 underline-thickness-1">
                          Samar Maakaroun at RGD DesignThinkers 2025
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <a
                href="/news"
                className="w-12-cols md:w-6-cols md:ml-6-cols link--primary"
              >
                See all news
              </a>
            </section>
            <section
              className="keyline-t w-full pt-24 flex flex-wrap gap-x-gutter gap-y-32 f-body-1 text-inverse"
              data-hideshowcontact-el
              data-behavior="hideShowFooterModules"
            >
              <div className="w-6-cols sm:w-12-cols md:w-6-cols">
                <h3>New Business Inquiries</h3>
              </div>
              <div className="w-6-cols sm:w-12-cols md:w-6-cols flex flex-col gap-y-4">
                <div className="w-full flex flex-wrap gap-x-gutter">
                  <span className="block w-2-cols"> London </span>
                  <div className="w-4-cols">
                    <a
                      className="link--primary"
                      href="mailto:london@pentagram.com"
                    >
                      london@pentagram.com
                    </a>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-x-gutter">
                  <span className="block w-2-cols"> New York </span>
                  <div className="w-4-cols">
                    <a
                      className="link--primary"
                      href="mailto:newyork@pentagram.com"
                    >
                      newyork@pentagram.com
                    </a>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-x-gutter">
                  <span className="block w-2-cols"> Austin </span>
                  <div className="w-4-cols">
                    <a
                      className="link--primary"
                      href="mailto:austin@pentagram.com"
                    >
                      austin@pentagram.com
                    </a>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-x-gutter">
                  <span className="block w-2-cols"> Berlin </span>
                  <div className="w-4-cols">
                    <a
                      className="link--primary"
                      href="mailto:info@pentagram.de"
                    >
                      info@pentagram.de
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="keyline-t w-full pt-24 flex flex-wrap gap-y-32 f-body-1 text-inverse gap-x-gutter"
              data-hideshowabout-el
              data-behavior="hideShowFooterModules"
            >
              <h3 className="w-6-cols">About</h3>
              <div className="w-6-cols sm:w-11-cols md:w-6-cols flex flex-col gap-y-12 lg:w-5-cols">
                <div className="content-pretty">
                  <p>
                    Pentagram is the world’s most acclaimed creative collective,
                    where 23 partners work independently and collaboratively to
                    shape the future of design. Guided by curiosity and
                    intellect, we create work that redefines ideas, shifts
                    perceptions, and leaves an imprint across disciplines and
                    industries.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <svg
            width="192"
            height="38"
            fill="none"
            className="mt-spacing-9 text-inverse w-full h-auto"
            name="logo"
            viewBox="0 0 192 38"
            aria-hidden="true"
          >
            <use xlinkHref="#logo"></use>
          </svg>
          <div className="mt-24 w-full flex flex-col gap-y-16 lg:flex-row lg:justify-between dark-footer-links">
            <div className="">
              <h3 id="footerNavHeading" className="sr-only">
                Footer navigation
              </h3>
              <ul
                aria-labelledby="footerNavHeading"
                className="flex flex-row flex-wrap gap-y-16 gap-x-24"
              >
                <li>
                  <a
                    href="https://www.instagram.com/pentagramdesign"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/pentagram"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/pentagram"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/pentagramdesign/"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="footer__toolsItem--newsletter">
                  <button
                    className="no-pjax text-left"
                    data-behavior="newsletterToggle"
                  >
                    Newsletter
                  </button>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row flex-wrap gap-x-24 gap-y-16">
              <a href="/privacypolicy" className="shrink-0 hover:text-primary">
                Privacy Policy
              </a>
              <span className="order-2 shrink-0 md:order-1">
                &copy; 1972 &ndash; 2025 Pentagram
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter bg-dark" data-newsletter>
        <div className="container">
          <form
            action="https://www.pentagram.com/newsletter"
            className="newsletter__form"
            data-behavior="newsletter"
          >
            {/* <input
              aria-label="email"
              type="email"
              className="newsletter__email f-heading-4 bg-dark text-inverse placeholder:text-dark-secondary"
              value=""
              name="email"
              placeholder="Add your email address"
              data-default-placeholder="Add your email address"
              data-small-placeholder="Email address"
              maxLength="50"
              required="required"
              autoComplete="off"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              data-behavior="searchPlaceholder"
            /> */}
            <button
              type="submit"
              className="btn newsletter__btn f-heading-4 text-inverse"
              data-default="Subscribe"
              data-loading="Sending..."
            >
              Subscribe
            </button>
            <span className="newsletter__success f-heading-4">
              <span className="newsletter__messageFull">
                Thank you. A confirmation email has been sent.
              </span>
              <span className="newsletter__messageSmall">Thank you.</span>
            </span>
            <span className="newsletter__info f-heading-4">
              <span className="newsletter__messageFull">
                You are already subscribed to our newsletter.
              </span>
              <span className="newsletter__messageSmall">
                Already subscribed.
              </span>
            </span>
            <span className="newsletter__error f-heading-4">
              <span className="newsletter__messageFull">
                An error occured. Please try again.
              </span>
              <span className="newsletter__messageSmall">
                Error. Please try again.
              </span>
            </span>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

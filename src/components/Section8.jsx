import React from "react";
import RetrospectiveSwiper2 from "./RetrospectiveSwiper2";

// Retrospective content data
const RETROSPECTIVE_CONTENT = {
  title: "Retrospective: London Design Festival",
  description:
    "London Design Festival has been an annual celebration of the power of creativity for over 20 years. Since 2008, Pentagram partner Domenic Lippa has served as the LDF's creative director, responsible every September for the design of a new visual identity. By inventively remixing a few key elements ' typography, a signature red ('the colour of London'), and LDF's simple monogram ' the program unifies hundreds of events while reaffirming London's status as a global design capital.",
  count: "(12)",
  modalId: "serializedModalFPJ8k2OQus",
};

// London Design Festival retrospective data
const LDF_RETROSPECTIVE_DATA = [
  {
    id: "london-design-festival-2024",
    year: "2024",
    url: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2024",
  },
  {
    id: "london-design-festival-2023",
    year: "2023",
    url: "https://www.pentagram.com/work/london-design-festival-2023?setSerializedKey=1&exclude-slug=london-design-festival-2023",
    imageUrl:
      "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2023",
  },
  {
    id: "london-design-festival-2022",
    year: "2022",
    url: "https://www.pentagram.com/work/london-design-festival-2022?setSerializedKey=1&exclude-slug=london-design-festival-2022",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2022",
  },
  {
    id: "london-design-festival-2021",
    year: "2021",
    url: "https://www.pentagram.com/work/london-design-festival-2021?setSerializedKey=1&exclude-slug=london-design-festival-2021",
    imageUrl:
      "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2021",
  },
  {
    id: "london-design-festival-2020",
    year: "2020",
    url: "https://www.pentagram.com/work/london-design-festival-2020?setSerializedKey=1&exclude-slug=london-design-festival-2020",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2020",
  },
  {
    id: "london-design-festival-2019",
    year: "2019",
    url: "https://www.pentagram.com/work/london-design-festival-2019?setSerializedKey=1&exclude-slug=london-design-festival-2019",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2019",
  },
  {
    id: "london-design-festival-2018",
    year: "2018",
    url: "https://www.pentagram.com/work/london-design-festival-2018?setSerializedKey=1&exclude-slug=london-design-festival-2018",
    imageUrl:
      "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870",
    backgroundImage:
      "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2018",
  },
  {
    id: "london-design-festival-2017",
    year: "2017",
    url: "https://www.pentagram.com/work/london-design-festival-2017?setSerializedKey=1&exclude-slug=london-design-festival-2017",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2017",
  },
  {
    id: "london-design-festival-2016",
    year: "2016",
    url: "https://www.pentagram.com/work/london-design-festival-2016?setSerializedKey=1&exclude-slug=london-design-festival-2016",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2016",
  },
  {
    id: "london-design-festival-2014",
    year: "2014",
    url: "https://www.pentagram.com/work/london-design-festival-2014?setSerializedKey=1&exclude-slug=london-design-festival-2014",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2014",
  },
  {
    id: "london-design-festival-2013",
    year: "2013",
    url: "https://www.pentagram.com/work/london-design-festival-2013?setSerializedKey=1&exclude-slug=london-design-festival-2013",
    imageUrl:
      "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2013",
  },
  {
    id: "london-design-festival-2012",
    year: "2012",
    url: "https://www.pentagram.com/work/london-design-festival-2012?setSerializedKey=1&exclude-slug=london-design-festival-2012",
    imageUrl:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
    backgroundImage:
      "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    imageAlt: "2012",
  },
];

// Quote data
const QUOTE_DATA = {
  text: "Design is not just about problem solving, it's about asking the right questions.",
  author: "Natasha Jen",
};

// Helper function to generate image sources
const generateImageSources = (baseUrl) => {
  const sources = [
    {
      media: "screen and (max-width: 599px)",
      srcSet: `${baseUrl}&w=360&fm=jpg&q=70&auto=format&h=224, ${baseUrl}&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x`,
    },
    {
      media: "screen and (max-width: 799px)",
      srcSet: `${baseUrl}&w=700&fm=jpg&q=70&auto=format&h=436, ${baseUrl}&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 800px) and (max-width:1039px)",
      srcSet: `${baseUrl}&w=944&fm=jpg&q=70&auto=format&h=588, ${baseUrl}&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 1040px)",
      srcSet: `${baseUrl}&w=1304&fm=jpg&q=70&auto=format&h=813, ${baseUrl}&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x`,
    },
  ];
  return sources;
};

// Retrospective Item Component
const RetrospectiveItem = ({ item }) => {
  const imageSources = generateImageSources(item.imageUrl);
  const mainImageSrc = `${item.imageUrl}&w=1500&fm=jpg&q=70&auto=format&h=935`;

  return (
    <li data-behavior="lazyloadImg" className="w-full">
      <a href={item.url}>
        <span className="text-tertiary-inverse bg-secondary rounded-4 block pb-4 f-caption w-fit mb-8">
          {item.year}
        </span>
        <div className="w-full flex max-h-200 md:max-h-[300px] lg:max-h-[420px]">
          <div className="w-auto max-h-200 md:max-h-[300px] lg:max-h-[420px]">
            <picture
              className="relative w-auto z-5 bg-cover [&_img]:transition-all [&_img]:duration-300"
              style={{
                backgroundImage: `url('${item.backgroundImage}')`,
              }}
            >
              {imageSources.map((source, index) => (
                <source
                  key={index}
                  media={source.media}
                  srcSet={source.srcSet}
                />
              ))}
              <img
                src={mainImageSrc}
                alt={item.imageAlt}
                className="transition-opacity duration-300 object-cover h-full"
              />
            </picture>
          </div>
        </div>
      </a>
    </li>
  );
};

const Section8 = () => {
  return (
    <>
      <div
        className="block--dark serialized mt-spacing-9 overflow-hidden bg-dark pt-32 md:pt-48 pb-48 breakout"
        data-behavior="tracking"
      >
        <div className="container">
          <div className="flex flex-wrap gap-gutter relative">
            <div className="w-12-cols md:pr-12 lg:pr-32 xl:pr-64">
              <div className="w-10-cols md:w-8-cols">
                <h3 className="f-heading-1 text-inverse content-balance">
                  {RETROSPECTIVE_CONTENT.title}
                </h3>
              </div>
              <div className="w-12-cols sm:w-10-cols md:w-8-cols lg:w-6-cols text-tertiary-inverse f-body-1 pt-16 md:pt-24">
                {RETROSPECTIVE_CONTENT.description}
              </div>
            </div>

            <span className="block absolute f-body-1 top-0 right-0 mt-4 md:mt-0 text-inverse">
              {RETROSPECTIVE_CONTENT.count}
            </span>
          </div>
        </div>

        <RetrospectiveSwiper2 />

        <div className="mt-24 lg:mt-48 flex flex-row justify-center container">
          <button
            type="button"
            className="btn--secondary !bg-[#ffffff1f] !text-inverse hover:!bg-button-secondary-hover btn--icon"
            data-modal-target={`#${RETROSPECTIVE_CONTENT.modalId}`}
            data-tracking-element
            data-tracking-event="serialized_show_more"
            data-tracking-event-category="Serialized Show More"
            data-tracking-event-label={RETROSPECTIVE_CONTENT.title}
          >
            <span>Show more</span>
            <svg
              width="20"
              height="20"
              fill="none"
              className="ml-8"
              name="plus-20"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <use xlinkHref="#plus-20"></use>
            </svg>
          </button>
        </div>

        <div
          data-behavior="modal"
          id={RETROSPECTIVE_CONTENT.modalId}
          className="generic-modal py-24 overflow-scroll bg-inverse"
        >
          <div className="container bg-dark-tertiary rounded-8 pb-spacing-9 px-outer-gutter pt-48 sm:pt-24 relative">
            <div className="flex flex-wrap gap-x-gutter relative">
              <div className="w-12-cols md:pr-12 lg:pr-32 xl:pr-64">
                <div className="w-10-cols md:w-8-cols">
                  <h3 className="f-heading-1 text-inverse content-balance">
                    {RETROSPECTIVE_CONTENT.title}
                  </h3>
                </div>
                <div className="w-12-cols sm:w-10-cols md:w-8-cols lg:w-6-cols text-tertiary-inverse f-body-1 pt-16 md:pt-24">
                  {RETROSPECTIVE_CONTENT.description}
                </div>
              </div>

              <ul className="mt-spacing-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-gutter gap-y-spacing-9 justify-items-start w-full">
                {LDF_RETROSPECTIVE_DATA.map((item) => (
                  <RetrospectiveItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
            <div className="absolute z-10 inset-y-12 right-12 md:inset-y-16 md:right-16 lg:inset-y-24 lg:right-28 xl:right-32">
              <button
                type="button"
                className="btn sticky -top-8 w-34 h-34 flex justify-center items-center"
                data-modal-close
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className="text-inverse"
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

      <div className="block--dark pt-spacing-9 quote breakout">
        <div className="quote__inner pt-spacing-7 keyline-t before:border-t-primary-inverse bg-dark">
          <div className="container">
            <blockquote className="flex flex-col sm:justify-between">
              <div className="f-heading-4 sm:w-8-cols sm:ml-4-cols lg:pr-24 xl:pr-64">
                <p className="relative workQuote__text text-inverse content-pretty">
                  {QUOTE_DATA.text}
                </p>
                <cite className="mt-16 block pr-12 sm:mt-0 xl:pr-64">
                  <span className="f-body-1 text-inverse">
                    {" "}
                    {QUOTE_DATA.author}{" "}
                  </span>
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;

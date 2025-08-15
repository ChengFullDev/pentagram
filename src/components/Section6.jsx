import React from "react";
import { useRef, useState } from "react";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

// Thematic content data
const THEMATIC_CONTENT = [
  {
    id: 0,
    title: "London Calling",
    description:
      "Pentagram has been an essential part of the London design scene for over half a century. Its founding partners came of age in postwar Britain, and the original formation of their design studio was very much a product of the vibrant 1960s. Today, evidence of Pentagram's influence can be found all over London - in logos, brand identities, signage systems and campaigns - a reflection of the symbiotic relationship that informs so many creative enterprises in this most inspiring of cities.",
  },
  {
    id: 1,
    title: "Here is New York",
    description:
      "Pentagram opened its New York office at an auspicious moment, just as the city was emerging from its 1970s nadir and commencing a renaissance that in many ways has never ended. Working with a wide range of clients over the last five decades ' corporate, cultural, civic and commercial ' Pentagram has decisively shaped New York City's visual brand and enthusiastically participated in the city's continuous redefinition as an irresistible urban magnet.",
  },
];

// Project data constants
const PROJECTS_DATA = [
  [
    {
      id: "the-savoy",
      title: "The Savoy",
      description:
        "Identity, website and packaging for a world-famous luxury hotel.",
      url: "https://www.pentagram.com/work/the-savoy?setKey=6&exclude-slug=the-savoy",
      imageUrl:
        "https://pentagram-production.imgix.net/ac5bfa5a-6b61-4560-b395-a544a8cc3b6e/savoy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5669%2C7937",
      imageAlt: "Savoy",
      trackingLabel: "The Savoy",
    },
    {
      id: "university-of-the-arts-london",
      title: "University of the Arts London",
      description:
        "New identity for Europe's leading arts and design university.",
      url: "https://www.pentagram.com/work/university-of-the-arts-london?setKey=6&exclude-slug=university-of-the-arts-london",
      imageUrl:
        "https://pentagram-production.imgix.net/1c6f356b-bfe4-49a4-a068-e8690c0f1f4a/UAL_Module.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C",
      imageAlt: "Ual Module",
      trackingLabel: "University of the Arts London",
    },
    {
      id: "london-fashion-week-aw19",
      title: "London Fashion Week (AW19)",
      description:
        "Identity, campaign and graphics system for the British Fashion Council.",
      url: "https://www.pentagram.com/work/london-fashion-week-aw19?setKey=6&exclude-slug=london-fashion-week-aw19",
      imageUrl:
        "https://pentagram-production.imgix.net/a77c0aab-bd7c-43e8-9cd5-e32690469e92/LDF_Module.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C2800",
      imageAlt: "Ldf Module",
      trackingLabel: "London Fashion Week (AW19)",
    },
    {
      id: "the-royal-botanical-gardens-kew",
      title: "The Royal Botanical Gardens, Kew",
      description:
        "Identity for the largest collection of living plants in the world.",
      url: "https://www.pentagram.com/work/the-royal-botanical-gardens-kew?setKey=6&exclude-slug=the-royal-botanical-gardens-kew",
      imageUrl:
        "https://pentagram-production.imgix.net/f8cddbd5-824c-421f-8812-7aedebc690cc/kewoption.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C2800",
      imageAlt: "Kew Option",
      trackingLabel: "The Royal Botanical Gardens, Kew",
    },
  ],
  [
    {
      id: "saturday-night-live-season-50",
      title: "Saturday Night Live Season 50",
      description:
        "A new identity and opening title sequence celebrate a landmark season for the legendary sketch comedy show.",
      url: "https://www.pentagram.com/work/saturday-night-live-season-50?setKey=5&exclude-slug=saturday-night-live-season-50",
      imageUrl:
        "https://pentagram-production.imgix.net/cd4e9dbf-4a18-4d57-9c82-f6bc4d406017/SNL50_Vert.gif?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1644%2C2304",
      imageAlt: "SNL50 Vert",
      trackingLabel: "Saturday Night Live Season 50",
      isVideo: true,
    },
    {
      id: "cooper-hewitt-smithsonian-design-museum-1",
      title: "Cooper Hewitt Smithsonian Design Museum",
      description:
        "Identity, website, and wayfinding design for the expanded New York institution.",
      url: "https://www.pentagram.com/work/cooper-hewitt-smithsonian-design-museum-1?setKey=5&exclude-slug=cooper-hewitt-smithsonian-design-museum-1",
      imageUrl:
        "https://pentagram-production.imgix.net/7b0b665c-e85f-41b3-a6ba-a1ca6b07bfd9/CH1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C2800",
      imageAlt: "Ch1",
      trackingLabel: "Cooper Hewitt Smithsonian Design Museum",
    },
    {
      id: "nyc-parks-1",
      title: "NYC Parks",
      description:
        "Identity and signage program for one of the world's largest urban park systems.",
      url: "https://www.pentagram.com/work/nyc-parks-1?setKey=5&exclude-slug=nyc-parks-1",
      imageUrl:
        "https://pentagram-production.imgix.net/d92a1ce4-a2a2-4052-b0bf-0cb34637de8b/NYPARKS1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C2800",
      imageAlt: "Nyparks1",
      trackingLabel: "NYC Parks",
    },
    {
      id: "the-high-line",
      title: "The High Line",
      description:
        "Identity, wayfinding, and promotional materials for the elevated railway turned park in Manhattan.",
      url: "https://www.pentagram.com/work/the-high-line?setKey=5&exclude-slug=the-high-line",
      imageUrl:
        "https://pentagram-production.imgix.net/85d50796-da25-4187-90dd-735cd7c6daaa/highline.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C2800",
      imageAlt: "Highline",
      trackingLabel: "The High Line",
    },
  ],
];

// Helper function to generate image sources
const generateImageSources = (baseUrl) => {
  const sources = [
    {
      media: "screen and (max-width: 599px)",
      srcSet: `${baseUrl}&w=360&fm=jpg&q=70&auto=format&h=504, ${baseUrl}&w=360&q=70&fm=jpg&auto=format&h=504&dpr=2 2x`,
    },
    {
      media: "screen and (max-width: 799px)",
      srcSet: `${baseUrl}&w=700&fm=jpg&q=70&auto=format&h=980, ${baseUrl}&w=700&q=70&fm=jpg&auto=format&h=980&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 800px) and (max-width:1039px)",
      srcSet: `${baseUrl}&w=944&fm=jpg&q=70&auto=format&h=1322, ${baseUrl}&w=944&q=70&fm=jpg&auto=format&h=1322&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 1040px)",
      srcSet: `${baseUrl}&w=1304&fm=jpg&q=70&auto=format&h=1826, ${baseUrl}&w=1304&q=70&fm=jpg&auto=format&h=1826&dpr=2 2x`,
    },
  ];
  return sources;
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const imageSources = generateImageSources(project.imageUrl);
  const backgroundImage = `${project.imageUrl}&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=23`;
  const mainImageSrc = `${project.imageUrl}&w=1500&fm=jpg&q=70&auto=format&h=2100`;

  return (
    <div
      className="group w-3-col-adjusted sm:w-4-col-adjusted lg:w-auto flex-1"
      data-carouselthematic-item={project.id}
    >
      <a
        href={project.url}
        data-tracking-element
        data-tracking-event="thematic_group_click"
        data-tracking-event-category="Thematic Group Item Click"
        data-tracking-event-label={project.trackingLabel}
      >
        <picture
          className="block relative z-5 bg-cover [&_img]:transition-all [&_img]:duration-30 aspect-[5/7]"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          data-flickity-lazyload
        >
          {project.isVideo ? (
            <video
              playsInline
              autoPlay
              loop
              muted
              className="transition-opacity duration-300 object-cover w-full h-full"
            >
              <source
                src={`${project.imageUrl}&w=1200&fm=mp4&h=1680&q=70&auto=format`}
                type="video/mp4"
              />
            </video>
          ) : (
            <>
              {imageSources.map((source, index) => (
                <source
                  key={index}
                  media={source.media}
                  srcSet={source.srcSet}
                />
              ))}
              <img
                src={mainImageSrc}
                alt={project.imageAlt}
                className="transition-opacity duration-300 object-cover w-full h-full"
              />
            </>
          )}
        </picture>
        <h4 className="f-body-1 text-inverse mt-8 underline-bg-transparent underline-offset-2 underline-thickness-1 group-hover:underline-text-inverse">
          {project.title}
        </h4>
        <span className="f-body-2 text-dark-secondary thematic__item--text pt-4 lg:pt-0">
          {project.description}
        </span>
      </a>
    </div>
  );
};

const Section6 = () => {
  const flickityRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    if (flickityRef.current) {
      flickityRef.current.select(index);
    }
  };

  const options = {
    wrapAround: false,
    freeScroll: true,
    dragThreshold: 10,
    percentPosition: 0,
    prevNextButtons: false,
    pageDots: false,
    cellAlign: "left",
    contain: true,
    adaptiveHeight: false,
    draggable: true,
    friction: 0.28,
    selectedAttraction: 0.025,
  };

  const currentThematic = THEMATIC_CONTENT[activeIndex];
  const currentProjects = PROJECTS_DATA[activeIndex];

  return (
    <>
      <div className="block--dark thematic bg-dark pb-48 md:pb-64 pt-32 md:pt-48 relative mt-spacing-9 overflow-hidden breakout">
        <div className="container relative">
          <div className="relative flex flex-wrap gap-gutter">
            <div className="w-12-cols-vw lg:pr-32 xl:pr-64">
              <h3 className="f-heading-1 text-inverse content-balance w-10-cols md:w-8-cols">
                {currentThematic.title}
              </h3>
              <div className="text-tertiary-inverse f-body-1 pt-16 lg:pt-24 sm:w-10-cols md:w-8-cols lg:w-6-cols">
                {currentThematic.description}
              </div>
            </div>
          </div>

          <span className="absolute f-body-1 top-0 right-0 flex flex-row items-center gap-8">
            <span className="text-inverse block px-8 py-4 w-fit h-fit no-wrap f-body-1">
              (<span className="hidden md:inline">Set </span>
              <span id="thematicIndex">{activeIndex + 1}</span>/2)
            </span>
            <div className="hidden md:flex gap-8">
              <button
                type="button"
                className="thematic__btn"
                aria-label="Previous"
                onClick={() => goToSlide(0)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className=""
                  name="arrow_prev-20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <use xlinkHref="#arrow_prev-20"></use>
                </svg>
              </button>

              <button
                type="button"
                className="thematic__btn"
                aria-label="Next"
                onClick={() => goToSlide(1)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className=""
                  name="arrow_next-20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <use xlinkHref="#arrow_next-20"></use>
                </svg>
              </button>
            </div>
          </span>
        </div>

        <div
          className="mt-32 md:mt-48 lg:mt-64 container !w-full !max-w-full !mx-0"
          data-behavior="lazyloadImg"
        >
          <div className="h-fit">
            <div className="h-auto">
              <Flickity
                options={options}
                flickityRef={(ref) => {
                  if (ref && !flickityRef.current) {
                    flickityRef.current = ref;
                    ref.on("change", (index) => {
                      setActiveIndex(index);
                    });
                  }
                }}
              >
                {PROJECTS_DATA.map((slideProjects, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="carousel-cell flex items-center justify-center mr-4"
                  >
                    <div className="bg-inverse p-outer-gutter rounded-8 flex flex-row gap-gutter w-auto">
                      {slideProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ))}
              </Flickity>
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
                  In a single day, a designer can talk about real estate with
                  one client, cancer cures with another, and forklift trucks
                  with a third.
                </p>
                <cite className="mt-16 block pr-12 sm:mt-0 xl:pr-64">
                  <span className="f-body-1 text-inverse">Michael Bierut</span>
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;

import React from "react";
import { useRef, useState } from "react";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

// Thematic content data
const THEMATIC_CONTENT = [
  {
    id: 0,
    title: "Past as Prologue",
    description:
      "Dramatic change doesn't always mean throwing everything out. In fact, a company's heritage can provide the best foundation for imagining the future. Looking deep into the past, we uncover important clues about what makes each brand special. But the goal is never timid, incremental compromise. Instead, it's a confident and energetic consolidation of an organization's fundamental - and absolutely unique - personality.",
  },
  {
    id: 1,
    title: "Type has Spirit",
    description:
      "As Pentagram partner Paula Scher said, \"Words have meaning. Type has spirit.\" Even for those who know nothing about fonts, the design of typography shapes the way we receive a message no less than an actor's performance shapes a script. Digital technology has made it possible - and even cost effective - to create a custom typeface, proprietary to an organization or even to one project. This ensures that whatever you say, you speak in a language that's all your own.",
  },
];

// Project data constants
const PROJECTS_DATA = [
  [
    {
      id: "westinghouse",
      title: "Westinghouse",
      description:
        "A brand refresh for the American corporation extends Paul Rand's iconic logo into a contemporary identity system, complete with custom typeface.",
      url: "https://www.pentagram.com/work/westinghouse?setKey=3&exclude-slug=westinghouse",
      imageUrl:
        "https://pentagram-production.imgix.net/353d18f6-efeb-4dbb-8adf-7d2574364357/Westinghouse_module.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=7%2C13%2C1993%2C2787",
      imageAlt: "Westinghouse Module",
      trackingLabel: "Westinghouse",
    },
    {
      id: "mastercard",
      title: "Mastercard",
      description:
        "Brand identity to emphasize simplicity, connectivity and seamlessness.",
      url: "https://www.pentagram.com/work/mastercard?setKey=3&exclude-slug=mastercard",
      imageUrl:
        "https://pentagram-production.imgix.net/3c68cc0c-0ba4-49cc-bc66-bfcccbb64077/Mastercard_Module_Animation.gif?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1644%2C2304",
      imageAlt: "Mastercard Module Animation",
      trackingLabel: "Mastercard",
      isVideo: true,
    },
    {
      id: "liberty",
      title: "Liberty",
      description: "A new brand identity for the iconic London store.",
      url: "https://www.pentagram.com/work/liberty?setKey=3&exclude-slug=liberty",
      imageUrl:
        "https://pentagram-production.imgix.net/aa96842f-1289-4030-914a-d823d22330e2/Liberty_Prologue_Tile.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4000%2C5600",
      imageAlt: "Liberty Prologue Tile",
      trackingLabel: "Liberty",
    },
    {
      id: "berry-bros-rudd",
      title: "Berry Bros. & Rudd",
      description:
        "Identity and collateral for Britain's oldest wine merchants.",
      url: "https://www.pentagram.com/work/berry-bros-rudd?setKey=3&exclude-slug=berry-bros-rudd",
      imageUrl:
        "https://pentagram-production.imgix.net/bbeaf665-afd8-4335-9481-3ed05ebb8293/HP_BerryBros_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2023%2C2832",
      imageAlt: "Hp Berrybros 01",
      trackingLabel: "Berry Bros. & Rudd",
    },
  ],
  [
    {
      id: "international-center-of-photography-icp",
      title: "International Center of Photography / ICP",
      description:
        "Brand identity for the world's leading institution dedicated to photography and visual culture.",
      url: "https://www.pentagram.com/work/international-center-of-photography-icp?setKey=4&exclude-slug=international-center-of-photography-icp",
      imageUrl:
        "https://pentagram-production.imgix.net/5aabc035-8c3f-4b11-9fe4-410d04bbf03f/ICP_Module.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C2800",
      imageAlt: "Icp Module",
      trackingLabel: "International Center of Photography / ICP",
    },
    {
      id: "sharjah-city-brand",
      title: "Sharjah City Brand",
      description:
        "Strategy, positioning and brand identity for Sharjah, one of the seven United Arab Emirates.",
      url: "https://www.pentagram.com/work/sharjah-city-brand?setKey=4&exclude-slug=sharjah-city-brand",
      imageUrl:
        "https://pentagram-production.imgix.net/e87c1bf9-e2d2-4e3c-ba37-3fb0992f6ca9/sm_sharjah_24a.gif?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=40%2C12%2C702%2C986",
      imageAlt: "Sm Sharjah 24a",
      trackingLabel: "Sharjah City Brand",
      isVideo: true,
    },
    {
      id: "killing-eve",
      title: "'Killing Eve'",
      description:
        "Identity, titles and type design for the British-made drama television series.",
      url: "https://www.pentagram.com/work/killing-eve?setKey=4&exclude-slug=killing-eve",
      imageUrl:
        "https://pentagram-production.imgix.net/40bc7fab-6a29-4c3e-9d49-968be034faed/killngeve.gif?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1642%2C2300",
      imageAlt: "Killngeve",
      trackingLabel: "'Killing Eve'",
      isVideo: true,
    },
    {
      id: "wonka",
      title: "'Wonka'",
      description:
        "Logo design and custom typeface for the musical fantasy film about the origins of aspiring magician, inventor and chocolatier Willy Wonka.",
      url: "https://www.pentagram.com/work/wonka?setKey=4&exclude-slug=wonka",
      imageUrl:
        "https://pentagram-production.imgix.net/148a16d7-ce1b-45f7-913f-32d9bd4fb55d/WONKA_Vertical.gif?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1000%2C1397",
      imageAlt: "Wonka Vertical",
      trackingLabel: "'Wonka'",
      isVideo: true,
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

const Section2 = () => {
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
          <div className="relative gap-gutter">
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
                    className="pl-outer-gutter w-fit md:w-11-cols-vw !ml-0 mr-4"
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
                  No one project is the same, no one institution works like
                  another. It's always a fresh journey of discovery, to find the
                  truest form of expression.
                </p>
                <cite className="mt-16 block pr-12 sm:mt-0 xl:pr-64">
                  <span className="f-body-1 text-inverse"> Harry Pearce </span>
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

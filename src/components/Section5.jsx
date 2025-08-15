import React from "react";
import RetrospectiveSwiper1 from "./RetrospectiveSwiper1";

// Section header data
const SECTION_HEADER = {
  count: "8 latest",
  filterButton: "Data Driven Experiences",
  filterType: "discipline",
  filterValue: "data-driven-experiences",
  projects: "projects",
};

// Data-driven experiences projects data
const DATA_DRIVEN_PROJECTS = [
  {
    id: "gates-foundation-25th-anniversary",
    title: "Gates Foundation 25th Anniversary",
    description:
      "An interactive storytelling experience and timeline illustrate the charitable foundation's impact on global health since 2000.",
    url: "https://www.pentagram.com/work/gates-foundation-25th-anniversary",
    imageUrl:
      "https://pentagram-production.imgix.net/5c946dc9-846a-44ec-bee1-fc213e6f09b2/THUMBNAIL3_2.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7681%2C5121",
    imageAlt: "Thumbnail 3 2",
    backgroundImage:
      "https://pentagram-production.imgix.net/5c946dc9-846a-44ec-bee1-fc213e6f09b2/THUMBNAIL3_2.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7681%2C5121&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Non-profits",
    categoryUrl: "https://www.pentagram.com/non-profits",
    width: "w-12-cols md:w-4-cols",
  },
  {
    id: "polybio-research-foundation",
    title: "PolyBio Research Foundation",
    description:
      "An interactive digital platform for the leading disease research organization.",
    url: "https://www.pentagram.com/work/polybio-research-foundation",
    imageUrl:
      "https://pentagram-production.imgix.net/6a7a1bdc-77c0-408a-8286-094c523f758e/Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C5%2C3000%2C1875",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/6a7a1bdc-77c0-408a-8286-094c523f758e/Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C5%2C3000%2C1875&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Health",
    categoryUrl: "https://www.pentagram.com/health",
    width: "w-12-cols md:w-8-cols",
  },
  {
    id: "wellesley-renewing-democracy-summit",
    title: "Wellesley Renewing Democracy Summit",
    description:
      "Personalized data visualizations prompted reflection and conversation for future leaders",
    url: "https://www.pentagram.com/work/wellesley-renewing-democracy-summit",
    imageUrl:
      "https://pentagram-production.imgix.net/7395d664-720a-4d13-bded-a5ce583156e7/Wellesley-Cover-3000x2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C62%2C3000%2C1875",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/7395d664-720a-4d13-bded-a5ce583156e7/Wellesley-Cover-3000x2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C62%2C3000%2C1875&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Education",
    categoryUrl: "https://www.pentagram.com/education",
    width: "w-6-cols sm:w-12-cols md:w-4-cols",
  },
  {
    id: "fifty-years-of-dia",
    title: "'Fifty Years of Dia'",
    description:
      "An interactive timeline and campaign celebrates Dia Art Foundation's 50th birthday",
    url: "https://www.pentagram.com/work/fifty-years-of-dia",
    imageUrl:
      "https://pentagram-production.imgix.net/cfe95032-f9ff-4455-bce2-ab364298284d/Dia50_CoverImgae.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=240%2C0%2C2533%2C1688",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/cfe95032-f9ff-4455-bce2-ab364298284d/Dia50_CoverImgae.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=240%2C0%2C2533%2C1688&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "dear-g20-leaders",
    title: "'Dear G20 Leaders'",
    description: "A new campaign calling for global financial reform.",
    url: "https://www.pentagram.com/work/dear-g20-leaders",
    imageUrl:
      "https://pentagram-production.imgix.net/27fc5281-a567-4197-9deb-afb791e00d12/00_OpenerMotioncopy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=96%2C0%2C1728%2C1080",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/27fc5281-a567-4197-9deb-afb791e00d12/00_OpenerMotioncopy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=96%2C0%2C1728%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Non-profits",
    categoryUrl: "https://www.pentagram.com/non-profits",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "remission-biome",
    title: "Remission Biome",
    description:
      "Brand identity for the radical new patient-centered healthcare organization.",
    url: "https://www.pentagram.com/work/remission-biome",
    imageUrl:
      "https://pentagram-production.imgix.net/fdc2ed6e-0fca-4a33-8d94-48b2f996868c/RB_CaseStudyAssets_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=179%2C0%2C3077%2C1924",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/fdc2ed6e-0fca-4a33-8d94-48b2f996868c/RB_CaseStudyAssets_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=179%2C0%2C3077%2C1924&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Health",
    categoryUrl: "https://www.pentagram.com/health",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "1374-days-long-covid",
    title: "'1,374 Days: My Life With Long Covid'",
    description:
      "A data storytelling experience for The New York Times about a life-altering disease.",
    url: "https://www.pentagram.com/work/1-374-days-my-life-with-long-covid",
    imageUrl:
      "https://pentagram-production.imgix.net/172a470d-e2f9-412b-9457-25ca6a65ad33/1copy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=181%2C0%2C3094%2C1934",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/172a470d-e2f9-412b-9457-25ca6a65ad33/1copy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=181%2C0%2C3094%2C1934&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Health",
    categoryUrl: "https://www.pentagram.com/health",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "well-woven",
    title: "Well Woven",
    description:
      "Data visualization-based rug design for the innovative rug manufacturer",
    url: "https://www.pentagram.com/work/well-woven",
    imageUrl:
      "https://pentagram-production.imgix.net/1ef0404f-afac-432e-8898-68a83dd39a2d/FORWEBSITE2gl_wellwoven_rug_2023_066.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=241%2C0%2C3597%2C2249",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/1ef0404f-afac-432e-8898-68a83dd39a2d/FORWEBSITE2gl_wellwoven_rug_2023_066.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=241%2C0%2C3597%2C2249&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols",
  },
];

// Helper function to generate image sources
const generateImageSources = (baseUrl) => {
  const sources = [
    {
      media: "screen and (max-width: 599px)",
      srcSet: `${baseUrl}&w=360&fm=jpg&q=70&auto=format&h=240, ${baseUrl}&w=360&q=70&fm=jpg&auto=format&h=240&dpr=2 2x`,
    },
    {
      media: "screen and (max-width: 799px)",
      srcSet: `${baseUrl}&w=700&fm=jpg&q=70&auto=format&h=467, ${baseUrl}&w=700&q=70&fm=jpg&auto=format&h=467&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 800px) and (max-width:1039px)",
      srcSet: `${baseUrl}&w=944&fm=jpg&q=70&auto=format&h=629, ${baseUrl}&w=944&q=70&fm=jpg&auto=format&h=629&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 1040px)",
      srcSet: `${baseUrl}&w=1304&fm=jpg&q=70&auto=format&h=869, ${baseUrl}&w=1304&q=70&fm=jpg&auto=format&h=869&dpr=2 2x`,
    },
  ];
  return sources;
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const imageSources = generateImageSources(project.imageUrl);
  const mainImageSrc = `${project.imageUrl}&w=1500&fm=jpg&q=70&auto=format&h=1000`;

  return (
    <li className={project.width}>
      <div
        className="group block relative overflow-hidden"
        data-behavior="projectCard"
      >
        <a href={project.url} aria-label="view work">
          <picture
            className="block relative z-5 bg-cover [&_img]:transition-all [&_img]:duration-300 aspect-[3/2]"
            style={{
              backgroundImage: `url('${project.backgroundImage}')`,
            }}
          >
            {imageSources.map((source, index) => (
              <source key={index} media={source.media} srcSet={source.srcSet} />
            ))}
            <img
              src={mainImageSrc}
              alt={project.imageAlt}
              className="transition-opacity duration-300 object-cover w-full h-full"
            />
          </picture>
        </a>
        <a
          href={project.url}
          className="block pt-8 bg-primary relative z-1 sm:w-11-cols md:w-full md:pr-12 lg:pr-24"
        >
          <h3 className="f-body-1 text-primary">{project.title}</h3>
          <p className="f-body-1 text-secondary">{project.description}</p>
        </a>
        <div className="[@media(hover:hover)]:translate-y-[var(--h)] [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-focus:translate-y-0 opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-[400ms]">
          <div className="hidden [@media(hover:hover)]:flex flex-row flex-wrap f-caption gap-8 pt-8">
            <a href={project.categoryUrl}>
              <span className="text-tertiary bg-secondary rounded-4 block px-8 py-4 hover:bg-button-secondary-hover">
                {project.category}
              </span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

const Section5 = () => {
  return (
    <div className="dynamic-work-block">
      <div className="project-count container mt-spacing-8">
        <h2 className="text-center text-secondary">
          <span className="f-body-1">{SECTION_HEADER.count} </span>
          <button
            className="py-9 lg:py-6 leading-[0] px-8 rounded-4 text-center text-inverse bg-secondary hover:bg-chip-hover disabled:opacity-30 active:bg-inverse active:text-inverse homeFilters__chip mx-8"
            data-filter-btn={SECTION_HEADER.filterValue}
            data-filter-btn-type={SECTION_HEADER.filterType}
          >
            <span className="f-body-1 leading-none">
              {SECTION_HEADER.filterButton}
            </span>
          </button>
          <span className="f-body-1"> {SECTION_HEADER.projects}</span>
        </h2>
        <svg
          width="20"
          height="20"
          fill="none"
          className="block mx-auto mt-8 text-secondary"
          name="arrow_down_work"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <use xlinkHref="#arrow_down_work"></use>
        </svg>
      </div>
      <ul
        aria-labelledby="homeItemsHeading"
        className="container flex mt-spacing-7 gap-y-spacing-9 gap-x-gutter flex-wrap"
        data-behavior="lazyloadImg loadVimeoPlayers"
      >
        <li className="md:col-span-6">
          <ul
            className="mt-space-9 flex gap-48 md:gap-gutter flex-wrap"
            data-behavior="lazyloadImg"
          >
            {DATA_DRIVEN_PROJECTS.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
        <li className="md:col-span-4">
          <ul
            className="mt-space-9 flex gap-y-48 gap-x-gutter flex-wrap"
            data-behavior="lazyloadImg"
          >
            {DATA_DRIVEN_PROJECTS.slice(2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Section5;

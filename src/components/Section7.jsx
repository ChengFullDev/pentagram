import React from "react";

// Section header data
const SECTION_HEADER = {
  count: "8 latest",
  filterButton: "Motion Graphics & Film",
  filterType: "discipline",
  filterValue: "motion-graphics-film",
  projects: "projects",
};

// Motion Graphics & Film projects data
const MOTION_GRAPHICS_PROJECTS = [
  {
    id: "the-four-seasons",
    title: "'The Four Seasons'",
    description:
      "Identity and opening title sequence for the Netflix comedy drama series co-written by and starring Tina Fey.",
    url: "https://www.pentagram.com/work/the-four-seasons",
    imageUrl:
      "https://pentagram-production.imgix.net/48f85f1a-995a-4345-8882-bf534657fac1/01_TFS_Logo.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=387%2C0%2C3321%2C2214",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/48f85f1a-995a-4345-8882-bf534657fac1/01_TFS_Logo.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=387%2C0%2C3321%2C2214&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Entertainment",
    categoryUrl: "https://www.pentagram.com/entertainment",
    width: "w-12-cols md:w-8-cols",
  },
  {
    id: "america-s-sweethearts",
    title: "'America's Sweethearts'",
    description:
      "Identity and title sequences for the Netflix docuseries about the Dallas Cowboys Cheerleaders.",
    url: "https://www.pentagram.com/work/america-s-sweethearts",
    imageUrl:
      "https://pentagram-production.imgix.net/ce49c7d8-6fc7-47c6-ba2c-ca28bdf59647/01_ASDCC_MainTitle_THUMBNAIL.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=300%2C0%2C3240%2C2160",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce49c7d8-6fc7-47c6-ba2c-ca28bdf59647/01_ASDCC_MainTitle_THUMBNAIL.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=300%2C0%2C3240%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Entertainment",
    categoryUrl: "https://www.pentagram.com/entertainment",
    width: "w-12-cols md:w-4-cols",
  },
  {
    id: "twelvelabs",
    title: "TwelveLabs",
    description:
      "Visual identity and website for a pioneering company that helps machines understand video like people do.",
    url: "https://www.pentagram.com/work/twelvelabs",
    imageUrl:
      "https://pentagram-production.imgix.net/e71db5d7-fcd0-462d-bf6a-c3c9c1bb5c11/01_TL_Logo_Gradient_16x9_STILL.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=407%2C0%2C3242%2C2160",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/e71db5d7-fcd0-462d-bf6a-c3c9c1bb5c11/01_TL_Logo_Gradient_16x9_STILL.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=407%2C0%2C3242%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Technology",
    categoryUrl: "https://www.pentagram.com/technology",
    width: "w-6-cols sm:w-12-cols md:w-4-cols",
  },
  {
    id: "saturday-night-live-season-50",
    title: "Saturday Night Live Season 50",
    description:
      "A new identity and opening title sequence celebrate a landmark season for the legendary sketch comedy show",
    url: "https://www.pentagram.com/work/saturday-night-live-season-50",
    imageUrl:
      "https://pentagram-production.imgix.net/c67c4e8f-10c8-48fd-89d8-a3c16ecfae35/snl50_Thumb_.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=191%2C0%2C3458%2C2160",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/c67c4e8f-10c8-48fd-89d8-a3c16ecfae35/snl50_Thumb_.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=191%2C0%2C3458%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Entertainment",
    categoryUrl: "https://www.pentagram.com/entertainment",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "brasil-brasil-the-birth-of-modernism",
    title: "'Brasil! Brasil! The Birth of Modernism'",
    description:
      "Graphics and film for the Royal Academy's major exhibition on the birth of Brazilian Modernism.",
    url: "https://www.pentagram.com/work/brasil-brasil-the-birth-of-modernism",
    imageUrl:
      "https://pentagram-production.imgix.net/9f3593c3-eaca-45c7-b11d-216b733eb3c3/MW_BrasilBrasil_cover.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2991%2C1870",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/9f3593c3-eaca-45c7-b11d-216b733eb3c3/MW_BrasilBrasil_cover.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2991%2C1870&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "strike-three-films",
    title: "Strike Three Films",
    description: "Brand identity for the film production company.",
    url: "https://www.pentagram.com/work/strike-three-films",
    imageUrl:
      "https://pentagram-production.imgix.net/c5384c48-48a9-402b-a529-1b09d54e285a/PENTAGRAM_MW_Strike-III_240801copy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=96%2C0%2C1728%2C1080",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/c5384c48-48a9-402b-a529-1b09d54e285a/PENTAGRAM_MW_Strike-III_240801copy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=96%2C0%2C1728%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Entertainment",
    categoryUrl: "https://www.pentagram.com/entertainment",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "porsche",
    title: "Porsche",
    description:
      "Social media campaign for Ramadan, connecting moments of collective celebration and individual contemplation.",
    url: "https://www.pentagram.com/work/porsche",
    imageUrl:
      "https://pentagram-production.imgix.net/2a4178de-8af6-46b3-b2d4-b10c0e7f05c9/SM_Porsche_01thumbnails.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=422%2C0%2C7209%2C4500",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/2a4178de-8af6-46b3-b2d4-b10c0e7f05c9/SM_Porsche_01thumbnails.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=422%2C0%2C7209%2C4500&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Transport",
    categoryUrl: "https://www.pentagram.com/transport",
    width: "w-6-cols md:w-4-cols",
  },
  {
    id: "girls5eva",
    title: "'Girls5Eva'",
    description:
      "Title animations and graphics for the Emmy-nominated comedy series",
    url: "https://www.pentagram.com/work/girls5eva",
    imageUrl:
      "https://pentagram-production.imgix.net/4c691371-99c3-4515-bd3a-dc4e230c4c71/G5E_01_Full_4Kcopy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=192%2C0%2C3456%2C2160",
    imageAlt: "",
    backgroundImage:
      "https://pentagram-production.imgix.net/4c691371-99c3-4515-bd3a-dc4e230c4c71/G5E_01_Full_4Kcopy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=192%2C0%2C3456%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Entertainment",
    categoryUrl: "https://www.pentagram.com/entertainment",
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

const Section7 = () => {
  return (
    <div className="dynamic-work-block">
      <div className="project-count container mt-spacing-8">
        <h2 className="text-center text-secondary">
          <span className="f-body-1">{SECTION_HEADER.count} </span>
          <button
            className="py-9 lg:py-6 leading-[0] px-8 rounded-4 text-center bg-secondary hover:bg-chip-hover disabled:opacity-30 active:bg-inverse active:text-inverse homeFilters__chip mx-8"
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
            {MOTION_GRAPHICS_PROJECTS.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
        <li className="md:col-span-4">
          <ul
            className="mt-space-9 flex gap-y-48 gap-x-gutter flex-wrap"
            data-behavior="lazyloadImg"
          >
            {MOTION_GRAPHICS_PROJECTS.slice(2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Section7;

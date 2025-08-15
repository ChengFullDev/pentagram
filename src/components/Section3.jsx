import React from "react";

// Project data constants
const PROJECTS_DATA = {
  leftColumn: [
    {
      id: "icd-beauty",
      title: "ICD Beauty",
      description:
        "Brand identity and packaging for the Seoul-based beauty brand merging biotechnology with daily rituals.",
      url: "https://www.pentagram.com/work/icd-beauty",
      imageUrl:
        "https://pentagram-production.imgix.net/c450bc42-e78a-4da5-abe5-1e595bff70a2/2025_MAR_31_INCELLDERM14580_Open.jpeg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C188%2C4500%2C2998",
      imageAlt: "",
      categories: ["Fashion & Beauty"],
      categoryUrls: ["https://www.pentagram.com/fashion-beauty"],
      width: "w-12-cols md:w-8-cols",
    },
    {
      id: "peter-f-collier-award-for-ethics-in-journalism",
      title: "Peter F. Collier Award for Ethics in Journalism",
      description:
        "Design and production development for the New York University Collier Awards.",
      url: "https://www.pentagram.com/work/peter-f-collier-award-for-ethics-in-journalism",
      imageUrl:
        "https://pentagram-production.imgix.net/a1bb537c-e4f0-4fd7-9944-249581e38dea/2025_MAR_31_INCELLDERM14648_250414_v1_naturalcopy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C447%2C5334%2C3553",
      imageAlt: "",
      categories: ["Education", "Manufacturing & Industrials"],
      categoryUrls: [
        "https://www.pentagram.com/education",
        "https://www.pentagram.com/manufacturing-industrials",
      ],
      width: "w-12-cols md:w-4-cols",
    },
  ],
  rightColumn: [
    {
      id: "3-days-in-china",
      title: "'3 Days in China'",
      description:
        "Documentary film by Andr's Fraga visiting factories that make the Ambessa Play DIY Flashlight.",
      url: "https://www.pentagram.com/work/3-days-in-china",
      imageUrl:
        "https://pentagram-production.imgix.net/dc80560b-1084-4e99-9924-dae0b86b1fae/JM_3DaysinChina_1a.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=181%2C0%2C3458%2C2160",
      imageAlt: "",
      categories: ["Education", "Manufacturing & Industrials"],
      categoryUrls: [
        "https://www.pentagram.com/education",
        "https://www.pentagram.com/manufacturing-industrials",
      ],
      width: "w-6-cols sm:w-12-cols md:w-4-cols",
    },
    {
      id: "loka-chai-maker",
      title: "Loka Chai Maker",
      description:
        "Industrial design of an innovative new device for making chai easily at home.",
      url: "https://www.pentagram.com/work/loka-chai-maker",
      imageUrl:
        "https://pentagram-production.imgix.net/433e10c2-3c33-456f-9741-7a4d52c20c34/JM_Loka.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2993%2C1870",
      imageAlt: "",
      categories: ["Food & Drink"],
      categoryUrls: ["https://www.pentagram.com/food-drink"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "gush",
      title: "Gush",
      description:
        "Brand identity and packaging for an advanced materials brand that offers air-purifying paint and other products that support wellness and sustainability",
      url: "https://www.pentagram.com/work/gush",
      imageUrl:
        "https://pentagram-production.imgix.net/d560b40b-569f-40fd-9acc-6297faa978f9/Gush_blogpost_19.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C2000",
      imageAlt: "",
      categories: ["Manufacturing & Industrials"],
      categoryUrls: ["https://www.pentagram.com/manufacturing-industrials"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "life-supplies",
      title: "Life Supplies",
      description:
        "Industrial design of a range of refillable vessels for a personal care brand.",
      url: "https://www.pentagram.com/work/life-supplies",
      imageUrl:
        "https://pentagram-production.imgix.net/130ffbac-0a16-44fa-949e-0b8959a8863f/JM_LifeSupplies_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C9072%2C5670",
      imageAlt: "",
      categories: ["Fashion & Beauty"],
      categoryUrls: ["https://www.pentagram.com/fashion-beauty"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "lbty-liberty-beauty",
      title: "LBTY: Liberty Beauty",
      description: "A range of fragrances launching the LBTY beauty brand.",
      url: "https://www.pentagram.com/work/lbty-liberty-beauty",
      imageUrl:
        "https://pentagram-production.imgix.net/17c052cd-a7c0-44fd-96cd-b12b5500bc0e/01_LBTY_Pentagram_Website_Cover.psd?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=90%2C0%2C1729%2C1080",
      imageAlt: "",
      categories: ["Fashion & Beauty"],
      categoryUrls: ["https://www.pentagram.com/fashion-beauty"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "bags-of-art-and-design",
      title: "'Bags of Art & Design'",
      description:
        "A collaboration between Pentagram, Cass Art and Bags of Ethics that sets out to reinvent the humble tote bag.",
      url: "https://www.pentagram.com/work/bags-of-art-and-design",
      imageUrl:
        "https://pentagram-production.imgix.net/f33f8b93-97f8-4551-9229-ef907d17f9cd/AH_Cass_Art_Bags_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4964%2C3100",
      imageAlt: "",
      categories: ["Arts & Culture"],
      categoryUrls: ["https://www.pentagram.com/arts-culture"],
      width: "w-6-cols md:w-4-cols",
    },
  ],
};

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
  const backgroundImage = `${project.imageUrl}&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20`;
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
            style={{ backgroundImage: `url('${backgroundImage}')` }}
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
          className={`block pt-8 bg-primary relative z-1 ${
            project.width.includes("sm:w-11-cols")
              ? "sm:w-11-cols md:w-full md:pr-12 lg:pr-24"
              : "md:pr-12 lg:pr-24"
          }`}
        >
          <h3 className="f-body-1 text-primary">{project.title}</h3>
          <p className="f-body-1 text-secondary">{project.description}</p>
        </a>
        <div className="[@media(hover:hover)]:translate-y-[var(--h)] [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-focus:translate-y-0 opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-[400ms]">
          <div className="hidden [@media(hover:hover)]:flex flex-row flex-wrap f-caption gap-8 pt-8">
            {project.categories.map((category, index) => (
              <a key={index} href={project.categoryUrls[index]}>
                <span className="text-tertiary bg-secondary rounded-4 block px-8 py-4 hover:bg-button-secondary-hover">
                  {category}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

const Section3 = () => {
  return (
    <div className="py-16 md:py-16">
      <div className="container mt-spacing-8 text-center mb-12">
        <h2 className="text-center text-secondary">
          <span className="f-body-1">8 latest </span>
          <button
            className="py-9 lg:py-6 leading-[0] px-8 rounded-4 text-center text-inverse bg-secondary hover:bg-chip-hover disabled:opacity-30 active:bg-inverse active:text-inverse mx-8 transition-colors duration-200"
            data-filter-btn="industrialproduct-design"
            data-filter-btn-type="discipline"
          >
            <span className="f-body-1 leading-none">
              Industrial/Product Design
            </span>
          </button>
          <span className="f-body-1"> projects</span>
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
            className="mt-spacing-9 flex gap-12 md:gap-gutter flex-wrap"
            data-behavior="lazyloadImg"
          >
            {PROJECTS_DATA.leftColumn.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
        <li className="md:col-span-4">
          <ul
            className="mt-spacing-9 flex gap-y-12 gap-x-gutter flex-wrap"
            data-behavior="lazyloadImg"
          >
            {PROJECTS_DATA.rightColumn.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Section3;

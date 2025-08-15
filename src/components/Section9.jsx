import React from "react";

// Section header data
const SECTION_HEADER = {
  count: "8 latest",
  filterButton: "Signage & Environmental Graphics",
  filterType: "discipline",
  filterValue: "signage-environmental-graphics",
  projects: "projects"
};

// Signage & Environmental Graphics projects data
const SIGNAGE_PROJECTS = [
  {
    id: "london-design-biennale-2025",
    title: "London Design Biennale 2025",
    description: "Visual identity for the fifth edition of the Capital's global design event.",
    url: "https://www.pentagram.com/work/london-design-biennale-2025",
    imageUrl: "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=330%2C0%2C3377%2C2250",
    imageAlt: "Dl Ldb News 1",
    backgroundImage: "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=330%2C0%2C3377%2C2250&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-12-cols md:w-4-cols"
  },
  {
    id: "bottega",
    title: "Bottega",
    description: "Brand identity and environmental graphics for the Crown Heights, Brooklyn-based mom-and-pop Italian caf'.",
    url: "https://www.pentagram.com/work/bottega",
    imageUrl: "https://pentagram-production.imgix.net/270c14ac-a820-4f7d-87db-def75f9133ac/Bottega-Pentagram-TrabuccoCampos-1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=300%2C0%2C3240%2C2160",
    imageAlt: "",
    backgroundImage: "https://pentagram-production.imgix.net/270c14ac-a820-4f7d-87db-def75f9133ac/Bottega-Pentagram-TrabuccoCampos-1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=300%2C0%2C3240%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Food & Drink",
    categoryUrl: "https://www.pentagram.com/food-drink",
    width: "w-12-cols md:w-8-cols"
  },
  {
    id: "cartier",
    title: "'Cartier'",
    description: "Exhibition graphics for a showstopping new immersive exhibition celebrating the luxury brand.",
    url: "https://www.pentagram.com/work/cartier",
    imageUrl: "https://pentagram-production.imgix.net/309bd43f-2ce9-4951-a172-b69757599039/Cartier_cover.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4702%2C3131",
    imageAlt: "Cartier Cover",
    backgroundImage: "https://pentagram-production.imgix.net/309bd43f-2ce9-4951-a172-b69757599039/Cartier_cover.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4702%2C3131&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    categories: ["Fashion & Beauty", "Arts & Culture"],
    categoryUrls: ["https://www.pentagram.com/fashion-beauty", "https://www.pentagram.com/arts-culture"],
    width: "w-6-cols sm:w-12-cols md:w-4-cols"
  },
  {
    id: "overlooked-2-0",
    title: "'Overlooked 2.0'",
    description: "A vibrant new series of prints by Marina Willer making its debut at the 2024 London Design Festival.",
    url: "https://www.pentagram.com/work/overlooked-2-0",
    imageUrl: "https://pentagram-production.imgix.net/9cfee79d-0f62-4674-889d-c53de10847ac/MW_Overlooked_Blog_Images_1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5632%2C3516",
    imageAlt: "",
    backgroundImage: "https://pentagram-production.imgix.net/9cfee79d-0f62-4674-889d-c53de10847ac/MW_Overlooked_Blog_Images_1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5632%2C3516&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols"
  },
  {
    id: "sister",
    title: "Sister",
    description: "Visual identity and naming for Manchester's ambitious new science and innovation district.",
    url: "https://www.pentagram.com/work/sister",
    imageUrl: "https://pentagram-production.imgix.net/96af6bcb-2af8-4f8a-8c18-d22646e3eec1/HP_Sister_Cover_Image_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=167%2C0%2C3108%2C1939",
    imageAlt: "",
    backgroundImage: "https://pentagram-production.imgix.net/96af6bcb-2af8-4f8a-8c18-d22646e3eec1/HP_Sister_Cover_Image_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=167%2C0%2C3108%2C1939&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols"
  },
  {
    id: "karel-martens-x-pentagram-x-liberty",
    title: "Karel Martens x Pentagram x Liberty",
    description: "Celebrating the ongoing creative collaboration between Karel Martens, Harry Pearce and the Liberty Fabric Design Team.",
    url: "https://www.pentagram.com/work/karel-martens-x-pentagram-x-liberty",
    imageUrl: "https://pentagram-production.imgix.net/1a755838-1eee-43dd-83fa-b05255b743e7/HP_04_LDF_Liberty_Karel_Pentagram_Case_Study_Website4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3556%2C2222",
    imageAlt: "",
    backgroundImage: "https://pentagram-production.imgix.net/1a755838-1eee-43dd-83fa-b05255b743e7/HP_04_LDF_Liberty_Karel_Pentagram_Case_Study_Website4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3556%2C2222&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols"
  },
  {
    id: "bacan",
    title: "Bac'n",
    description: "Identity, environmental graphics, and custom typeface for the Italian restaurant in Williamsburg, Brooklyn.",
    url: "https://www.pentagram.com/work/bacan",
    imageUrl: "https://pentagram-production.imgix.net/dea8d698-129a-4008-b7a3-89a2d366333b/Bacan-Pentagram-TrabuccoCampos-1copy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=96%2C0%2C1728%2C1080",
    imageAlt: "",
    backgroundImage: "https://pentagram-production.imgix.net/dea8d698-129a-4008-b7a3-89a2d366333b/Bacan-Pentagram-TrabuccoCampos-1copy.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=96%2C0%2C1728%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Food & Drink",
    categoryUrl: "https://www.pentagram.com/food-drink",
    width: "w-6-cols md:w-4-cols"
  },
  {
    id: "london-design-festival-2023",
    title: "London Design Festival 2023",
    description: "A cinematic new identity for the Capital's annual festival of design.",
    url: "https://www.pentagram.com/work/london-design-festival-2023",
    imageUrl: "https://pentagram-production.imgix.net/f5634482-5406-4919-a3f0-4ff07ae56494/LDF23_2023_Red.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C8333%2C5213",
    imageAlt: "",
    backgroundImage: "https://pentagram-production.imgix.net/f5634482-5406-4919-a3f0-4ff07ae56494/LDF23_2023_Red.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C8333%2C5213&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20",
    category: "Arts & Culture",
    categoryUrl: "https://www.pentagram.com/arts-culture",
    width: "w-6-cols md:w-4-cols"
  }
];

// Helper function to generate image sources
const generateImageSources = (baseUrl) => {
  const sources = [
    {
      media: "screen and (max-width: 599px)",
      srcSet: `${baseUrl}&w=360&fm=jpg&q=70&auto=format&h=240, ${baseUrl}&w=360&q=70&fm=jpg&auto=format&h=240&dpr=2 2x`
    },
    {
      media: "screen and (max-width: 799px)",
      srcSet: `${baseUrl}&w=700&fm=jpg&q=70&auto=format&h=467, ${baseUrl}&w=700&q=70&fm=jpg&auto=format&h=467&dpr=2 2x`
    },
    {
      media: "screen and (min-width: 800px) and (max-width:1039px)",
      srcSet: `${baseUrl}&w=944&fm=jpg&q=70&auto=format&h=629, ${baseUrl}&w=944&q=70&fm=jpg&auto=format&h=629&dpr=2 2x`
    },
    {
      media: "screen and (min-width: 1040px)",
      srcSet: `${baseUrl}&w=1304&fm=jpg&q=70&auto=format&h=869, ${baseUrl}&w=1304&q=70&fm=jpg&auto=format&h=869&dpr=2 2x`
    }
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
        <a
          href={project.url}
          aria-label="view work"
        >
          <picture
            className="block relative z-5 bg-cover [&_img]:transition-all [&_img]:duration-300 aspect-[3/2]"
            style={{
              backgroundImage: `url('${project.backgroundImage}')`
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
              alt={project.imageAlt}
              className="transition-opacity duration-300 object-cover w-full h-full"
            />
          </picture>
        </a>
        <a
          href={project.url}
          className="block pt-8 bg-primary relative z-1 sm:w-11-cols md:w-full md:pr-12 lg:pr-24"
        >
          <h3 className="f-body-1 text-primary">
            {project.title}
          </h3>
          <p className="f-body-1 text-secondary">
            {project.description}
          </p>
        </a>
        <div className="[@media(hover:hover)]:translate-y-[var(--h)] [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-focus:translate-y-0 opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-[400ms]">
          <div
            className="hidden [@media(hover:hover)]:flex flex-row flex-wrap f-caption gap-8 pt-8"
          >
            {project.categories ? (
              project.categories.map((category, index) => (
                <a key={index} href={project.categoryUrls[index]}>
                  <span className="text-tertiary bg-secondary rounded-4 block px-8 py-4 hover:bg-button-secondary-hover">
                    {category}
                  </span>
                </a>
              ))
            ) : (
              <a href={project.categoryUrl}>
                <span className="text-tertiary bg-secondary rounded-4 block px-8 py-4 hover:bg-button-secondary-hover">
                  {project.category}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

const Section9 = () => {
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
            {SIGNAGE_PROJECTS.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
        <li className="md:col-span-4">
          <ul
            className="mt-space-9 flex gap-y-48 gap-x-gutter flex-wrap"
            data-behavior="lazyloadImg"
          >
            {SIGNAGE_PROJECTS.slice(2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Section9;

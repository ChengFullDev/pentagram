import React from "react";

// Project data constants
const PROJECTS_DATA = {
  leftColumn: [
    {
      id: "yale-engineering",
      title: "Yale Engineering",
      description:
        "A new visual identity framework highlights the school's unique culture of innovation and collaboration across disciplines.",
      url: "https://www.pentagram.com/work/yale-engineering",
      imageUrl:
        "https://pentagram-production.imgix.net/69d09597-3b87-4b98-a660-30b563cd6fa2/1_yale_eng_logo_animation_THUMBNAIL.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=150%2C0%2C1620%2C1080",
      imageAlt: "",
      categories: ["Education", "Technology"],
      categoryUrls: [
        "https://www.pentagram.com/education",
        "https://www.pentagram.com/technology",
      ],
      width: "w-12-cols md:w-4-cols",
    },
    {
      id: "williamstown-theatre-festival-2025",
      title: "Williamstown Theatre Festival 2025",
      description:
        "An updated visual direction for the 71st edition of one of the most prestigious festivals in the US.",
      url: "https://www.pentagram.com/work/williamstown-theatre-festival-2025",
      imageUrl:
        "https://pentagram-production.imgix.net/fda79d76-1ed6-472d-8086-2149dc19216a/w71-Pentagram-TrabuccoCampos-1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=150%2C0%2C1620%2C1080",
      imageAlt: "",
      categories: ["Entertainment", "Arts & Culture"],
      categoryUrls: [
        "https://www.pentagram.com/entertainment",
        "https://www.pentagram.com/arts-culture",
      ],
      width: "w-12-cols md:w-8-cols",
    },
  ],
  rightColumn: [
    {
      id: "royal-drawing-school",
      title: "Royal Drawing School",
      description:
        "Visual identity for the drawing school in East London founded by His Majesty King Charles III.",
      url: "https://www.pentagram.com/work/royal-drawing-school",
      imageUrl:
        "https://pentagram-production.imgix.net/70e4bdc8-ef95-4b56-9d81-6b5800e6fbd9/HP_RDS_Thumbnail1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=289%2C0%2C2909%2C1937",
      imageAlt: "",
      categories: ["Education", "Arts & Culture"],
      categoryUrls: [
        "https://www.pentagram.com/education",
        "https://www.pentagram.com/arts-culture",
      ],
      width: "w-6-cols sm:w-12-cols md:w-4-cols",
    },
    {
      id: "utah-city",
      title: "Utah City",
      description:
        "Brand identity and naming for the urban development in Utah with ambitions to be a new U.S. city.",
      url: "https://www.pentagram.com/work/utah-city",
      imageUrl:
        "https://pentagram-production.imgix.net/0111b522-1739-4365-88ad-97072b592414/1-LogoonBlue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C8%2C5004%2C3336",
      imageAlt: "",
      categories: ["Civic & Public"],
      categoryUrls: ["https://www.pentagram.com/civic-public"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "inequalities-at-triennale-milano",
      title: "'Inequalities' at Triennale Milano",
      description:
        "A data-driven visual identity and graphics program for the 24th International Exhibition of the influential design triennial highlights the growing disparities behind global challenges.",
      url: "https://www.pentagram.com/work/inequalities-at-triennale-milano",
      imageUrl:
        "https://pentagram-production.imgix.net/2e09d1b1-9919-4f7c-aa4b-aa8e98592644/TriennaleThumbnail.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C2000",
      imageAlt: "",
      categories: ["Arts & Culture"],
      categoryUrls: ["https://www.pentagram.com/arts-culture"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "parla",
      title: "Parla",
      description:
        "Brand identity for a new all-day Italian restaurant and cafe on New York's Upper West Side.",
      url: "https://www.pentagram.com/work/parla",
      imageUrl:
        "https://pentagram-production.imgix.net/51ab67d5-ee80-4644-9bd0-a212213a6e7f/Thumbnail.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=150%2C0%2C1620%2C1080",
      imageAlt: "",
      categories: ["Food & Drink"],
      categoryUrls: ["https://www.pentagram.com/food-drink"],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "guggenheim-fellowship",
      title: "Guggenheim Fellowship",
      description:
        "The John Simon Guggenheim Memorial Foundation marks its 100th anniversary with a new brand identity.",
      url: "https://www.pentagram.com/work/guggenheim-fellowship",
      imageUrl:
        "https://pentagram-production.imgix.net/d57d4cd8-36e8-4740-bc60-ba9756f55ac2/01_GF_Poster_A.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C2000",
      imageAlt: "",
      categories: ["Arts & Culture", "Non-profits"],
      categoryUrls: [
        "https://www.pentagram.com/arts-culture",
        "https://www.pentagram.com/non-profits",
      ],
      width: "w-6-cols md:w-4-cols",
    },
    {
      id: "nike-breaking4",
      title: "Nike Breaking4",
      description:
        "Data-driven visual language for Faith Kipyegon's moonshot attempt to break the 4-minute mile.",
      url: "https://www.pentagram.com/work/nike-breaking4",
      imageUrl:
        "https://pentagram-production.imgix.net/894ecd34-7de2-4d03-9154-19bfa2dd654e/Faith_Hero.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C2001",
      imageAlt: "",
      categories: ["Fashion & Beauty"],
      categoryUrls: ["https://www.pentagram.com/fashion-beauty"],
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

const Section1 = () => {
  return (
    <div className="py-16 md:py-16">
      <div className="container mt-spacing-8 text-center mb-12">
        <h2 className="text-center text-secondary">
          <span className="f-body-1">See latest projects</span>
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

export default Section1;

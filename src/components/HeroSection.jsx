import React, { useState, useRef, useEffect } from "react";
import HomeSlieders from "./HomeSlieders";
import HeroImageSlider from "./HeroImageSlider";

const HeroSection = () => {
  const [activeDiscipline, setActiveDiscipline] = useState("Everything");
  const [activeSector, setActiveSector] = useState("Everyone");
  const [isDisciplineOpen, setIsDisciplineOpen] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);

  // Animation states for smooth flowing transitions
  const [isAnimating, setIsAnimating] = useState(false);

  // New animation states for prev/next approach
  const [prevDiscipline, setPrevDiscipline] = useState("");
  const [nextDiscipline, setNextDiscipline] = useState("");
  const [prevSector, setPrevSector] = useState("");
  const [nextSector, setNextSector] = useState("");

  // Scroll-based positioning state
  const [filterPosition, setFilterPosition] = useState("top");

  const disciplineModalRef = useRef(null);
  const disciplineModalBottomRef = useRef(null);
  const sectorModalRef = useRef(null);
  const sectorModalBottomRef = useRef(null);

  const [previewWorkList, setPreviewWorkList] = useState(null);

  // Discipline data array
  const disciplines = [
    { id: "everything", label: "Everything", value: "everything" },
    { id: "books", label: "Books", value: "books" },
    {
      id: "brand-identity",
      label: "Brand Identity",
      value: "brand-identity",
      target: "1,2,3,5,6,7,11,12",
    },
    { id: "brand-strategy", label: "Brand Strategy", value: "brand-strategy" },
    { id: "campaigns", label: "Campaigns", value: "campaigns" },
    {
      id: "data-driven-experiences",
      label: "Data Driven Experiences",
      value: "data-driven-experiences",
    },
    {
      id: "digital-experiences",
      label: "Digital Experiences",
      value: "digital-experiences",
    },
    { id: "exhibitions", label: "Exhibitions", value: "exhibitions" },
    {
      id: "industrialproduct-design",
      label: "Industrial/Product Design",
      value: "industrialproduct-design",
      target: "9",
    },
    {
      id: "motion-graphics-film",
      label: "Motion Graphics & Film",
      value: "motion-graphics-film",
    },
    { id: "packaging", label: "Packaging", value: "packaging", target: "8" },
    {
      id: "publications",
      label: "Publications",
      value: "publications",
      target: "4",
    },
    {
      id: "signage-environmental-graphics",
      label: "Signage & Environmental Graphics",
      value: "signage-environmental-graphics",
      target: "10",
    },
    { id: "typefaces", label: "Typefaces", value: "typefaces" },
  ];

  // Sector data array
  const sectors = [
    { id: "everyone", label: "Everyone", value: "everyone" },
    {
      id: "arts-culture",
      label: "Arts & Culture",
      value: "arts-culture",
      target: "2,3,5,7,10",
    },
    { id: "civic-public", label: "Civic & Public", value: "civic-public" },
    {
      id: "consumer-brands",
      label: "Consumer Brands",
      value: "consumer-brands",
      target: "9",
    },
    { id: "education", label: "Education", value: "education" },
    {
      id: "entertainment",
      label: "Entertainment",
      value: "entertainment",
      target: "1,4,6",
    },
    {
      id: "fashion-beauty",
      label: "Fashion & Beauty",
      value: "fashion-beauty",
      target: "8",
    },
    { id: "finance", label: "Finance", value: "finance", target: "12" },
    { id: "food-drink", label: "Food & Drink", value: "food-drink" },
    { id: "health", label: "Health", value: "health" },
    {
      id: "hospitality-travel",
      label: "Hospitality & Travel",
      value: "hospitality-travel",
    },
    {
      id: "manufacturing-industrials",
      label: "Manufacturing & Industrials",
      value: "manufacturing-industrials",
    },
    { id: "non-profits", label: "Non-profits", value: "non-profits" },
    {
      id: "professional-services",
      label: "Professional Services",
      value: "professional-services",
    },
    { id: "publishing", label: "Publishing", value: "publishing" },
    { id: "real-estate", label: "Real Estate", value: "real-estate" },
    {
      id: "technology",
      label: "Technology",
      value: "technology",
      target: "11",
    },
    { id: "transport", label: "Transport", value: "transport" },
  ];

  const disciplinePreviewWork = [
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
  ];

  const sectorPreviewWork = [
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/27003a41-0182-4c99-bf8d-7c223f060fee/Laurence_King_Pentagram_CS_03.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=203%2C0%2C3241%2C2160&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/120b370d-3db2-456c-aee3-d5e77eba6bc5/marks.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C2000&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/b632cc21-a60e-4878-8652-9763132e2fb1/00SecondHand-Vernacular-3.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=192%2C0%2C3456%2C2160&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/72850da7-c10f-410d-b30e-2d931f99988c/TAU_BIERUT_2024_1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C31%2C3000%2C1873&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
    {
      backgroundImage: `url(
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20"
      )`,
      mobileImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=360&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=240, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=360&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=240&amp;dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=700&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=467, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=700&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=467&amp;dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=944&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=629, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=944&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=629&amp;dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=1304&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=869, https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=1304&amp;q=70&amp;fm=jpg&amp;auto=format&amp;h=869&amp;dpr=2 2x",
      image:
        "https://pentagram-production.imgix.net/79e90a23-539a-4ad8-80a1-eb79ceb3dccd/1Randall-Books.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C336%2C5323%2C3327&amp;w=1500&amp;fm=jpg&amp;q=70&amp;auto=format&amp;h=1000",
    },
  ];

  // Initialize prev/next values and set initial widths
  useEffect(() => {
    const disciplineIndex = disciplines.findIndex(
      (d) => d.label === activeDiscipline
    );
    const sectorIndex = sectors.findIndex((s) => s.label === activeSector);

    if (disciplineIndex !== -1) {
      const { prev, next } = calculatePrevNextItems(
        activeDiscipline,
        disciplines,
        disciplineIndex
      );
      setPrevDiscipline(prev);
      setNextDiscipline(next);
    }

    if (sectorIndex !== -1) {
      const { prev, next } = calculatePrevNextItems(
        activeSector,
        sectors,
        sectorIndex
      );
      setPrevSector(prev);
      setNextSector(next);
    }

    // Set initial width of disciplineElement to match currentDisciplineElement
    setTimeout(() => {
      updateElementWidths();
    }, 100);
  }, []);

  // Scroll event listener for dynamic filter positioning
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine filter position based on scroll amount with smooth threshold
      if (currentScrollY <= 10) {
        setFilterPosition("top");
      } else if (currentScrollY > 10) {
        setFilterPosition("bottom");
        // Reset text to default when moving to bottom
        if (activeDiscipline !== "Everything" || activeSector !== "Everyone") {
          setActiveDiscipline("Everything");
          setActiveSector("Everyone");
          // Update prev/next values for the default state
          const disciplineIndex = disciplines.findIndex(
            (d) => d.label === "Everything"
          );
          const sectorIndex = sectors.findIndex((s) => s.label === "Everyone");

          if (disciplineIndex !== -1) {
            const { prev, next } = calculatePrevNextItems(
              disciplines,
              disciplineIndex
            );
            setPrevDiscipline(prev);
            setNextDiscipline(next);
          }

          if (sectorIndex !== -1) {
            const { prev, next } = calculatePrevNextItems(sectors, sectorIndex);
            setPrevSector(prev);
            setNextSector(next);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial position check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeDiscipline, activeSector, disciplines, sectors]);

  // Resize event listener to update discipline and sector widths
  useEffect(() => {
    const handleResize = () => {
      updateElementWidths();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        disciplineModalRef.current &&
        disciplineModalBottomRef.current &&
        !disciplineModalBottomRef.current.contains(event.target) &&
        !disciplineModalRef.current.contains(event.target)
      ) {
        setIsDisciplineOpen(false);
        enableScroll(true);
      }

      if (
        sectorModalRef.current &&
        sectorModalBottomRef.current &&
        !sectorModalRef.current.contains(event.target) &&
        !sectorModalBottomRef.current.contains(event.target)
      ) {
        setIsSectorOpen(false);
        enableScroll(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onClickDiscipline = () => {
    setIsDisciplineOpen(true);
    enableScroll(false);
  };

  const onClickSector = () => {
    setIsSectorOpen(true);
    enableScroll(false);
  };

  const enableScroll = (enabled) => {
    if (enabled) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  };

  const showPreviousWork = (discipline, sector) => {
    if (discipline) {
      setPreviewWorkList(disciplinePreviewWork);
    } else if (sector) {
      setPreviewWorkList(sectorPreviewWork);
    } else {
      setPreviewWorkList(null);
    }
  };

  // Calculate prev/next items for smooth flowing animation
  const calculatePrevNextItems = (items, currentIndex) => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;

    return {
      prev: items[prevIndex].label,
      next: items[nextIndex].label,
    };
  };

  // Smooth flowing animation function for changing selections
  const animateSelectionChange = (newDiscipline, newSector) => {
    if (isAnimating) return; // Prevent multiple animations

    setIsAnimating(true);

    // Animate disciplines if they're different
    if (newDiscipline !== activeDiscipline) {
      const currentDisciplineIndex = disciplines.findIndex(
        (d) => d.label === activeDiscipline
      );
      const newDisciplineIndex = disciplines.findIndex(
        (d) => d.label === newDiscipline
      );

      if (currentDisciplineIndex !== -1 && newDisciplineIndex !== -1) {
        // Calculate the path between disciplines
        const disciplinePath = [];
        if (currentDisciplineIndex < newDisciplineIndex) {
          // Moving forward through disciplines
          for (let i = currentDisciplineIndex; i <= newDisciplineIndex; i++) {
            disciplinePath.push(disciplines[i].label);
          }
        } else {
          // Moving backward through disciplines
          for (let i = currentDisciplineIndex; i >= newDisciplineIndex; i--) {
            disciplinePath.push(disciplines[i].label);
          }
        }

        // Animate through each discipline in the path with cascading movement
        disciplinePath.forEach((disciplineLabel, index) => {
          setTimeout(() => {
            const { prev, next } = calculatePrevNextItems(disciplines, index);

            setActiveDiscipline(disciplineLabel);
            setPrevDiscipline(prev);
            setNextDiscipline(next);

            // Update width after discipline change
            setTimeout(() => updateElementWidths(), 0);

            const isMovingForward = currentDisciplineIndex < newDisciplineIndex;
            const direction = isMovingForward ? "forward" : "backward";

            // Add vertical movement effect with cascading
            const disciplineElement = document.querySelector(
              "#current-discipline-item"
            );
            if (disciplineElement) {
              animateCascadingMovement(
                disciplineElement,
                direction,
                index * 100
              );
            }

            const prevDisciplineElement = document.querySelector(
              "#prev-discipline-item"
            );
            if (prevDisciplineElement) {
              animateCascadingMovement(
                prevDisciplineElement,
                direction,
                index * 100
              );
            }

            const nextDisciplineElement = document.querySelector(
              "#next-discipline-item"
            );
            if (nextDisciplineElement) {
              animateCascadingMovement(
                nextDisciplineElement,
                direction,
                index * 100
              );
            }
          }, index * 100);
        });
      }
    }

    // Animate sectors if they're different
    if (newSector !== activeSector) {
      const currentSectorIndex = sectors.findIndex(
        (s) => s.label === activeSector
      );
      const newSectorIndex = sectors.findIndex((s) => s.label === newSector);

      if (currentSectorIndex !== -1 && newSectorIndex !== -1) {
        // Calculate the path between sectors
        const sectorPath = [];
        if (currentSectorIndex < newSectorIndex) {
          // Moving forward through sectors
          for (let i = currentSectorIndex; i <= newSectorIndex; i++) {
            sectorPath.push(sectors[i].label);
          }
        } else {
          // Moving backward through sectors
          for (let i = currentSectorIndex; i >= newSectorIndex; i--) {
            sectorPath.push(sectors[i].label);
          }
        }

        // Animate through each sector in the path with cascading movement
        sectorPath.forEach((sectorLabel, index) => {
          setTimeout(() => {
            const { prev, next } = calculatePrevNextItems(sectors, index);

            setActiveSector(sectorLabel);
            setPrevSector(prev);
            setNextSector(next);

            const isMovingForward = currentSectorIndex < newSectorIndex;
            const direction = isMovingForward ? "forward" : "backward";

            // Add vertical movement effect with cascading
            const sectorElement = document.querySelector(
              "#current-sector-item"
            );
            if (sectorElement) {
              animateCascadingMovement(sectorElement, direction, index * 100);
            }

            const prevSectorElement =
              document.querySelector("#prev-sector-item");
            if (prevSectorElement) {
              animateCascadingMovement(
                prevSectorElement,
                direction,
                index * 100
              );
            }

            const nextSectorElement =
              document.querySelector("#next-sector-item");
            if (nextSectorElement) {
              animateCascadingMovement(
                nextSectorElement,
                direction,
                index * 100
              );
            }
          }, index * 100);
        });
      }
    }

    // Complete the animation after all transitions
    const maxPathLength = Math.max(
      newDiscipline !== activeDiscipline
        ? Math.abs(
            disciplines.findIndex((d) => d.label === activeDiscipline) -
              disciplines.findIndex((d) => d.label === newDiscipline)
          ) + 1
        : 0,
      newSector !== activeSector
        ? Math.abs(
            sectors.findIndex((s) => s.label === activeSector) -
              sectors.findIndex((s) => s.label === newSector)
          ) + 1
        : 0
    );

    if (maxPathLength > 0) {
      setTimeout(() => {
        // Set the width of disciplineElement to match currentDisciplineElement
        updateElementWidths();

        setActiveDiscipline(newDiscipline);
        setActiveSector(newSector);
        setIsAnimating(false);
      }, maxPathLength * 100);
    } else {
      // No animation needed
      // Update width after state change
      setTimeout(() => {
        updateElementWidths();
      }, 0);

      setActiveDiscipline(newDiscipline);
      setActiveSector(newSector);
      setIsAnimating(false);
    }
  };

  // Function to update discipline and sector element widths to match current elements
  const updateElementWidths = () => {
    // Update discipline width
    const disciplineElement = document.querySelector("#discipline-item");
    const currentDisciplineElement = document.querySelector(
      "#current-discipline-item"
    );

    if (disciplineElement && currentDisciplineElement) {
      // debugger;
      const currentWidth =
        currentDisciplineElement.getBoundingClientRect().width;
      disciplineElement.style.width = `${currentWidth}px`;
    }

    // Update sector width
    const sectorElement = document.querySelector("#sector-item");
    const currentSectorElement = document.querySelector("#current-sector-item");

    if (sectorElement && currentSectorElement) {
      const currentWidth = currentSectorElement.getBoundingClientRect().width;
      sectorElement.style.width = `${currentWidth}px`;
    }
  };

  // Cascading movement animation function
  const animateCascadingMovement = (element, direction, delay) => {
    if (!element) return;

    const moveAmount = direction === "forward" ? -20 : 20;
    element.style.transform = `translateY(${moveAmount}px)`;
    element.style.transition = "transform 0.1s ease-out";

    setTimeout(() => {
      element.style.transform = "translateY(0)";
    }, delay + 50);
  };

  const onChangeSlide = (index) => {
    // Only change text when filter is in center position (top)
    if (filterPosition !== "top") {
      return;
    }

    const realIndex = index + 1;
    // Find corresponding sector
    const correspondingSector = sectors.find((sector) => {
      // Check if the sector has a target property
      if (sector.target) {
        // Split the target string by comma and convert to numbers
        const targetIndices = sector.target
          .split(",")
          .map((target) => parseInt(target.trim()));
        // Check if the given index is in the target indices
        return targetIndices.includes(realIndex);
      }
      return false;
    });

    // Find corresponding discipline
    const correspondingDiscipline = disciplines.find((discipline) => {
      // Check if the discipline has a target property
      if (discipline.target) {
        // Split the target string by comma and convert to numbers
        const targetIndices = discipline.target
          .split(",")
          .map((target) => parseInt(target.trim()));
        // Check if the given index is in the target indices
        return targetIndices.includes(realIndex);
      }
      return false;
    });

    // Use smooth animation for changes
    const newSector = correspondingSector
      ? correspondingSector.label
      : "Everyone";
    const newDiscipline = correspondingDiscipline
      ? correspondingDiscipline.label
      : "Everything";

    animateSelectionChange(newDiscipline, newSector);
  };

  return (
    <div>
      <div className="h-full flex flex-col w-full">
        <div
          className="relative w-full flex items-center justify-center bg-white grow max-w-[1728px] mx-auto aspect-3/4 sm:aspect-[7/3]"
          data-behavior="filterAnimationCarousel"
        >
          <div className="swiper-container inset-0 absolute h-auto w-full">
            <HomeSlieders
              onChangeSlide={onChangeSlide}
              isModalOpen={isDisciplineOpen || isSectorOpen}
            />
          </div>

          <div className="invisible"></div>
          <div
            className={`homeFilters absolute h-fit flex flex-col-reverse md:flex-col container transition-all duration-1000 ease-in-out ${
              filterPosition === "bottom"
                ? "filter-position-bottom"
                : "filter-position-top"
            }`}
          >
            <div
              className={`mx-gutter md:py-0 overflow-hidden sm:mx-0 homeFilters__filters px-8 md:px-16 f-body-1 rounded-4 ${
                isAnimating ? "animate-flow-container" : ""
              }`}
            >
              <span className="sr-only">We design everything for everyone</span>
              <div className="flex flex-col md:flex-row items-center hover:text-secondary">
                <span aria-hidden="true">We design&nbsp;</span>
                <span
                  aria-label="Choose work type"
                  className="inline-flex items-center hover:text-primary relative cursor-pointer h-[40px] overflow-hidden"
                  aria-expanded={isDisciplineOpen}
                  onClick={onClickDiscipline}
                >
                  <span
                    id="discipline-item"
                    className="flex flex-col items-start overflow-hidden"
                  >
                    <span
                      id="prev-discipline-item"
                      className="h-4 md:h-4 shrink-0 flex items-center whitespace-nowrap"
                    >
                      {prevDiscipline}
                    </span>
                    <span
                      id="current-discipline-item"
                      className="h-28 md:h-44 shrink-0 flex items-center whitespace-nowrap"
                      data-text
                    >
                      {activeDiscipline}
                    </span>
                    <span
                      id="next-discipline-item"
                      className="h-4 md:h-4 shrink-0 flex items-center whitespace-nowrap"
                    >
                      {nextDiscipline}
                    </span>
                  </span>
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    className={`mt-4 md:mt-3 md:mb-3 homeFilters__chevron transition-all duration-500 ease-in-out ${
                      isDisciplineOpen ? "close-cursor" : ""
                    }`}
                    name="caret-down-12"
                    aria-hidden="true"
                    data-dropdown-chevron="data-dropdown-chevron"
                    viewBox="0 0 12 12"
                  >
                    <use xlinkHref="#caret-down-12"></use>
                  </svg>
                </span>
                <span aria-hidden="true" className="inline">
                  &nbsp;for&nbsp;
                </span>
                <span
                  aria-label="Choose industry type"
                  className="inline-flex items-center hover:text-primary relative cursor-pointer h-[40px] overflow-hidden"
                  aria-expanded={isSectorOpen}
                  onClick={onClickSector}
                >
                  <span
                    id="sector-item"
                    className="flex flex-col items-start overflow-hidden"
                  >
                    <span
                      id="prev-sector-item"
                      className="h-4 md:h-4 shrink-0 flex items-center whitespace-nowrap"
                    >
                      {prevSector}
                    </span>
                    <span
                      id="current-sector-item"
                      className="h-28 md:h-44 shrink-0 flex items-center whitespace-nowrap"
                      data-text
                    >
                      {activeSector}
                    </span>
                    <span
                      id="next-sector-item"
                      className="h-4 md:h-4 shrink-0 flex items-center whitespace-nowrap"
                    >
                      {nextSector}
                    </span>
                  </span>
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    className={`md:mt-3 mb-3 homeFilters__chevron transition-all duration-500 ease-in-out ${
                      isSectorOpen ? "close-cursor" : ""
                    }`}
                    name="caret-down-12"
                    aria-hidden="true"
                    data-dropdown-chevron="data-dropdown-chevron"
                    viewBox="0 0 12 12"
                  >
                    <use xlinkHref="#caret-down-12"></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discipline Dropdown */}
      {isDisciplineOpen && (
        <div className="hero-dropdown-modal cursor-cross-light">
          <div
            className="hero-dropdown-content sector-dropdown cursor-auto"
            ref={disciplineModalRef}
          >
            <HeroImageSlider
              images={previewWorkList}
              height="300px"
              className="mb-10"
            />

            <div className="sector-categories">
              <div className="sector-row">
                {disciplines.map((discipline) =>
                  discipline.id === "everything" ? (
                    ""
                  ) : (
                    <button
                      key={discipline.id}
                      className="sector-chip hover:animate-flow-chip"
                      onMouseEnter={() => showPreviousWork(discipline.id)}
                      onMouseLeave={() => showPreviousWork(null, null)}
                    >
                      {discipline.label}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <div
            className="sector-tagline absolute bottom-4 mx-auto bg-[#e8e8e8cc] px-4
            rounded-lg shadow-lg cursor-auto !text-[15px] pb-1 !text-[#767676]"
            ref={disciplineModalBottomRef}
          >
            <span>We design </span>
            <button
              className="tagline-dropdown inline-flex items-center text-[#1A1A1A] font-bold"
              onClick={() => {
                setIsDisciplineOpen(false);
                enableScroll(true);
              }}
            >
              Everything
              <svg
                width="12"
                height="12"
                fill="none"
                className={`mt-4 md:mt-3 md:mb-3 homeFilters__chevron !rotate-180`}
                name="caret-down-12"
                aria-hidden="true"
                data-dropdown-chevron="data-dropdown-chevron"
                viewBox="0 0 12 12"
              >
                <use xlinkHref="#caret-down-12"></use>
              </svg>
            </button>
            <span> for </span>
            <button
              className="tagline-dropdown inline-flex items-center"
              onClick={() => {
                setIsDisciplineOpen(false);
                onClickSector();
              }}
            >
              Everyone
              <svg
                width="12"
                height="12"
                fill="none"
                className="mt-4 md:mt-3 md:mb-3 homeFilters__chevron"
                name="caret-down-12"
                aria-hidden="true"
                data-dropdown-chevron="data-dropdown-chevron"
                viewBox="0 0 12 12"
              >
                <use xlinkHref="#caret-down-12"></use>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Sector Dropdown */}
      {isSectorOpen && (
        <div className="hero-dropdown-modal cursor-cross-light">
          <div
            className="hero-dropdown-content sector-dropdown cursor-auto"
            ref={sectorModalRef}
          >
            <HeroImageSlider
              images={previewWorkList}
              height="300px"
              className="mb-10"
            />

            <div className="sector-categories">
              <div className="sector-row">
                {sectors.map((sector) => (
                  <button
                    key={sector.id}
                    className="sector-chip hover:animate-flow-chip"
                    onMouseEnter={() => showPreviousWork(null, sector)}
                    onMouseLeave={() => showPreviousWork(null, null)}
                  >
                    {sector.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className="sector-tagline absolute bottom-4 mx-auto bg-[#e8e8e8cc] px-4
            rounded-lg shadow-lg cursor-auto !text-[15px] pb-1 !text-[#767676]"
            ref={sectorModalBottomRef}
          >
            <span>We design </span>
            <button
              className="tagline-dropdown inline-flex items-center"
              onClick={() => {
                setIsSectorOpen(false);
                onClickDiscipline();
              }}
            >
              Everything
              <svg
                width="12"
                height="12"
                fill="none"
                className={`mt-4 md:mt-3 md:mb-3 homeFilters__chevron`}
                name="caret-down-12"
                aria-hidden="true"
                data-dropdown-chevron="data-dropdown-chevron"
                viewBox="0 0 12 12"
              >
                <use xlinkHref="#caret-down-12"></use>
              </svg>
            </button>
            <span> for </span>
            <button
              className="tagline-dropdown inline-flex items-center text-[#1A1A1A] font-bold"
              onClick={() => {
                setIsSectorOpen(false);
                enableScroll(true);
              }}
            >
              Everyone
              <svg
                width="12"
                height="12"
                fill="none"
                className="mt-4 md:mt-3 md:mb-3 homeFilters__chevron !rotate-180"
                name="caret-down-12"
                aria-hidden="true"
                data-dropdown-chevron="data-dropdown-chevron"
                viewBox="0 0 12 12"
              >
                <use xlinkHref="#caret-down-12"></use>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;

import React, { useState, useRef, useEffect } from "react";
import HomeSlieders from "./HomeSlieders";
import HeroImageSlider from "./HeroImageSlider";
import { gsap } from "gsap";
import { Power2 } from "gsap/gsap-core";

const HeroSection = () => {
  const [activeDiscipline, setActiveDiscipline] = useState("Everything");
  const [activeSector, setActiveSector] = useState("Everyone");
  const [isDisciplineOpen, setIsDisciplineOpen] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);

  // Scroll-based positioning state
  const [filterPosition, setFilterPosition] = useState("top");
  const filterPositionRef = useRef("top");

  // const [isAnimating, setIsAnimating] = useState(false);
  const isAnimating = useRef(false);

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

  // Initialize element widths
  useEffect(() => {
    // Set initial width of disciplineElement to match currentDisciplineElement
    setTimeout(() => {
      updateElementWidths();
    }, 100);
  }, []);

  const moveFilter = (position) => {
    if (filterPositionRef.current === position) {
      return;
    }

    if (isAnimating.current) {
      return;
    }
    isAnimating.current = true;

    if (position === "top") {
      gsap.to("#homeFilters", {
        position: "absolute",
        top: "50%",
        duration: 0.2,
        ease: Power2.Linear,
        onComplete: () => {
          filterPositionRef.current = "top";
          setFilterPosition("top");
          isAnimating.current = false;
        },
      });
    } else {
      animateFilter(-1);
      gsap.to("#homeFilters", {
        position: "fixed",
        top: "auto",
        bottom: "20px",
        duration: 0.2,
        ease: Power2.Linear,
        onComplete: () => {
          filterPositionRef.current = "bottom";
          setFilterPosition("bottom");
          isAnimating.current = false;
        },
      });
    }
  };

  // Scroll event listener for dynamic filter positioning
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine filter position based on scroll amount with smooth threshold
      if (currentScrollY <= 10) {
        moveFilter("top");
      } else if (currentScrollY > 10) {
        moveFilter("bottom");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial position check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  // Update element widths when active discipline changes
  useEffect(() => {
    setTimeout(() => {
      updateElementWidths();
    }, 100);
  }, [activeDiscipline]);

  // Update element widths when active sector changes
  useEffect(() => {
    setTimeout(() => {
      updateElementWidths();
    }, 100);
  }, [activeSector]);

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

  // Function to update discipline and sector element widths to match current elements
  const updateElementWidths = () => {
    // Update discipline width
    const disciplineElement = document.querySelector("#discipline-item");
    const activeDisciplineItem = document.querySelector(
      `#discipline-item-${
        disciplines.find((d) => d.label === activeDiscipline)?.id ||
        "everything"
      }`
    );

    if (disciplineElement && activeDisciplineItem) {
      const range = document.createRange();
      range.selectNodeContents(activeDisciplineItem);
      const currentWidth = range.getBoundingClientRect().width;
      disciplineElement.style.width = `${currentWidth}px`;
    }

    // Update sector width
    const sectorElement = document.querySelector("#sector-item");
    const activeSectorItem = document.querySelector(
      `#sector-item-${
        sectors.find((s) => s.label === activeSector)?.id || "everyone"
      }`
    );

    if (sectorElement && activeSectorItem) {
      const range = document.createRange();
      range.selectNodeContents(activeSectorItem);
      const currentWidth = range.getBoundingClientRect().width;
      sectorElement.style.width = `${currentWidth}px`;
    }
  };

  const onChangeSlide = (index) => {
    // Only change text when filter is in center position (top)
    if (filterPositionRef.current !== "top") {
      return;
    }

    animateFilter(index);
  };

  const animateFilter = (index) => {
    const realIndex = index + 1;
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

    const newDiscipline = correspondingDiscipline
      ? correspondingDiscipline.label
      : "Everything";

    animateDisciplineList(newDiscipline);

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

    const newSector = correspondingSector
      ? correspondingSector.label
      : "Everyone";

    animateSectorList(newSector);
  };

  // Function to get the actual height of discipline/sector items
  const getItemHeight = () => {
    // const item = document.querySelector("#discipline-item-1") || document.querySelector("#sector-item-1");
    // if (item) {
    //   return item.offsetHeight;
    // }
    // // Fallback to default height based on screen size
    return window.innerWidth >= 800 ? 44 : 28;
  };

  // Function to animate discipline list position
  const animateDisciplineList = (newDiscipline) => {
    const disciplineList = document.querySelector("#discipline-list");
    if (!disciplineList) return;

    const currentIndex = disciplines.findIndex(
      (d) => d.label === activeDiscipline
    );
    const newIndex = disciplines.findIndex((d) => d.label === newDiscipline);

    if (currentIndex === -1 || newIndex === -1) return;

    // Calculate the transform to move from current to new position
    const itemHeight = getItemHeight();
    const offset = -newIndex * itemHeight;

    // Apply the transform to create smooth transition
    disciplineList.style.transform = `translateY(${offset}px)`;
    setActiveDiscipline(newDiscipline);
  };

  // Function to animate sector list position
  const animateSectorList = (newSector) => {
    const sectorList = document.querySelector("#sector-list");
    if (!sectorList) return;

    const currentIndex = sectors.findIndex((s) => s.label === activeSector);
    const newIndex = sectors.findIndex((s) => s.label === newSector);

    if (currentIndex === -1 || newIndex === -1) return;

    // Calculate the transform to move from current to new position
    const itemHeight = getItemHeight();
    const offset = -newIndex * itemHeight;

    // Apply the transform to create smooth transition
    sectorList.style.transform = `translateY(${offset}px)`;
    setActiveSector(newSector);
  };

  return (
    <div>
      <div className="h-full flex flex-col w-full">
        <div className="relative w-full flex items-center justify-center bg-white grow max-w-[1728px] mx-auto aspect-3/4 sm:aspect-[7/3]">
          <div className="swiper-container inset-0 absolute h-auto w-full">
            <HomeSlieders
              onChangeSlide={onChangeSlide}
              isModalOpen={isDisciplineOpen || isSectorOpen}
            />
          </div>
          <div
            id="homeFilters"
            className={`homeFilters h-fit flex flex-col-reverse md:flex-col w-full container ${
              filterPositionRef.current === "bottom"
                ? "filter-position-bottom"
                : "filter-position-top"
            }`}
          >
            <div
              className="mx-gutter !py-0 overflow-hidden sm:mx-0 homeFilters__filters
              px-8 md:px-16 f-body-1 rounded-4 md:w-auto w-full"
            >
              <div className="flex flex-col md:flex-row items-center hover:text-secondary">
                <div>
                  <span aria-hidden="true">We design&nbsp;</span>
                  <span
                    aria-label="Choose work type"
                    className="inline-flex items-center hover:text-primary relative cursor-pointer
                      h-[28px] md:h-[44px] overflow-hidden"
                    aria-expanded={isDisciplineOpen}
                    onClick={onClickDiscipline}
                  >
                    <span
                      id="discipline-item"
                      className="flex flex-col items-start overflow-hidden"
                    >
                      <div
                        id="discipline-list-container"
                        className="h-28 md:h-44 overflow-hidden"
                      >
                        <div
                          id="discipline-list"
                          className="flex flex-col"
                          style={{ transition: "all 800ms ease-in-out" }}
                        >
                          {disciplines.map((discipline, index) => (
                            <span
                              key={discipline.id}
                              id={`discipline-item-${discipline.id}`}
                              className="h-28 md:h-44 shrink-0 flex items-center whitespace-nowrap"
                              data-text
                            >
                              {discipline.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </span>
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
                  </span>
                </div>
                <div>
                  <span aria-hidden="true" className="inline">
                    &nbsp;for&nbsp;
                  </span>
                  <span
                    aria-label="Choose industry type"
                    className="inline-flex items-center hover:text-primary relative cursor-pointer
                      h-[28px] md:h-[44px] overflow-hidden"
                    aria-expanded={isSectorOpen}
                    onClick={onClickSector}
                  >
                    <span
                      id="sector-item"
                      className="flex flex-col items-start overflow-hidden"
                    >
                      <div
                        id="sector-list-container"
                        className="h-28 md:h-44 overflow-hidden"
                      >
                        <div
                          id="sector-list"
                          className="flex flex-col"
                          style={{ transition: "all 800ms ease-in-out" }}
                        >
                          {sectors.map((sector, index) => (
                            <span
                              key={sector.id}
                              id={`sector-item-${sector.id}`}
                              className="h-28 md:h-44 shrink-0 flex items-center whitespace-nowrap"
                              data-text
                            >
                              {sector.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </span>
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      className="md:mt-3 mb-3 homeFilters__chevron"
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
                {disciplines.map((discipline, index) => (
                  <button
                    key={discipline.id}
                    className="sector-chip hover:animate-flow-chip"
                    onMouseEnter={() => showPreviousWork(discipline.id)}
                    onMouseLeave={() => showPreviousWork(null, null)}
                    onClick={() => {
                      setActiveDiscipline(discipline.label);
                      setIsDisciplineOpen(false);
                      enableScroll(true);
                    }}
                  >
                    {discipline.label}
                  </button>
                ))}
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

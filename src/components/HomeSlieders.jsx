import React, { useRef, useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlieders = ({ onChangeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const slides = [
    {
      id: 1,
      link: "https://www.pentagram.com/work/motogp",
      title: "MotoGP",
      description: `Transforming the world's greatest motorcycle
        event into a digital-first global entertainment
        brand.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C5600%2C2400&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/ec947b70-364f-4229-85da-9641c0d26ef1/MOTOGP1.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Motogp1",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C4000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_MotoGP.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Motogp1",
      },
    },
    {
      id: 2,
      link: "https://www.pentagram.com/work/london-design-biennale-2025",
      title: "London Design Biennale 2025",
      description: `Visual identity for the fifth edition of the
        Capital's global design event.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C235%2C4000%2C1716&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/16552174-e43a-4ea3-9c3c-39de63c1cbee/DL_LDB_NEWS1.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C235%2C4000%2C1716&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Dl Ldb News 1",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=2280%2C0%2C3512%2C4677&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/949b41a1-0031-41a2-8f49-e0906007a489/DL_LDB_MOBILEHERO.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2280%2C0%2C3512%2C4677&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Dl Ldb News 1",
      },
    },
    {
      id: 3,
      link: "https://www.pentagram.com/work/guggenheim-3",
      title: "Guggenheim",
      description: `Visual identity for the constellation of global art museums.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C138%2C3200%2C1373&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C138%2C3200%2C1373&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Hp 01 Guggenheim Cover Resize",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=909%2C4%2C1349%2C1796&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/1b339bda-8de8-495a-acda-bbd3d125c62b/HP_01_Guggenheim_Cover_Resize.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=909%2C4%2C1349%2C1796&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Hp 01 Guggenheim Cover Resize",
      },
    },
    {
      id: 4,
      link: "https://www.pentagram.com/work/netflix-queue",
      title: "Netflix Queue",
      description: `A dynamic editorial ecosystem shines a spotlight
        on the streaming giant's award-worthy talent and
        storytelling.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C1184%2C7952%2C3417&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/ee792106-6cbd-4fdc-b5e1-89fff2df9194/EMO_NQM_CaseStudy_2024_006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C1184%2C7952%2C3417&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Emo Nqm Case Study 2024 006",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C4000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Queue.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Emo Nqm Case Study 2024 006",
      },
    },
    {
      id: 5,
      link: "https://www.pentagram.com/work/williamstown-theatre-festival-2025",
      title: "Williamstown Theatre Festival 2025",
      description: `An updated visual direction for the 71st edition
        of one of the most prestigious festivals in the
        US, with over seven decades of helping to shape
        the American theater.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C7000%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C7000%2C3000&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Wt Carousel",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=2375%2C0%2C2250%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/cb91cd18-b0df-4aad-b829-09cb63d568f3/WT_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=2375%2C0%2C2250%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Wt Carousel",
      },
    },
    {
      id: 6,
      link: "https://www.pentagram.com/work/channel-4",
      title: "Channel 4",
      description: `A new masterbrand for the UK's most disruptive public service broadcaster.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C301%2C2431%2C1040&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/13fb1f9e-023d-4365-9f2e-56a3cc9409c8/C42.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C301%2C2431%2C1040&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "C42",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C4000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Channel4.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "C42",
      },
    },
    {
      id: 7,
      link: "https://www.pentagram.com/work/natural-history-museum",
      title: "Natural History Museum",
      description: `Moving the Museum from catalogue to catalyst.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2500%2C1072&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/13a946b2-be86-4bb5-b50b-d2f7ce1a504f/NHM_Penta_Web_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2500%2C1072&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Nhm Penta Web Homepage",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C4000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_NHM.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Nhm Penta Web Homepage",
      },
    },
    {
      id: 8,
      link: "https://www.pentagram.com/work/icd-beauty",
      title: "ICD Beauty",
      description: `Brand identity and packaging for the Seoul-based
        beauty brand merging biotechnology with daily
        rituals.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C5600%2C2400&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Icd Carousel",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=1900%2C0%2C1800%2C2400&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/9882e3ec-3315-4cf7-9fd7-5e8f51c90d99/ICD_Carousel.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1900%2C0%2C1800%2C2400&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Icd Carousel",
      },
    },
    {
      id: 9,
      link: "https://www.pentagram.com/work/yoto",
      title: "Yoto",
      description: `Industrial design, branding, visual identity, and
        packaging for an audio player that kids can
        control.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=57%2C0%2C2730%2C1818&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/null1a6dbb31-ab62-4789-8c72-01b8003d3711/00_Yoto_HomePage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=57%2C0%2C2730%2C1818&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "00 Yoto Homepage",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C4000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_Yoto.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "00 Yoto Homepage",
      },
    },
    {
      id: 10,
      link: "https://www.pentagram.com/work/studio-theatre",
      title: "Studio Theatre",
      description: `Visual identity, environmental graphics and
        poster campaigns for the influential theater
        company in Washington, DC.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C5600%2C2400&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/a3c18ba2-458f-453f-b3f8-af4971185e1e/Studio2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C5600%2C2400&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Studio2",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C4000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a67945bd-aac0-4d98-b3e3-cb3399767692/Mobile_Thumbnail_StudioTheater.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C4000&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Studio2",
      },
    },
    {
      id: 11,
      link: "https://www.pentagram.com/work/mind",
      title: "MIND",
      description: `Brand identity framework for the data security platform.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3466%2C1485&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3466%2C1485&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: " Mind 73ratio Carousel Newpenta Website",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=927%2C0%2C1113%2C1485&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/4ac7273a-bebe-4797-b0fc-e78af5472fa6/__MIND_73ratio_carousel_newPenta-website.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=927%2C0%2C1113%2C1485&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: " Mind 73ratio Carousel Newpenta Website",
      },
    },
    {
      id: 12,
      link: "https://www.pentagram.com/work/general-catalyst",
      title: "General Catalyst",
      description: `Redefining the venture capital brand that is
        redefining what venture capital can be. Venture
        beyond.`,
      picture1: {
        backgroundImage: `url('https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=1%2C0%2C8747%2C3749&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=1500&fm=jpg&q=70&auto=format&h=643",
        mobileImage:
          "https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=700&fm=jpg&q=70&auto=format&h=300, https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=700&q=70&fm=jpg&auto=format&h=300&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=944&fm=jpg&q=70&auto=format&h=405, https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=944&q=70&fm=jpg&auto=format&h=405&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=1304&fm=jpg&q=70&auto=format&h=559, https://pentagram-production.imgix.net/72ce0f9f-9417-4a9b-bfbc-5cc5ba83fbf2/GC_CS_Homepage.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1%2C0%2C8747%2C3749&w=1304&q=70&fm=jpg&auto=format&h=559&dpr=2 2x",
        description: "Gc Cs Homepage",
      },
      picture2: {
        backgroundImage: `url('https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=1110%2C0%2C1620%2C2160&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=20')`,
        image:
          "https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=1500&fm=jpg&q=70&auto=format&h=2000",
        mobileImage:
          "https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=360&fm=jpg&q=70&auto=format&h=480, https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=360&q=70&fm=jpg&auto=format&h=480&dpr=2 2x",
        tabletImage:
          "https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=700&fm=jpg&q=70&auto=format&h=933, https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=700&q=70&fm=jpg&auto=format&h=933&dpr=2 2x",
        desktopImage:
          "https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=944&fm=jpg&q=70&auto=format&h=1259, https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=944&q=70&fm=jpg&auto=format&h=1259&dpr=2 2x",
        largeImage:
          "https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=1304&fm=jpg&q=70&auto=format&h=1739, https://pentagram-production.imgix.net/a5986956-0194-4b7e-bae4-9940e4d64a16/GC_CS_Thumbnail.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=1110%2C0%2C1620%2C2160&w=1304&q=70&fm=jpg&auto=format&h=1739&dpr=2 2x",
        description: "Gc Cs Homepage",
      },
    },
  ];

  const sliderRef = useRef(null);

  // Ensure autoplay starts immediately when component mounts
  useEffect(() => {
    if (sliderRef.current) {
      // Force start autoplay after a short delay to ensure slider is fully initialized
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 1000);
    }
  }, []);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      // Pause autoplay and navigate immediately
      sliderRef.current.slickPause();
      setIsAutoplayPaused(true);
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);

      // Resume autoplay after a delay to ensure smooth transition
      setTimeout(() => {
        setIsAutoplayPaused(false);
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 100);
    }
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handleAfterChange = (currentIndex) => {
    // Resume autoplay after manual navigation completes
    if (isAutoplayPaused) {
      setTimeout(() => {
        setIsAutoplayPaused(false);
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 100);
    }
    onChangeSlide(currentIndex);
  };

  return (
    <div className="mt-24 lg:mt-64 container !max-w-full !mx-auto">
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        speed={1000}
        fade={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
        pauseOnHover={false}
        pauseOnFocus={false}
      >
        {slides.map((slide, index) => (
          <a href={slide.link} key={index}>
            <div>
              <picture
                className="relative w-auto z-5 bg-cover [&_img]:transition-all [&_img]:duration-300"
                style={{ backgroundImage: slide.picture1.backgroundImage }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  srcSet={slide.picture1.mobileImage}
                />
                <source
                  media="screen and (max-width: 799px)"
                  srcSet={slide.picture1.tabletImage}
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  srcSet={slide.picture1.desktopImage}
                />
                <source
                  media="screen and (min-width: 1040px)"
                  srcSet={slide.picture1.largeImage}
                />
                <img
                  className="w-full h-full"
                  src={slide.picture1.image}
                  alt={slide.picture1.description}
                />
              </picture>

              <picture
                className="block sm:hidden w-full h-full object-cover inset-0 absolute bg-cover [&_img]:transition-all
                  [&_img]:duration-300 aspect-[7/3]"
                style={{ backgroundImage: slide.picture2.backgroundImage }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  srcSet={slide.picture2.mobileImage}
                />
                <source
                  media="screen and (max-width: 799px)"
                  srcSet={slide.picture2.tabletImage}
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  srcSet={slide.picture2.desktopImage}
                />
                <source
                  media="screen and (min-width: 1040px)"
                  srcSet={slide.picture2.largeImage}
                />
                <img
                  className="w-full h-full"
                  src={slide.picture2.image}
                  alt={slide.picture2.description}
                />
              </picture>
            </div>

            <div
              className="absolute bottom-outer-gutter left-outer-gutter sm:w-10-cols-vw
              lg:w-8-cols-vw xl:w-6-cols-vw homeFilters__caption z-10"
            >
              <span className="block text-inverse f-body-1">{slide.title}</span>

              <span className="hidden sm:block text-inverse f-body-1">
                {slide.description}
              </span>
            </div>
          </a>
        ))}
      </Slider>

      <nav className="absolute bottom-0 right-0 w-fit hidden lg:block z-10">
        <div className="container flex justify-end p-outer-gutter gap-[6px] mr-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`shrink-0 w-[18px] h-[18px] ${
                currentSlide === index ? "bg-primary" : "bg-gray-300"
              } rounded-full`}
              aria-label={`view slide ${index + 1}`}
              onClick={() => {
                goToSlide(index);
              }}
            ></button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HomeSlieders;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RetrospectiveSwiper1 = () => {
  // Shakespeare in the Park retrospective slides data
  const slides = [
    {
      id: 1,
      year: "2025",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2025?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2025",
      backgroundImage: `url('https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1440%2C2560&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=57')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=360&fm=jpg&q=70&auto=format&h=640, https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=360&q=70&fm=jpg&auto=format&h=640&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=700&fm=jpg&q=70&auto=format&h=1244, https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=700&q=70&fm=jpg&auto=format&h=1244&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=944&fm=jpg&q=70&auto=format&h=1678, https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=944&q=70&fm=jpg&auto=format&h=1678&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=1304&fm=jpg&q=70&auto=format&h=2318, https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=1304&q=70&fm=jpg&auto=format&h=2318&dpr=2 2x",
      description: "Single 1080x1920 Copy",
    },
    {
      id: 2,
      year: "2024",
      link: "https://www.pentagram.com/work/shakespeare-in-the-parks-2024?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-parks-2024",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2000%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=48')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&fm=jpg&q=70&auto=format&h=540, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&q=70&fm=jpg&auto=format&h=540&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&fm=jpg&q=70&auto=format&h=1050, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&q=70&fm=jpg&auto=format&h=1050&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&fm=jpg&q=70&auto=format&h=1416, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&q=70&fm=jpg&auto=format&h=1416&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1956, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1956&dpr=2 2x",
      description: "Sitp2024",
    },
    {
      id: 3,
      year: "2023",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2023?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2023",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2000%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=48')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&fm=jpg&q=70&auto=format&h=540, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&q=70&fm=jpg&auto=format&h=540&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&fm=jpg&q=70&auto=format&h=1050, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&q=70&fm=jpg&auto=format&h=1050&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&fm=jpg&q=70&auto=format&h=1416, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&q=70&fm=jpg&auto=format&h=1416&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1956, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1956&dpr=2 2x",
      description: "Sitp2023",
    },
    {
      id: 4,
      year: "2022",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2022?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2022",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2000%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=48')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&fm=jpg&q=70&auto=format&h=540, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&q=70&fm=jpg&auto=format&h=540&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&fm=jpg&q=70&auto=format&h=1050, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&q=70&fm=jpg&auto=format&h=1050&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&fm=jpg&q=70&auto=format&h=1416, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&q=70&fm=jpg&auto=format&h=1416&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1956, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1956&dpr=2 2x",
      description: "Sitp2022",
    },
    {
      id: 5,
      year: "2021",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2021?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2021",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1685%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=57')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=360&fm=jpg&q=70&auto=format&h=641, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=360&q=70&fm=jpg&auto=format&h=641&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=700&fm=jpg&q=70&auto=format&h=1246, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=700&q=70&fm=jpg&auto=format&h=1246&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=944&fm=jpg&q=70&auto=format&h=1681, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=944&q=70&fm=jpg&auto=format&h=1681&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2322, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2322&dpr=2 2x",
      description: "Sitp2021",
    },
    {
      id: 6,
      year: "2019",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2019?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2019",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2000%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=48')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&fm=jpg&q=70&auto=format&h=540, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&q=70&fm=jpg&auto=format&h=540&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&fm=jpg&q=70&auto=format&h=1050, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&q=70&fm=jpg&auto=format&h=1050&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&fm=jpg&q=70&auto=format&h=1416, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&q=70&fm=jpg&auto=format&h=1416&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1956, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1956&dpr=2 2x",
      description: "Sitp2019",
    },
    {
      id: 7,
      year: "2018",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2018?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2018",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2000%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=48')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&fm=jpg&q=70&auto=format&h=540, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=360&q=70&fm=jpg&auto=format&h=540&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&fm=jpg&q=70&auto=format&h=1050, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=700&q=70&fm=jpg&auto=format&h=1050&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&fm=jpg&q=70&auto=format&h=1416, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=944&q=70&fm=jpg&auto=format&h=1416&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1956, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1956&dpr=2 2x",
      description: "Sitp2018",
    },
    {
      id: 8,
      year: "2017",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2017-1?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2017-1",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1503%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=360&fm=jpg&q=70&auto=format&h=719, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=360&q=70&fm=jpg&auto=format&h=719&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=700&fm=jpg&q=70&auto=format&h=1397, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=700&q=70&fm=jpg&auto=format&h=1397&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=944&fm=jpg&q=70&auto=format&h=1884, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=944&q=70&fm=jpg&auto=format&h=1884&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2603, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2603&dpr=2 2x",
      description: "Sitp2017",
    },
    {
      id: 9,
      year: "2016",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2016?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2016",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1499%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=360&fm=jpg&q=70&auto=format&h=720, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=360&q=70&fm=jpg&auto=format&h=720&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=700&fm=jpg&q=70&auto=format&h=1401, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=700&q=70&fm=jpg&auto=format&h=1401&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=944&fm=jpg&q=70&auto=format&h=1889, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=944&q=70&fm=jpg&auto=format&h=1889&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2610, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2610&dpr=2 2x",
      description: "Sitp2016",
    },
    {
      id: 10,
      year: "2015",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2015?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2015",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1501%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=360&fm=jpg&q=70&auto=format&h=720, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=360&q=70&fm=jpg&auto=format&h=720&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=700&fm=jpg&q=70&auto=format&h=1399, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=700&q=70&fm=jpg&auto=format&h=1399&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=944&fm=jpg&q=70&auto=format&h=1887, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=944&q=70&fm=jpg&auto=format&h=1887&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2606, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2606&dpr=2 2x",
      description: "Sitp2015",
    },
    {
      id: 11,
      year: "2014",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2014?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2014",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1500%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&fm=jpg&q=70&auto=format&h=720, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&q=70&fm=jpg&auto=format&h=720&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&fm=jpg&q=70&auto=format&h=1400, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&q=70&fm=jpg&auto=format&h=1400&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&fm=jpg&q=70&auto=format&h=1888, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&q=70&fm=jpg&auto=format&h=1888&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2608, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2608&dpr=2 2x",
      description: "Sitp2014",
    },
    {
      id: 12,
      year: "2013",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2013?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2013",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1500%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&fm=jpg&q=70&auto=format&h=720, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&q=70&fm=jpg&auto=format&h=720&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&fm=jpg&q=70&auto=format&h=1400, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&q=70&fm=jpg&auto=format&h=1400&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&fm=jpg&q=70&auto=format&h=1888, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&q=70&fm=jpg&auto=format&h=1888&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2608, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2608&dpr=2 2x",
      description: "Sitp2013",
    },
    {
      id: 13,
      year: "2012",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2012?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2012",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1550%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=62')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=360&fm=jpg&q=70&auto=format&h=697, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=360&q=70&fm=jpg&auto=format&h=697&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=700&fm=jpg&q=70&auto=format&h=1355, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=700&q=70&fm=jpg&auto=format&h=1355&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=944&fm=jpg&q=70&auto=format&h=1827, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=944&q=70&fm=jpg&auto=format&h=1827&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2524, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2524&dpr=2 2x",
      description: "Sitp2012",
    },
    {
      id: 14,
      year: "2011",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2011?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2011",
      backgroundImage: `url('https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1493%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=360&fm=jpg&q=70&auto=format&h=723, https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=360&q=70&fm=jpg&auto=format&h=723&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=700&fm=jpg&q=70&auto=format&h=1407, https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=700&q=70&fm=jpg&auto=format&h=1407&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=944&fm=jpg&q=70&auto=format&h=1897, https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=944&q=70&fm=jpg&auto=format&h=1897&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2620, https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2620&dpr=2 2x",
      description: "Sitp2011",
    },
    {
      id: 15,
      year: "2010",
      link: "https://www.pentagram.com/work/shakespeare-in-the-park-2010?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2010",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1325%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=72')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=360&fm=jpg&q=70&auto=format&h=815, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=360&q=70&fm=jpg&auto=format&h=815&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=700&fm=jpg&q=70&auto=format&h=1585, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=700&q=70&fm=jpg&auto=format&h=1585&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=944&fm=jpg&q=70&auto=format&h=2137, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=944&q=70&fm=jpg&auto=format&h=2137&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2952, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2952&dpr=2 2x",
      description: "Sitp2010",
    },
    {
      id: 16,
      year: "2009",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1426%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=67')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=360&fm=jpg&q=70&auto=format&h=757, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=360&q=70&fm=jpg&auto=format&h=757&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=700&fm=jpg&q=70&auto=format&h=1473, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=700&q=70&fm=jpg&auto=format&h=1473&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=944&fm=jpg&q=70&auto=format&h=1986, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=944&q=70&fm=jpg&auto=format&h=1986&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2743, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2743&dpr=2 2x",
      description: "Sitp2009",
    },
    {
      id: 17,
      year: "2008",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1426%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=67')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=360&fm=jpg&q=70&auto=format&h=757, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=360&q=70&fm=jpg&auto=format&h=757&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=700&fm=jpg&q=70&auto=format&h=1473, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=700&q=70&fm=jpg&auto=format&h=1473&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=944&fm=jpg&q=70&auto=format&h=1986, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=944&q=70&fm=jpg&auto=format&h=1986&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2743, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2743&dpr=2 2x",
      description: "Sitp2008",
    },
    {
      id: 18,
      year: "2007",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2060%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=47')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=360&fm=jpg&q=70&auto=format&h=524, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=360&q=70&fm=jpg&auto=format&h=524&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=700&fm=jpg&q=70&auto=format&h=1019, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=700&q=70&fm=jpg&auto=format&h=1019&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=944&fm=jpg&q=70&auto=format&h=1375, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=944&q=70&fm=jpg&auto=format&h=1375&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1899, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1899&dpr=2 2x",
      description: "Sitp2007",
    },
    {
      id: 19,
      year: "2006",
      link: "https://www.pentagram.com/work/artifact?setSerializedKey=2&amp;exclude-slug=artifact",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1425%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=67')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=360&fm=jpg&q=70&auto=format&h=758, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=360&q=70&fm=jpg&auto=format&h=758&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=700&fm=jpg&q=70&auto=format&h=1474, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=700&q=70&fm=jpg&auto=format&h=1474&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=944&fm=jpg&q=70&auto=format&h=1987, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=944&q=70&fm=jpg&auto=format&h=1987&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2745, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2745&dpr=2 2x",
      description: "Sitp2006",
    },
    {
      id: 20,
      year: "2005",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1473%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=65')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=360&fm=jpg&q=70&auto=format&h=733, https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=360&q=70&fm=jpg&auto=format&h=733&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=700&fm=jpg&q=70&auto=format&h=1426, https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=700&q=70&fm=jpg&auto=format&h=1426&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=944&fm=jpg&q=70&auto=format&h=1923, https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=944&q=70&fm=jpg&auto=format&h=1923&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2656, https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2656&dpr=2 2x",
      description: "Sitp2005",
    },
    {
      id: 21,
      year: "2003",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2089%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=46')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=360&fm=jpg&q=70&auto=format&h=517, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=360&q=70&fm=jpg&auto=format&h=517&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=700&fm=jpg&q=70&auto=format&h=1005, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=700&q=70&fm=jpg&auto=format&h=1005&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=944&fm=jpg&q=70&auto=format&h=1356, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=944&q=70&fm=jpg&auto=format&h=1356&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1873, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1873&dpr=2 2x",
      description: "Sitp2003",
    },
    {
      id: 22,
      year: "2001",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1500%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&fm=jpg&q=70&auto=format&h=720, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&q=70&fm=jpg&auto=format&h=720&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&fm=jpg&q=70&auto=format&h=1400, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&q=70&fm=jpg&auto=format&h=1400&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&fm=jpg&q=70&auto=format&h=1888, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&q=70&fm=jpg&auto=format&h=1888&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2608, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2608&dpr=2 2x",
      description: "Sitp2001",
    },
    {
      id: 23,
      year: "2000",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1484%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=65')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=360&fm=jpg&q=70&auto=format&h=728, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=360&q=70&fm=jpg&auto=format&h=728&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=700&fm=jpg&q=70&auto=format&h=1415, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=700&q=70&fm=jpg&auto=format&h=1415&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=944&fm=jpg&q=70&auto=format&h=1908, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=944&q=70&fm=jpg&auto=format&h=1908&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2636, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2636&dpr=2 2x",
      description: "Sitp2000",
    },
    {
      id: 24,
      year: "1999",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1500%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=64')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&fm=jpg&q=70&auto=format&h=720, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=360&q=70&fm=jpg&auto=format&h=720&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&fm=jpg&q=70&auto=format&h=1400, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=700&q=70&fm=jpg&auto=format&h=1400&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&fm=jpg&q=70&auto=format&h=1888, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=944&q=70&fm=jpg&auto=format&h=1888&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2608, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2608&dpr=2 2x",
      description: "Sitp1999",
    },
    {
      id: 25,
      year: "1998",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1539%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=62')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=360&fm=jpg&q=70&auto=format&h=702, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=360&q=70&fm=jpg&auto=format&h=702&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=700&fm=jpg&q=70&auto=format&h=1365, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=700&q=70&fm=jpg&auto=format&h=1365&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=944&fm=jpg&q=70&auto=format&h=1840, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=944&q=70&fm=jpg&auto=format&h=1840&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2542, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2542&dpr=2 2x",
      description: "Sitp1998",
    },
    {
      id: 26,
      year: "1997",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1467%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=65')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=360&fm=jpg&q=70&auto=format&h=736, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=360&q=70&fm=jpg&auto=format&h=736&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=700&fm=jpg&q=70&auto=format&h=1431, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=700&q=70&fm=jpg&auto=format&h=1431&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=944&fm=jpg&q=70&auto=format&h=1930, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=944&q=70&fm=jpg&auto=format&h=1930&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2667, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2667&dpr=2 2x",
      description: "Sitp1997",
    },
    {
      id: 27,
      year: "1996",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C2094%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=46')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=360&fm=jpg&q=70&auto=format&h=516, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=360&q=70&fm=jpg&auto=format&h=516&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=700&fm=jpg&q=70&auto=format&h=1003, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=700&q=70&fm=jpg&auto=format&h=1003&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=944&fm=jpg&q=70&auto=format&h=1352, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=944&q=70&fm=jpg&auto=format&h=1352&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=1304&fm=jpg&q=70&auto=format&h=1868, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=1304&q=70&fm=jpg&auto=format&h=1868&dpr=2 2x",
      description: "Sitp1996",
    },
    {
      id: 28,
      year: "1995",
      link: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&amp;exclude-slug=the-public-theater",
      backgroundImage: `url('https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C1467%2C3000&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=65')`,
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=360&fm=jpg&q=70&auto=format&h=736, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=360&q=70&fm=jpg&auto=format&h=736&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=700&fm=jpg&q=70&auto=format&h=1431, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=700&q=70&fm=jpg&auto=format&h=1431&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=944&fm=jpg&q=70&auto=format&h=1930, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=944&q=70&fm=jpg&auto=format&h=1930&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=1304&fm=jpg&q=70&auto=format&h=2667, https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=1304&q=70&fm=jpg&auto=format&h=2667&dpr=2 2x",
      description: "Sitp1995",
    },
  ];

  return (
    <div
      className="mt-24 lg:mt-64 container !max-w-full !mx-0"
      data-behavior="carouselSerialized"
    >
      <Swiper
        className="retrospective-swiper"
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView="auto" // allows partial slides for smooth scroll
        loop={true}
        speed={8000} // speed of the whole loop animation
        autoplay={{
          delay: 0, // no pause between slides
          disableOnInteraction: false, // keep scrolling even when interacted
        }}
        freeMode={true} // disables snap-to-slide
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1040: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="retrospective-swiper-slide">
            <a
              href="https://www.pentagram.com/work/shakespeare-in-the-park-2025?setSerializedKey=2&amp;exclude-slug=shakespeare-in-the-park-2025"
              className="h-fit bottom-0"
            >
              <div className="w-fit h-fit ml-gutter">
                <span className="text-tertiary-inverse bg-secondary rounded-4 block pb-4 f-caption w-fit mb-8">
                  {slide.year}
                </span>
                <picture
                  className="relative w-auto z-5 bg-cover [&_img]:transition-all [&_img]:duration-300"
                  style={{ backgroundImage: slide.backgroundImage }}
                >
                  <source
                    media="screen and (max-width: 599px)"
                    srcSet={slide.mobileImage}
                  />
                  <source
                    media="screen and (max-width: 799px)"
                    srcSet={slide.tabletImage}
                  />
                  <source
                    media="screen and (min-width: 800px) and (max-width:1039px)"
                    srcSet={slide.desktopImage}
                  />
                  <source
                    media="screen and (min-width: 1040px)"
                    srcSet={slide.largeImage}
                  />
                  <img
                    src={slide.image}
                    alt={slide.description}
                    className="transition-opacity duration-300 object-cover h-full"
                  />
                </picture>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RetrospectiveSwiper1;

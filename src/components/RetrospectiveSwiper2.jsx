import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RetrospectiveSwiper2 = () => {
  const slides = [
    {
      id: 1,
      year: "2024",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 2,
      year: "2023",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=939",
      mobileImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=225, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=225&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=438, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=438&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=591, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=591&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=816, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=816&dpr=2 2x",
    },
    {
      id: 3,
      year: "2022",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 4,
      year: "2021",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=938",
      mobileImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=225, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=225&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=438, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=438&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=590, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=590&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=816, https://pentagram-production.imgix.net/ff5c0cfa-53f9-4b49-af46-326115b03775/2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=816&dpr=2 2x",
    },
    {
      id: 5,
      year: "2020",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 6,
      year: "2019",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 7,
      year: "2018",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C3000%2C1870&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/9f8e6000-e463-4fac-9fdf-88dc7eee9581/2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C3000%2C1870&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 8,
      year: "2017",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 9,
      year: "2016",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 10,
      year: "2014",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 11,
      year: "2013",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=936",
      mobileImage:
        "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=225, https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=225&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=437, https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=437&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=589, https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=589&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/bdd4408f-4fc2-418f-ac10-d306c2914ec9/2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
    {
      id: 12,
      year: "2012",
      link: "https://www.pentagram.com/work/london-design-festival-2024?setSerializedKey=1&exclude-slug=london-design-festival-2024",
      backgroundImage:
        "url('https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=%2C%2C%2C&amp;w=32&amp;fit=crop&amp;blur=200&amp;q=20&amp;fm=jpg&amp;auto=false&amp;h=23')",
      image:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1500&fm=jpg&q=70&auto=format&h=935",
      mobileImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&fm=jpg&q=70&auto=format&h=224, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=360&q=70&fm=jpg&auto=format&h=224&dpr=2 2x",
      tabletImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&fm=jpg&q=70&auto=format&h=436, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=700&q=70&fm=jpg&auto=format&h=436&dpr=2 2x",
      desktopImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&fm=jpg&q=70&auto=format&h=588, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=944&q=70&fm=jpg&auto=format&h=588&dpr=2 2x",
      largeImage:
        "https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&fm=jpg&q=70&auto=format&h=813, https://pentagram-production.imgix.net/f03fd874-7024-44de-bd3e-2832cdfa510a/2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=1304&q=70&fm=jpg&auto=format&h=813&dpr=2 2x",
    },
  ];

  return (
    <div
      className="mt-24 lg:mt-64 container !max-w-full !mx-0"
      data-behavior="carouselSerialized"
    >
      <div className="retrospective-swiper-container">
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
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1040: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="retrospective-swiper-slide">
              <div className="retrospective-slide-content">
                <a href={slide.link} className="retrospective-slide-link">
                  <span className="retrospective-year bg-secondary text-tertiary-inverse font-aktiv-grotesk-regular text-sm font-medium">
                    {slide.year}
                  </span>
                  <div className="retrospective-image-container">
                    <picture
                      className="retrospective-picture"
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
                        media="screen and (max-width: 1039px)"
                        srcSet={slide.desktopImage}
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet={slide.largeImage}
                      />
                      <img
                        src={slide.image}
                        alt={slide.year}
                        className="retrospective-image"
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RetrospectiveSwiper2;

import React from "react";
import RetrospectiveSwiper1 from "./RetrospectiveSwiper1";

// Retrospective content data
const RETROSPECTIVE_CONTENT = {
  title: "Retrospective: Shakespeare in the Park",
  description:
    "In 1954, impresario Joe Papp began a summer tradition of staging free outdoor performances of Shakespeare, inaugurating the Public Theater's beloved Shakespeare in the Park festival. Pentagram partner Paula Scher, whose relationship with the Public spans four decades, has designed a new identity for the series for thirty consecutive summers. Each campaign is customized to the season's theme, creating a highly visible graphic vocabulary for outdoor advertising, social media, and on-site signage.",
  count: "(28)",
  modalId: "serializedModalATknsc9kV6",
};

// Shakespeare in the Park retrospective data
const SHAKESPEARE_RETROSPECTIVE_DATA = [
  {
    id: "shakespeare-2025",
    year: "2025",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2025?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2025",
    imageUrl:
      "https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560",
    imageAlt: "Single 1080x1920 Copy",
    backgroundImage:
      "https://pentagram-production.imgix.net/67948693-b73c-48dc-b1ae-7d7705ff1369/single1080x1920copy.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C2560&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=57",
  },
  {
    id: "shakespeare-2024",
    year: "2024",
    url: "https://www.pentagram.com/work/shakespeare-in-the-parks-2024?setSerializedKey=2&exclude-slug=shakespeare-in-the-parks-2024",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000",
    imageAlt: "Sitp2024",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2024.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=48",
  },
  {
    id: "shakespeare-2023",
    year: "2023",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2023?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2023",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000",
    imageAlt: "Sitp2023",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2023.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=48",
  },
  {
    id: "shakespeare-2022",
    year: "2022",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2022?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2022",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000",
    imageAlt: "Sitp2022",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2022.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=48",
  },
  {
    id: "shakespeare-2021",
    year: "2021",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2021?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2021",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000",
    imageAlt: "Sitp2021",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2021.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1685%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=57",
  },
  {
    id: "shakespeare-2019",
    year: "2019",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2019?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2019",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000",
    imageAlt: "Sitp2019",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2019.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=48",
  },
  {
    id: "shakespeare-2018",
    year: "2018",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2018?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2018",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000",
    imageAlt: "Sitp2018",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2000%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=48",
  },
  {
    id: "shakespeare-2017",
    year: "2017",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2017-1?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2017-1",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000",
    imageAlt: "Sitp2017",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2017.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1503%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2016",
    year: "2016",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2016?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2016",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000",
    imageAlt: "Sitp2016",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2016.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1499%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2015",
    year: "2015",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2015?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2015",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000",
    imageAlt: "Sitp2015",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2015.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1501%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2014",
    year: "2014",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2014?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2014",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000",
    imageAlt: "Sitp2014",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2014.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2013",
    year: "2013",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2013?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2013",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000",
    imageAlt: "Sitp2013",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2013.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2012",
    year: "2012",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2012?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2012",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000",
    imageAlt: "Sitp2012",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2012.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1550%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=62",
  },
  {
    id: "shakespeare-2011",
    year: "2011",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2011?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2011",
    imageUrl:
      "https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000",
    imageAlt: "Sitp2011",
    backgroundImage:
      "https://pentagram-production.imgix.net/4cd0c1ad-0ad8-4b46-87cd-03cfcdb74c70/SITP2011.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1493%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2010",
    year: "2010",
    url: "https://www.pentagram.com/work/shakespeare-in-the-park-2010?setSerializedKey=2&exclude-slug=shakespeare-in-the-park-2010",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000",
    imageAlt: "Sitp2010",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2010.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1325%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=72",
  },
  {
    id: "shakespeare-2009",
    year: "2009",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000",
    imageAlt: "Sitp2009",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2009.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=67",
  },
  {
    id: "shakespeare-2008",
    year: "2008",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000",
    imageAlt: "Sitp2008",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2008.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1426%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=67",
  },
  {
    id: "shakespeare-2007",
    year: "2007",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000",
    imageAlt: "Sitp2007",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2007.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2060%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=47",
  },
  {
    id: "shakespeare-2006",
    year: "2006",
    url: "https://www.pentagram.com/work/artifact?setSerializedKey=2&exclude-slug=artifact",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000",
    imageAlt: "Sitp2006",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2006.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1425%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=67",
  },
  {
    id: "shakespeare-2005",
    year: "2005",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000",
    imageAlt: "Sitp2005",
    backgroundImage:
      "https://pentagram-production.imgix.net/e3441a2e-4adb-4470-9eb8-598ec2474249/SITP2005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1473%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=65",
  },
  {
    id: "shakespeare-2003",
    year: "2003",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000",
    imageAlt: "Sitp2003",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2089%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=46",
  },
  {
    id: "shakespeare-2001",
    year: "2001",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000",
    imageAlt: "Sitp2001",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-2000",
    year: "2000",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000",
    imageAlt: "Sitp2000",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1484%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=65",
  },
  {
    id: "shakespeare-1999",
    year: "1999",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000",
    imageAlt: "Sitp1999",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1999.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1500%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=64",
  },
  {
    id: "shakespeare-1998",
    year: "1998",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000",
    imageAlt: "Sitp1998",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1998.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1539%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=62",
  },
  {
    id: "shakespeare-1997",
    year: "1997",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000",
    imageAlt: "Sitp1997",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1997.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=65",
  },
  {
    id: "shakespeare-1996",
    year: "1996",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000",
    imageAlt: "Sitp1996",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1996.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C2094%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=46",
  },
  {
    id: "shakespeare-1995",
    year: "1995",
    url: "https://www.pentagram.com/work/the-public-theater?setSerializedKey=2&exclude-slug=the-public-theater",
    imageUrl:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000",
    imageAlt: "Sitp1995",
    backgroundImage:
      "https://pentagram-production.imgix.net/ce804caf-ad6f-480d-ba21-9ebc4d7a7dcb/SITP1995.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1467%2C3000&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=65",
  },
];

// Quote data
const QUOTE_DATA = {
  text: "Curiosity is essential. Without it, you'll never break new ground'you won't discover what's possible.",
  author: "Jody Hudson-Powell",
};

// Helper function to generate image sources
const generateImageSources = (baseUrl) => {
  const sources = [
    {
      media: "screen and (max-width: 599px)",
      srcSet: `${baseUrl}&w=360&fm=jpg&q=70&auto=format&h=640, ${baseUrl}&w=360&q=70&fm=jpg&auto=format&h=640&dpr=2 2x`,
    },
    {
      media: "screen and (max-width: 799px)",
      srcSet: `${baseUrl}&w=700&fm=jpg&q=70&auto=format&h=1244, ${baseUrl}&w=700&q=70&fm=jpg&auto=format&h=1244&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 800px) and (max-width:1039px)",
      srcSet: `${baseUrl}&w=944&fm=jpg&q=70&auto=format&h=1678, ${baseUrl}&w=944&q=70&fm=jpg&auto=format&h=1678&dpr=2 2x`,
    },
    {
      media: "screen and (min-width: 1040px)",
      srcSet: `${baseUrl}&w=1304&fm=jpg&q=70&auto=format&h=2318, ${baseUrl}&w=1304&q=70&fm=jpg&auto=format&h=2318&dpr=2 2x`,
    },
  ];
  return sources;
};

// Retrospective Item Component
const RetrospectiveItem = ({ item }) => {
  const imageSources = generateImageSources(item.imageUrl);
  const mainImageSrc = `${item.imageUrl}&w=1500&fm=jpg&q=70&auto=format&h=2667`;

  return (
    <li data-behavior="lazyloadImg" className="w-full">
      <a href={item.url}>
        <span className="text-tertiary-inverse bg-secondary rounded-4 block pb-4 f-caption w-fit mb-8">
          {item.year}
        </span>
        <div className="w-full flex max-h-200 md:max-h-[300px] lg:max-h-[420px]">
          <div className="w-auto max-h-200 md:max-h-[300px] lg:max-h-[420px]">
            <picture
              className="relative w-auto z-5 bg-cover [&_img]:transition-all [&_img]:duration-300"
              style={{
                backgroundImage: `url('${item.backgroundImage}')`,
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
                alt={item.imageAlt}
                className="transition-opacity duration-300 object-cover h-full"
              />
            </picture>
          </div>
        </div>
      </a>
    </li>
  );
};

const Section4 = () => {
  return (
    <>
      <div
        className="block--dark serialized mt-spacing-9 overflow-hidden bg-dark pt-32 md:pt-48 pb-48 breakout"
        data-behavior="tracking"
      >
        <div className="container">
          <div className="flex flex-wrap gap-gutter relative">
            <div className="w-12-cols md:pr-12 lg:pr-32 xl:pr-64">
              <div className="w-10-cols md:w-8-cols">
                <h3 className="f-heading-1 text-inverse content-balance">
                  {RETROSPECTIVE_CONTENT.title}
                </h3>
              </div>
              <div className="w-12-cols sm:w-10-cols md:w-8-cols lg:w-6-cols text-tertiary-inverse f-body-1 pt-16 md:pt-24">
                {RETROSPECTIVE_CONTENT.description}
              </div>
            </div>

            <span className="block absolute f-body-1 top-0 right-0 mt-4 md:mt-0 text-inverse">
              {RETROSPECTIVE_CONTENT.count}
            </span>
          </div>
        </div>

        <RetrospectiveSwiper1 />

        <div className="mt-24 lg:mt-48 flex flex-row justify-center container">
          <button
            type="button"
            className="btn--secondary !bg-[#ffffff1f] !text-inverse hover:!bg-button-secondary-hover btn--icon"
            data-modal-target={`#${RETROSPECTIVE_CONTENT.modalId}`}
            data-tracking-element
            data-tracking-event="serialized_show_more"
            data-tracking-event-category="Serialized Show More"
            data-tracking-event-label={RETROSPECTIVE_CONTENT.title}
          >
            <span>Show more</span>
            <svg
              width="20"
              height="20"
              fill="none"
              className="ml-8"
              name="plus-20"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <use xlinkHref="#plus-20"></use>
            </svg>
          </button>
        </div>

        <div
          data-behavior="modal"
          id={RETROSPECTIVE_CONTENT.modalId}
          className="generic-modal py-24 overflow-scroll bg-inverse"
        >
          <div className="container bg-dark-tertiary rounded-8 pb-spacing-9 px-outer-gutter pt-48 sm:pt-24 relative">
            <div className="flex flex-wrap gap-x-gutter relative">
              <div className="w-12-cols md:pr-12 lg:pr-32 xl:pr-64">
                <div className="w-10-cols md:w-8-cols">
                  <h3 className="f-heading-1 text-inverse content-balance">
                    {RETROSPECTIVE_CONTENT.title}
                  </h3>
                </div>
                <div className="w-12-cols sm:w-10-cols md:w-8-cols lg:w-6-cols text-tertiary-inverse f-body-1 pt-16 md:pt-24">
                  {RETROSPECTIVE_CONTENT.description}
                </div>
              </div>

              <ul className="mt-spacing-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-gutter gap-y-spacing-9 justify-items-start w-full">
                {SHAKESPEARE_RETROSPECTIVE_DATA.map((item) => (
                  <RetrospectiveItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
            <div className="absolute z-10 inset-y-12 right-12 md:inset-y-16 md:right-16 lg:inset-y-24 lg:right-28 xl:right-32">
              <button
                type="button"
                className="btn sticky -top-8 w-34 h-34 flex justify-center items-center"
                data-modal-close
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className="text-inverse"
                  name="close-20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <use xlinkHref="#close-20"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block--dark pt-spacing-9 quote breakout">
        <div className="quote__inner pt-spacing-7 keyline-t before:border-t-primary-inverse bg-dark">
          <div className="container">
            <blockquote className="flex flex-col sm:justify-between">
              <div className="f-heading-4 sm:w-8-cols sm:ml-4-cols lg:pr-24 xl:pr-64">
                <p className="relative workQuote__text text-inverse content-pretty">
                  {QUOTE_DATA.text}
                </p>
                <cite className="mt-16 block pr-12 sm:mt-0 xl:pr-64">
                  <span className="f-body-1 text-inverse">
                    {QUOTE_DATA.author}
                  </span>
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;

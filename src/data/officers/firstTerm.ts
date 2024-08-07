import brenz from "/public/images/team/2022-2023/brenz.jpg";
import cyril from "/public/images/team/2023-2024/cyril.jpg";
import cjmarie from "/public/images/team/2022-2023/cjmarie.jpg";
import diesto from "/public/images/team/2022-2023/diesto.jpg";
import francis from "/public/images/team/2022-2023/francis.webp";
import jay from "/public/images/team/2022-2023/jay.jpg";
import kobe from "/public/images/team/2022-2023/kobe.png";
import kristian from "/public/images/team/2022-2023/kristian.jpeg";
import kyra from "/public/images/team/2022-2023/kyra.jpg";
import laica from "/public/images/team/2022-2023/laica.jpg";
import melvyn from "/public/images/team/2022-2023/melvyn.jpg";
import patrick from "/public/images/team/2022-2023/patrick.jpg";
import reate from "/public/images/team/2022-2023/reate.jpg";
import placeholder from "/public/images/placeholder.jpg";
import yman from "/public/images/team/2023-2024/yman.webp";
import krishna from "/public/images/team/2023-2024/krishna.webp";
import lindsay from "/public/images/team/2023-2024/lindsay.webp";
import hobert from "/public/images/team/2022-2023/hobert.jpg";

import OfficerType from "@/types/officerType";

const lead: OfficerType = {
  name: "Francis Nathanael De Villena",
  position: "Lead",
  imageSrc: francis,
  links: {
    linkedin: "https://www.linkedin.com/in/fnodevillena/",
    github: "https://github.com/fnodevillena",
  },
};

const ceo: OfficerType = {
  name: "Kristian Moreno",
  position: "CEO",
  imageSrc: kristian,
  links: {
    github: "https://github.com/KrXhian",
    linkedin: "https://www.linkedin.com/in/kristian-moreno-487a80215/",
  },
};

const technology: OfficerType[] = [
  {
    name: "Brenz Gwynne Hababag",
    position: "Chief Technology Officer",
    imageSrc: brenz,
    links: {
      linkedin: "https://www.linkedin.com/in/bghababag12/",
    },
  },
  {
    name: "Vincent Reate",
    position: "",
    imageSrc: reate,
    links: {
      facebook: "https://www.facebook.com/vincent.d.reate/",
      linkedin: "https://www.linkedin.com/in/vincent-reate-552613290/",
    },
  },
  {
    name: "Dave John Ferras",
    position: "",
    imageSrc: placeholder,
    links: {},
  },
  {
    name: "Cjmarie Jagape",
    position: "",
    imageSrc: cjmarie,
    links: {},
  },
  {
    name: "Jonard Ray Cabunag",
    position: "",
    imageSrc: placeholder,
    links: {},
  },
];

const communications: OfficerType[] = [
  {
    name: "Christian Kobe Marilao",
    position: "Chief Communications Officer",
    imageSrc: kobe,
    links: {
      facebook: "https://www.facebook.com/christiankobemarilao",
      linkedin: "https://www.linkedin.com/in/christian-kobe-marilao-521454214/",
    },
  },
  {
    name: "Melvyn John Paleguin",
    position: "",
    imageSrc: melvyn,
    links: {},
  },
  {
    name: "Jay Robert Lloyd Delicana",
    position: "",
    imageSrc: jay,
    links: {
      website: "https://www.behance.net/srdonyxxx",
      facebook: "https://www.facebook.com/sagbot.sa.dalan",
      linkedin:
        "http://www.linkedin.com/in/jay-robert-lloyd-delicana-a978b9312",
    },
  },
  {
    name: "Emmanuel Leyba",
    position: "",
    imageSrc: placeholder,
    links: {},
  },
];

const operations: OfficerType[] = [
  {
    name: "Yman Rey Fernandez",
    position: "Chief Operations Officer",
    imageSrc: yman,
    links: {
      website: "",
      facebook: "https://www.facebook.com/yrmfernandez/",
      linkedin: "https://www.linkedin.com/in/yrmfernandez",
      github: "https://github.com/yrmfernandez",
    },
  },

  {
    name: "Patrick Cruz",
    position: "",
    imageSrc: patrick,
    links: {},
  },
  {
    name: "Krishna Laureto",
    position: "",
    imageSrc: krishna,
    links: {
      website: "",
      linkedin: "www.linkedin.com/in/krishna-laureto",
      github: "",
    },
  },
  {
    name: "Lindsay Cañete",
    position: "",
    imageSrc: lindsay,
    links: {
      website: "",
      facebook: "https://www.facebook.com/lindsay.canete/",
      linkedin: "www.linkedin.com/in/lindsay-canete",
      github: "https://github.com/issayyyy",
    },
  },
];

const financeAndExternals: OfficerType[] = [
  {
    name: "Laica Pearl Alcantara",
    position: "Chief Finance and Externals Officer",
    imageSrc: laica,
    links: {},
  },
  {
    name: "Kyra Jane Melendres",
    position: "",
    imageSrc: kyra,
    links: {},
  },
  {
    name: "Francis Ryan Diesto",
    position: "",
    imageSrc: diesto,
    links: {
      linkedin: "www.linkedin.com/in/francis-ryan-diesto",
      facebook: "https://www.facebook.com/francisryan.diesto",
    },
  },
];

const humanResource: OfficerType = {
  name: "Cyril Kent Bordios",
  position: "Chief Human Resource Officer",
  imageSrc: cyril,
  links: {
    linkedin: "https://www.linkedin.com/in/kentcyrildb3/",
    facebook: "https://web.facebook.com/kentcyril.db4",
  },
};

const adviser: OfficerType = {
  name: "Hobert Abrigana",
  position: "Adviser",
  imageSrc: hobert,
  links: {
    website: "https://www.usep.edu.ph/ic/faculty-and-staff/#hobert-a-abrigrana2",
    linkedin: "",
    github: "",
  },
};

export {
  lead,
  ceo,
  communications,
  financeAndExternals,
  technology,
  operations,
  adviser,
  humanResource,
};

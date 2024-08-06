import { StaticImageData } from "next/image";

interface OfficerType {
  name: string;
  imageSrc: StaticImageData;
  position: string;
  links: {
    facebook?: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
}

export default OfficerType;

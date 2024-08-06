import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import OfficerType from "@/types/officerType";

interface Props {
  data: OfficerType;
  className?: string;
}

export default function OfficerCard({ data, className }: Props) {
  return (
    <div className={"w-[220px] text-center " + className}>
      <div>
        <Image
          src={data.imageSrc}
          alt={data.name}
          width={180}
          height={180}
          className="rounded-xl mx-auto"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <p className="text-md">{data.position}</p>
      </div>
      <div
        className="text-light-blue-800 flex gap-1 justify-center"
        style={{ fontSize: "30px" }}
      >
        {data.links.facebook ? (
          <a
            href={data.links.facebook}
            target="
          _blank"
            rel="
          noopener noreferrer"
          >
            <FacebookIcon fontSize="inherit" />
          </a>
        ) : null}
        {data.links.website ? (
          <a
            href={data.links.website}
            target="
          _blank"
            rel="
          noopener noreferrer"
          >
            <LanguageIcon fontSize="inherit" />
          </a>
        ) : null}
        {data.links.linkedin ? (
          <a
            href={data.links.linkedin}
            target="
          _blank"
            rel="
          noopener noreferrer"
          >
            <LinkedInIcon fontSize="inherit" />
          </a>
        ) : null}
        {data.links.github ? (
          <a
            href={data.links.github}
            target="
            _blank"
            rel="
            noopener noreferrer"
          >
            <GitHubIcon fontSize="inherit" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

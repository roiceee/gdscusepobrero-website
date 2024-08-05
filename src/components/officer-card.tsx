import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

interface Props {
  data: OfficerType;
  className?: string;
}

export default function OfficerCard({ data, className }: Props) {
  return (
    <div className={"w-[180px] text-center " + className}>
      <div>
        <Image
          src={data.imageSrc}
          alt={data.name}
          width={180}
          height={180}
          className="rounded-xl"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p className="text-md">{data.position}</p>
      </div>
      <div className="mt-2 text-light-blue-800 flex gap-1 justify-center">
        {data.links.facebook ? (
          <a
            href={data.links.facebook}
            target="
          _blank"
            rel="
          noopener noreferrer"
          >
            <FacebookIcon fontSize="large" />
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
            <LanguageIcon fontSize="large" />
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
            <LinkedInIcon fontSize="large" />
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
            <GitHubIcon fontSize="large" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

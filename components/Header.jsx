import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import img from "../public/coder.png";
import Link from "next/link";

export default function Header() {
  const handleClick = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#180c1a] h-[100vh] overflow-hidden header-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="flex gap-4 sm:gap-8 sm:px-16 px-4 py-5 bg-transparent">
        <h3 className="text-gray-300 text-2xl sm:text-4xl hover:text-gray-100 font-bold cursor-pointer">
          Raahim Zee.
        </h3>
        <div className="flex-grow"></div>
        <h3
          onClick={() => handleClick("introduction")}
          className="text-gray-300 text-xl sm:text-2xl self-center hover:text-gray-100 font-extralight cursor-pointer"
        >
          About
        </h3>
        <h3
          onClick={() => handleClick("skills")}
          className="text-gray-300 text-xl sm:text-2xl self-center hover:text-gray-100 font-extralight cursor-pointer"
        >
          Skills
        </h3>
        <h3
          onClick={() => handleClick("experience")}
          className="text-gray-300 text-xl sm:text-2xl self-center hover:text-gray-100 font-extralight cursor-pointer"
        >
          Experience
        </h3>
        {/* <h3 className="text-gray-300 text-2xl self-center hover:text-gray-100 font-extralight cursor-pointer">
          Projects
        </h3> */}
      </div>

      <div className="header-title">
        <h3 className="text-white text-2xl font-extralight">I'm a</h3>
        <h1 className="text-white text-5xl sm:text-6xl font-semibold">
          <em className="text-cyan-400">Pro</em>grammer
        </h1>
        <h3 className="text-white text-2xl font-extralight mt-2">
          Karachi, Pakistan
        </h3>
      </div>

      <div className="coder-image">
        <Image
          src={img}
          alt="Picture of the author"
          width={666.6}
          height={500}
        />
      </div>

      <div className="absolute bottom-6 right-0 left-0 ml-auto mr-auto w-fit">
        <div className="flex gap-[15vh]">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raahim-zeeshan-276827162/"
            className="text-gray-300 hover:text-gray-100"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            target="_blank"
            href="https://github.com/raahimz"
            className="text-gray-300 hover:text-gray-100"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/raahimz"
            className="text-gray-300 hover:text-gray-100"
          >
            <TwitterIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

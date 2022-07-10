import Image from "next/image";
import img from "../public/profile-picture.jpeg";

export default function Introduction() {
  return (
    <div
      className="bg-gradient-to-r from-cyan-600 to-cyan-500  h-fit min-h-[35vh] p-6 shadow-lg"
      id="introduction"
    >
      <div className="text-center drop-shadow-md">
        <Image
          src={img}
          alt="Picture of the author"
          className="rounded-full"
          width={120}
          height={120}
        />
      </div>
      <p className="font-semibold text-4xl text-white text-center pt-4 drop-shadow-md">
        👋 Hello!
      </p>
      <p className="font-normal text-2xl text-gray-100 text-center pt-2 drop-shadow-sm">
        Let me take you on a tour...
      </p>
      <p className="ml-auto mr-auto text-2xl font-light text-gray-100 text-center pt-6 line max-w-[60ch]">
        Being the absolute Tech Geek that I am, I am indulged in constant
        learning of various technologies including Cloud, Scripting, Automation,
        Web Dev. Everything IT gives me joy, and it’s in fact my passion. As of
        now, I’m trying to kick-start my career with practical & professional
        experience in the industry.
      </p>
    </div>
  );
}

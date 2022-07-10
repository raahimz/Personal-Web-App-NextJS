const projects = [];
import Image from "next/image";

export default function Projects() {
  return (
    <div
      className="bg-gradient-to-r from-cyan-600 to-cyan-500  h-fit min-h-[35vh] p-6 shadow-lg"
      id="projects"
    >
      {" "}
      <p className="font-semibold text-4xl text-white text-center pt-4 drop-shadow-md">
        Projects
      </p>
      <div className="mt-16 sm:ml-16 ml-2 flex justify-center">
        <div className="bg-gray-300 p-2 w-[25%] rounded-lg">
          <p className="text-gray-700 font-bold text-xl">
            Cool Project{" "}
            <a
              href="/"
              className="font-light text-sm cursor-pointer text-blue-900 hover:text-blue-500"
            >
              {"("}check it out{")"}
            </a>
          </p>
          <p className="text-gray-600">
            Description Lorem Ipsum Lorem Ipsum Ivy Div MIc Lorem Ipsum Ivy Div
            MIc
          </p>
          <div className="max-w-[40ch]">
            <span class="bg-blue-100 text-gray-600 text-sm font-medium mr-1 px-1.5 py-0.5 rounded">
              Current
            </span>
            <span class="bg-blue-100 text-gray-600 text-sm font-medium mr-1 px-1.5 py-0.5 rounded">
              Current
            </span>
            <span class="bg-blue-100 text-gray-600 text-sm font-medium mr-1 px-1.5 py-0.5 rounded">
              Current
            </span>
            <span class="bg-blue-100 text-gray-600 text-sm font-medium mr-1 px-1.5 py-0.5 rounded">
              Current
            </span>
            <span class="bg-blue-100 text-gray-600 text-sm font-medium mr-1 px-1.5 py-0.5 rounded">
              Current
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

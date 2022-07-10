const frontend = [
  {
    title: "React JS",
    level: "100%",
  },
  {
    title: "Next JS",
    level: "100%",
  },
  {
    title: "Tailwind CSS",
    level: "75%",
  },
  {
    title: "Material UI / Bootstrap",
    level: "75%",
  },
  {
    title: "Redux",
    level: "25%",
  },
];
const backend = [
  {
    title: "Express JS",
    level: "100%",
  },
  {
    title: "Node JS",
    level: "100%",
  },
  {
    title: "Rest API",
    level: "75%",
  },
  {
    title: "Mongo DB / Mongoose",
    level: "75%",
  },
  {
    title: "Python / Django / Flask",
    level: "50%",
  },
];

export default function Skills() {
  return (
    <div className="p-6" id="skills">
      <h1 className="text-4xl font-bold text-center text-gray-700 drop-shadow-md">
        Skills
      </h1>

      <div className="mt-16 flex justify-center gap-4 skills-container">
        <div className="w-[50%] border-2 border-gray-300 p-2 rounded-lg min-w-[350px] shadow-md">
          <div className="text-lg text-center text-gray-700 font-bold">
            Front-end
          </div>

          {frontend.map((skill, index) => (
            <div key={index} className="mt-1">
              <div class="mb-1 text-md font-normal text-gray-600">
                {skill.title}
              </div>
              <div class="w-full h-4 bg-gray-200 rounded-full">
                <div
                  class="h-4 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[50%] border-2 border-gray-300 p-2 rounded-lg min-w-[350px] shadow-md">
          <div className="text-lg text-center text-gray-700 font-bold">
            Back-end
          </div>

          {backend.map((skill, index) => (
            <div key={index} className="mt-1">
              <div class="mb-1 text-md font-normal text-gray-600">
                {skill.title}
              </div>
              <div class="w-full h-4 bg-gray-200 rounded-full">
                <div
                  class="h-4 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

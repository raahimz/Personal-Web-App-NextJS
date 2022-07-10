const experiences = [
  {
    title: "Internship @ Barbarians LLC",
    roles: [
      "Write automated tests for web applications",
      "Debug web applications",
      "Assist in developing new features for web applications",
    ],
    skills: ["React JS", "Webdriver IO", "Pactum JS", "Rest API", "Express JS"],
    date: "July 2022 - Now",
    current: true,
  },
  {
    title: "Independant Contractor @ Promohands",
    roles: [
      "Fetch large data from using an API",
      "Sort, filter, format, rank and manipulate data",
      "Upload ranked data to a database",
    ],
    skills: ["Python", "Data Handling", "Rest API", "CSV"],
    date: "June 2021",
    current: false,
  },
  {
    title: "Independant Contractor @ Eyewatch",
    roles: ["Developed augmented reality filters for Instagram"],
    skills: ["Spark AR", "Augmented Reality"],
    date: "January 2019",
    current: false,
  },
];

export default function Experience() {
  return (
    <div className="p-6" id="experience">
      <h1 className="text-4xl font-bold text-center text-gray-700 drop-shadow-md">
        Experience
      </h1>
      <div className="mt-16 sm:ml-16 ml-2 flex justify-center">
        <ol class="relative border-l border-green-400">
          {experiences.map((exp, index) => (
            <li key={index} class="mb-10 ml-6">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white">
                <svg
                  class="w-3 h-3 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-700">
                {exp.title}{" "}
                {exp.current && (
                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    Current
                  </span>
                )}
              </h3>
              <time class="block mb-2 text-sm font-semibold leading-none text-gray-400">
                {exp.date}
              </time>
              <div class="mb-4 text-base font-normal text-gray-500">
                {exp.roles.map((role, index) => (
                  <p key={index}>• {role}</p>
                ))}
              </div>
              <div className=" max-w-[40ch]">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    class="bg-blue-100 text-gray-500 text-sm font-medium mr-1 mt-1 px-2.5 py-0.5 rounded inline-block"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
          <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Start ✈️
          </span>
        </ol>
      </div>
    </div>
  );
}

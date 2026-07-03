export default function Project({ project }) {
  return (
    <div className=" w-[350px] p-[30px] border-[1px] border-[#94a3b8] hover:scale-105 hover:border-[#914bf1] rounded-2xl transition duration-500 ease-in-out">
      <div>
        <img
          src={project.image}
          alt=""
          className="h-[200px] w-[330px] rounded-xl"
        />
      </div>
      <div className="flex flex-col mt-[10px]">
        <h1 className="text-3xl text-white text-center">{project.name}</h1>
        <p className="text-lg text-center mt-[5px] opacity-80 text-[#94a3b8]">
          {project.description}
        </p>

        <div className="flex gap-[15px] justify-center mt-[15px]">
          {project.technologies.map((tech, index) => (
            <div
              className="px-[10px] p-[4px] rounded-2xl bg-[#914bf1]  text-white"
              key={index}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

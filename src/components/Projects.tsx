import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      imageUrl: "/proiecte/1.jpg",
    },
    {
      imageUrl: "/proiecte/2.jpg",
    },
    {
      imageUrl: "/proiecte/3.jpg",
    },
    {
      imageUrl: "/proiecte/4.jpg",
    },
  ];
  return (
    <div className="min-h-screen h-max py-10 w-screen flex flex-col items-center">
      <div className="text-4xl pb-[50vh] sticky top-[20vh]">Projects</div>
      <div className="pb-[10vh]">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i + 1} imageUrl={project.imageUrl} />
        ))}
      </div>
      <div className="btn btn-xl z-10">More</div>
    </div>
  );
}

const ProjectCard = ({
  name,
  imageUrl,
  description,
  index,
}: {
  name?: string;
  imageUrl: string;
  description?: string;
  index: number;
}) => {
  return (
    <div
      className="w-[80vw] h-[70vh]  sticky shadow-2xl rounded-2xl border-2 border-slate-700/60"
      style={{
        top: `${index * 8}vh`,
      }}
    >
      <div
        className="absolute z-0 inset-0 bg-base-200 rounded-2xl"
        style={{
          filter: `brightness(${index * 20}%)`,
        }}
      ></div>
      <div className="inset-0 relative p-8 h-full">
        <Image
          src={imageUrl}
          height={1000}
          width={2000}
          alt=""
          className=" aspect-video h-full rounded-lg basis-1/2 object-cover object-center"
        />
      </div>
    </div>
  );
};

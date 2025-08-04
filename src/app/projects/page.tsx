import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen h-full w-screen grid grid-cols-3 gap-10 py-20 px-10">
      {[1, 2, 3, 4].map((project, index) => {
        return <ProjectCard key={index + "project"} />;
      })}
    </div>
  );
}

const ProjectCard = () => {
  return (
    <div className="h-full w-full rounded-md relative  bg-white ">
      <div className="relative rounded-md h-full w-full">
        <Image
          src="/beliefs.jpg"
          height={1000}
          width={1000}
          alt=""
          className="w-full h-full rounded-md basis-1/2 object-cover invert "
        />
      </div>
      <div className=" w-full h-full opacity-0 transition-opacity hover:opacity-100 absolute inset-0 duration-1000 rounded-md">
        <Image
          src="/beliefs.jpg"
          height={1000}
          width={1000}
          alt=""
          className="w-full h-full rounded-md basis-1/2 object-cover "
        />
      </div>
    </div>
  );
};

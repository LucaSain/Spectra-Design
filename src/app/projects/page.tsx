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
    <div className="h-full w-full rounded-md  bg-white ">
      <div className="bg-red-400 w-full h-full opacity-0 transition-opacity hover:opacity-100  duration-1000 rounded-md"></div>
    </div>
  );
};

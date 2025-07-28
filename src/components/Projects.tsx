export default function Projects() {
  return (
    <div className="min-h-screen h-max py-10 w-screen flex flex-col items-center">
      <div className="text-4xl pb-[50vh] sticky top-[20vh]">Projects</div>
      <div className="pb-[10vh]">
        {[1, 2, 3, 4].map((x, i) => (
          <ProjectCard key={i} index={i + 1} />
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
  imageUrl?: string;
  description?: string;
  index: number;
}) => {
  return (
    <div
      className="w-[80vw] h-[70vh] bg-base-300 sticky shadow-2xl rounded-2xl border-2 border-slate-700/20"
      style={{ top: `${index * 8}vh` }}
    >
      <div className="text-white text-2xl p-4">Project {index + 1}</div>
    </div>
  );
};

import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen h-max py-10 w-screen flex flex-col items-center">
      <div className="text-4xl pb-[50vh] sticky top-[20vh]">Projects</div>
      <div className="pb-[10vh]">
        {[1, 2, 3, 4].map((x, i) => (
          <ProjectCard key={i} index={i + 1} imageUrl="/beliefs.jpg" />
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
      className="w-[80vw] h-[70vh]  sticky shadow-2xl rounded-2xl border-2 border-slate-700/20"
      style={{
        top: `${index * 8}vh`,
      }}
    >
      <div
        className="absolute z-0 inset-0 bg-base-200 rounded-2xl"
        style={{
          filter: `brightness(${index * 10}%)`,
        }}
      ></div>
      <div className="inset-0 relative flex flex-col sm:flex-row p-8 h-full">
        <div className="basis-1/2">
          <div className=" text-white text-2xl rounded-2xl">
            Project {index + 1}
          </div>
        </div>
        <Image
          src={imageUrl}
          height={1000}
          width={1000}
          alt=""
          className="w-full h-full rounded-lg basis-1/2 object-cover object-center"
        />
      </div>
    </div>
  );
};

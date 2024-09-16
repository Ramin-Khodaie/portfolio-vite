import { cn } from "../lib/utils";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    heading: string;
    technologies: string[];
    image: string;
  };
  isReversed: boolean;
}
function Project({ project, isReversed }: ProjectProps) {
  return (
    <article className="grid grid-cols-10">
      <div
        className={cn(
          "grid col-[5/11] row-[1/2] text-center",
          isReversed && "col-[1/7] text-left"
        )}
      >
        <h4 className="m-0 text-base">{project.heading}</h4>
        <h3 className="text-[--aqua]">{project.title}</h3>
        <p className="bg-black p-4 text-base text-white rounded-xl z-10">{project.description}</p>
        <h4 className="m-0 text-base">Technologies used include:</h4>
        <ul className={cn("p-0 m-0 text-base flex justify-center gap-4", isReversed && "justify-start")}>
          {project.technologies.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
      <img
        className={cn(
          "col-[1/6] row-[1/2] mt-8 mr-0 mb-16 ml-0 p-4 border-l border-l-red-200 border-t border-t-red-200 rounded-[25px]",
          isReversed && "col-[5/11]"
        )}
        src={project.image}
        alt="Image of project"
      />
    </article>
  );
}

export default Project;

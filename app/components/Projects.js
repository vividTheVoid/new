import Link from "next/link";
import ProjectsCards from "./ProjectsCards";
const data = [{ name: "", techStack: "", liveUrl: "https://ipl-dashblify.app/", github: "https://github.com/aard", thumbnail: "https://res.cloudinary.com/dfhjkegprdja/image/upload/v1692451890/Screenshot_2023-08-19_at_7.00.40_PM_meli80.png", title: "Visualize Insights Seamlessly" },
{ name: "", techStack: "", liveUrl: "https://kanbanghjghgjclone-mel.app/", github: "https://github.com/ahujanban-clone", thumbnail: "https://res.cloudinary.com/df45egprdja/image/upload/v1692454199/Screenshot_2023-08-19_at_7.39.43_PM_wwd38d.png", title: "MODERN TODO APP" },
{ name: "", techStack: "", github: "https://gict", thumbnail: "https://res.cloudinary.com/dfprdja/image/upload/v1692455222/Screenshot_2023-08-19_at_7.56.40_PM_hqibca.png", title: "FULLSTACK WEB APP" }
]

export default function Projects(props) {
  const { workPage } = props
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className='text-[#C778DD]'>{(workPage) ? "/" : "#"}</span><span className="text-white">projects</span>
            </div>
            {(!workPage) && <div className=" w-80 h-[1px] bg-[#C778DD] max-md:hidden">
            </div>}
          </div>
          {(!workPage) && <div>
            <Link href={"/work"}><p className=" cursor-pointer hover:text-[#ABB2BF] text-base font-medium text-white">View all ~~&gt;</p></Link>
          </div>}

        </div>
        {
          (workPage) && <div className="text-white  font-normal text-base mb-4">List of my projects</div>
        }
        {(workPage) && <div className="text-3xl font-medium">
          <span className='text-[#C778DD]'>#</span><span className="text-white">completed-apps</span>
        </div>}
        <div>
          <ProjectsCards data={data} />
        </div>
      </div>
    </div>
  )
}

import Image from "next/image";
import Link from "next/link";
const contacts = [{ img: "/Discord.png", alt: "disord icon", href: "https://discordapp.com/users/9388446406", text: "!abhikr#7305" },
{ img: "/Email.png", alt: "email icon", href: "mailto: abhikr62hotmail@gamil.com", text: "abhikr62hotmail@gamil.com" },
{ img: "/Linkedin.png", alt: "linkedin icon", href: "https://www.linkedin.com/in/abhikr62/", text: "@abhikr62" }
]

export default function Footer() {
  return (
    <footer className="border-t mt-32 border-white">
      <div className="ml-36 mr-32 mt-8 max-sm:ml-5 max-sm:mr-5">
        <div className="flex justify-between flex-wrap max-md:gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              <Image height={16} width={16} alt="small logo" src={"/logo.png"} />
              <span className=" text-base text-white font-medium">vivid</span>
              <Link target="_blank" href={"mailto: abhikr62hotmail@gmail.com"}><span className="text-[#ABB2BF] text-base font-normal">abhikr62hotmail@gamil.com</span></Link>
            </div>
            <div className="text-white font-normal text-base">
              Full Stack Web App Developer
            </div>
            <div className="text-white font-normal text-xs">
              <Link target="_blank" href={"https://www.figma.com/community/file/1164933568884615740/Portfolio"}>Design Credit ~ Elias/Abhikr from Figma community</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-white text-2xl font-medium">
              Social Media
            </div>
            <div className="flex gap-3 items-center">
              {
                contacts?.map((item, idx) => {
                  return (
                    <div key={idx + item?.href} >
                      <Link target="_blank" href={item?.href}><Image
                        src={item?.img}
                        height={32}
                        width={32}
                        alt={item?.alt}
                      />
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="my-7">
          <p className="text-center text-[#ABB2BF] text-base font-normal">; Copyright 2024 / Made by vivid/Nevada/Krito/Invincible</p>
        </div>
      </div>
    </footer>
  )
}

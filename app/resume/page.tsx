"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "Sobre mim",
  description:
    "Desenvolvedor Front-End, com experiência em desenvolvimento de sites e aplicações web. Atualmente, estou focado em desenvolvimento de aplicações web com ReactJS e NextJS. Além disso, tenho conhecimento em UI/UX Design, utilizando Figma para criação de protótipos e design de interfaces. Também tenho conhecimento em Back-End, utilizando NodeJS para criação de APIs RESTful.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Erivelton Matos",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(85) 9 97247193",
    },
    {
      fieldName: "Experiência",
      fieldValue: "3 + anos",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "eriveltonsdmatos@gmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Inglês: Intermediário",
    },
  ],
};

//experiência data
const experience = {
  Icon: "/assets/resume/badge.svg",
  title: "Experiência",
  description:
    "Desenvolvedor Front-End, com experiência em desenvolvimento de sites e aplicações web. Atualmente, estou focado em desenvolvimento de aplicações web com ReactJS e NextJS. Além disso, tenho conhecimento em UI/UX Design, utilizando Figma para criação de protótipos e design de interfaces. Também tenho conhecimento em Back-End, utilizando NodeJS para criação de APIs RESTful.",
  items: [
    {
      company: "Unichristus",
      position: "Desenvolvedor FullStack",
      duration: "2022 - Present",
    },
    {
      company: "Cartório Botelho",
      position: "Suporte de TI",
      duration: "2014 - 2022",
    },
  ],
};

// educação data
const education = {
  Icon: "/assets/resume/cap.svg",
  title: "Educação",
  description:
    "Desenvolvedor Front-End, com experiência em desenvolvimento de sites e aplicações web. Atualmente, estou focado em desenvolvimento de aplicações web com ReactJS e NextJS. Além disso, tenho conhecimento em UI/UX Design, utilizando Figma para criação de protótipos e design de interfaces. Também tenho conhecimento em Back-End, utilizando NodeJS para criação de APIs RESTful.",
  items: [
    {
      institution: "Unifametro",
      course:
        "Pós-Graduação em Engenharia de Software, DevOps e Cloud Computing",
      duration: "2024 - Present",
    },
    {
      institution: "Estácio",
      course: "Bacharelado em Sistemas de Informação",
      duration: "2019 - 2023",
    },
  ],
};

//skills data
const skills = {
  title: "Habilidades",
  description:
    "Desenvolvedor Front-End, com experiência em desenvolvimento de sites e aplicações web. Atualmente, estou focado em desenvolvimento de aplicações web com ReactJS e NextJS. Além disso, tenho conhecimento em UI/UX Design, utilizando Figma para criação de protótipos e design de interfaces. Também tenho conhecimento em Back-End, utilizando NodeJS para criação de APIs RESTful.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experiece" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experiência </TabsTrigger>
            <TabsTrigger value="education"> Educação </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="about"> Sobre mim </TabsTrigger>
          </TabsList>

          {/*conteúdo*/}
          <div className="min-h-[70vh] w-full">

            {/*experiência*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*educação*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">{item.course}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*sobre*/}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

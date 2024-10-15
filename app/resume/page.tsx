"use client";
import unichristus from "../public/assets/logo-unichristus.png";
import cartorio from "../public/assets/logo-cartorio.png";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import { TbBrandTypescript } from "react-icons/tb";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiSpring,
} from "react-icons/si";

//about data
const about = {
  title: "Sobre mim",
  description:
    "Desenvolvedor de Software com 10 anos de experiência na área de TI, especializado em projetos web de grande escala. Bacharel em Sistemas de Informação, com pós-graduação em Engenharia de Software, DevOps e Cloud Computing. Atualmente, trabalho como desenvolvedor fullstack na Unichristus, onde atuo no desenvolvimento de sistemas utilizando Java/Spring e React/Next.js.",
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
    "Atuo como desenvolvedor fullstack com foco na stack Java/Spring e com Javascript/Typescript utilizando Next.js em conjunto com a biblioteca React. Trabalhei com uma variedade de projetos, desde projetos legados monolitos à projetos novos utilizando arquitetura de microservices.",
  items: [
    {
      image: unichristus,
      company: "Unichristus",
      position: "Desenvolvedor FullStack",
      duration: "2022 - Present",
      responsabilities:
        "Responsável pela manutenção e desenvolvimento de recursos nos diversos sistemas da instituição. Minha atuação envolve tanto o desenvolvimento de sistemas novos utilizando Next.Js/React com Java/Spring, quanto a manutenção e atualização de projetos legados utilizando Java/Spring com Thymeleaf.  ",
      assignments: [
        "Front-End: Trabalho com HTML5, CSS3, JavaScript, TypeScript, React, Next.js para sistemas SSR (Server-Side Rendering) e Angular. Também trabalho com PrimeReact e Shadcn/UI para criação de interfaces dinâmicas, além de utilizar Tailwind CSS para estilização de componentes. Também utilizo Axios para requisições HTTP.",
        "Back-End: Experiência com Java 8 em projetos legados e Java 17+ em projetos atuais com arquitetura de microservices. Em ambos os casos, utilizo o ecossistema Spring (Spring Data, Spring JPA, Spring Security, entre outros) para o desenvolvimento de APIs REST. Também trabalho com Maven para gerenciamento de dependências e builds. ",
        "Bancos de Dados: PostgreSQL e MySQL para armazenamento e gerenciamento de dados.",
        "Metodologias Ágeis e Gestão de Projetos: Experiência com Scrum e metodologia KanBan utilizando Trello para gerenciamento ágil de projetos e sprints.",
        "Ferramentas e Tecnologias Adicionais: Git e GitLab para controle de versão e colaboração em projetos. Uso de ferramentas como Docker para conteinerização de aplicações, além de automação de pipelines de CI/CD com GitLab CI e outras ferramentas de design como Figma e Canva para auxiliar no front-end.",
      ],
    },
    {
      image: cartorio,
      company: "Cartório Botelho",
      position: "Suporte de TI",
      duration: "2014 - 2022",
      responsabilities:
        "Atuei em Suporte de TI por quase 8 anos, desenvolvendo soluções automatizadas com Python para otimizar processos. Fui responsável pela instalação e configuração de software e hardware, além de oferecer suporte técnico aos usuários, garantindo uma utilização eficaz das ferramentas disponíveis.",
      assignments: [
        "Desenvolvi scripts e ferramentas automatizadas em linguagens como Python utilizando PyAutoGUI e Selenium para otimizar tarefas repetitivas e resolver problemas recorrentes.",
        "Gerenciamento de Software e Hardware: Fornecia assistência técnica para à instalação, configuração e resolução de problemas relacionados ao software e hardware da empresa, capacitando os usuários a utilizarem as ferramentas de forma  eficaz. ",
      ],
    },
  ],
};

// educação data
const education = {
  Icon: "/assets/resume/cap.svg",
  title: "Educação",
  description:
    "Bacharel em Sistemas de Informação e atualmente cursando pós-graduação em Engenharia de Software, DevOps e Cloud Computing na Unifametro.",
  items: [
    {
      institution: "Unifametro",
      course:
        "Pós-Graduação em Engenharia de Software, DevOps e Cloud Computing",
      duration: "2023 - Present",
    },
    {
      institution: "Estácio",
      course: "Bacharelado em Sistemas de Informação",
      duration: "2017 - 2021",
    },
  ],
};

//skills data
const skills = {
  title: "Habilidades",
  description:
    "Minhas hardskills são focadas na stack TypeScript/Java, com experiência em desenvolvimento front-end utilizando React e Next.js, e back-end com Spring Boot. Além disso, tenho conhecimento em ferramentas de versionamento como Git, CI/CD com GitLab CI/CD e Docker para a criação de ambientes consistentes. Tenho também experiência com bancos de dados relacionais como PostgreSQL e MySQL. Familiarizado com práticas de DevOps e metodologias ágeis (Scrum e Kanban), estou sempre buscando adotar boas práticas de código.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <TbBrandTypescript />,
      name: "Typescript",
    },
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
      icon: <SiSpring />,
      name: "Spring",
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
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
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
import Image from "next/image";

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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
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
                <p className=" text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <div className="flex justify-between items-center w-full">
                            <h3 className="text-xl text-center lg:text-left">
                              {item.position}
                            </h3>
                            <span className="text-accent text-right">
                              {item.duration}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Image
                              src={item.image}
                              alt="logo"
                              width={29}
                              className="rounded-full"
                            />
                            <p className="text-accent text-2xl">
                              {item.company}
                            </p>
                          </div>
                          <div className="flex items-center lg:text-st gap-3 text-justify">
                            <p className="">{item.responsabilities}</p>
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            {Array.isArray(item.assignments) ? (
                              item.assignments.map((assignment, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  {/* Bolinha azul */}
                                  <span className="w-[8px] h-[8px] rounded-full bg-accent flex-shrink-0 mt-3"></span>
                                  {/* Texto */}
                                  <p className="text-justify">{assignment}</p>
                                </div>
                              ))
                            ) : (
                              <div className="flex items-start gap-2">
                                {/* Bolinha azul */}
                                <span className="w-[8px] h-[8px] rounded-full bg-accent flex-shrink-0 mt-3"></span>
                                {/* Texto */}
                                <p className="">{item.assignments}</p>
                              </div>
                            )}
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
                <p className="text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.course}
                          </h3>
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
                  <p className="text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*sobre*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
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

"use client";
import website from "../public/assets/project3.png";
import eritube from "../public/assets/eritube.png";
import cafe from "../public/assets/cafe.png";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { TooltipContent } from "@radix-ui/react-tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Dom Diego Barbearia",
    title: "Project 1",
    description:
      "Projeto freelancer para a barbearia Dom-Diego localizada na Av. Bezerra de Menezes em Fortaleza, Ceará. O projeto foi desenvolvido com as tecnologias mais recentes do mercado, como Next.js, Tailwind CSS, TypeScript e Framer Motion.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Framer Motion" },
    ],
    image: website,
    live: "https://barbearia-dom-diego.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "EriTuBe Youtube Pessoal",
    title: "Project 2",
    description:
      "Meu youtube pessoal, criado utilizando a API do próprio youtube (Data V3), com o intuito de trazer minhas pesquisas e estudos mais rapidamente",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Javascript" },
      { name: "MaterialUI" },
    ],
    image: eritube,
    live: "https://eritube.vercel.app/",
    github: "https://github.com/EriveltonMatos/eri-tube",
  },
  {
    num: "03",
    category: "Café sem Bug",
    title: "Café sem Bug",
    description:
      "Um dos primeiros projetos que criei utilizando html, css e javascript, apenas para estudo.",
    stack: [{ name: "HTML5" }, { name: "CC3" }, { name: "Javascript" }],
    image: cafe,
    live: "https://cafe-sem-bug.vercel.app/",
    github: "https://github.com/EriveltonMatos/cafe-sem-bug",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: unknown }) => {
    const currentIndex = swiper.activeIndex as number;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projeto em Produção</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório no Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-screen h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="website"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles={""}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

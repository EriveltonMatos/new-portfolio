"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desenvolvedor Web",
    description:
      "Ofereço serviços de desenvolvimento web, criando sites e aplicações responsivas e funcionais.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Tenho experiência com UI/UX Design utilizando o Figma como ferramente principal de prototipagem e design de interfaces.",
    href: "",
  },
  {
    num: "03",
    title: "Editor de Vídeos",
    description:
      "Utilizo o DaVinci Resolve como editor principal e ofereço edição de vídeos para diversos formatos, como vídeos para youtube, tutoriais, etc.",
    href: "",
  },
  {
    num: "04",
    title: "Design Gráfico Personalizado",
    description:
      "Design de logotipo, cartão de visita, midias sociais como posts para instagram, facebook, etc.",
    href: "",
  },
];

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:"easeIn"} }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ffff] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ffff] transition-all duration-500">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

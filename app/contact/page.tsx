"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
  {
    Icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(85) 997247193",
  },
  {
    Icon: <FaEnvelope />,
    title: "Email",
    description: "eriveltonsdmatos@gmail.com",
  },
];

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* formulário */}
          <div className="xl:w-[70%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Vamos trabalhar juntos!</h3>
              <p className="text-white/60">
                Me para seu próximo projeto e tenha um site incrível.{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Primeiro Nome" />
                <Input type="lastname" placeholder="Sobrenome" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Telefone" />
              </div>

              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione um Serviço</SelectLabel>
                    <SelectItem value="est">
                      Desenvolvedor de Software
                    </SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="cst">Editor de Vídeos</SelectItem>
                    <SelectItem value="mst">Designer de Produto</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Digite sua Mensagem."
              />
              <Button size="md" className="max-w-40">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          {/* informações */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.Icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-accent">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

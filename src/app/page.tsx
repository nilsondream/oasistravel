'use client'
import { containerVariants, itemVariants } from "@/animations";
import { motion } from "motion/react"

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center min-h-screen relative">
        <video
          src="/oasisdrone.mp4"
          autoPlay muted loop
          className="absolute z-0 object-cover w-full h-full"
        />
        <div className="absolute z-10 bottom-5 text-white h-[20rem] overflow-hidden flex items-center justify-center">
          <motion.h1
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className="flex font-custom font-bold tracking-tight pr-2 hero-custom cursor-default uppercase text-[20.5vw]"
          >
            <motion.span variants={itemVariants}>O</motion.span>
            <motion.span variants={itemVariants}>A</motion.span>
            <motion.span variants={itemVariants}>S</motion.span>
            <motion.span variants={itemVariants}>I</motion.span>
            <motion.span variants={itemVariants}>S</motion.span>
          </motion.h1>
        </div>
      </div>
    </main>
  );
}

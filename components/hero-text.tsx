"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Transform",
    },
    {
      text: "your",
    },
    {
      text: "business",
    },
    {
      text: "with",
    },
    {
      text: "Maanc",
      className: "text-blue-500 dark:text-blue-500 ",
    },
    {
        text: "Technologies.",
        className: "text-blue-500 dark:text-blue-500",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] w-[800px] space-y-16">
      
      <TypewriterEffect words={words}  />
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
      Unlock your company's full potential with Maanc Technologies. We offer tailored business tech solutions, from innovative software development to robust IT infrastructure, ensuring your success at every step.
      </p>
    </div>
  );
}

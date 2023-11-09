import { CpuChipIcon } from "@heroicons/react/24/outline";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CpuChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-200 mb-4">
                        Skills &amp; Technologies
          </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">

                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 lg:w-max w-full">
                            <div className="bg-teal-400/10 rounded-full flex px-3 py-2 items-center justify-center">
                                <span className="title-font text-xs font-medium text-teal-300 text-center">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
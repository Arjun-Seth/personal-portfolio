import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex w-full h-auto flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className=" text-4xl md:text-[40px] lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-24">
        My Projects
      </h1>
      <div className="flex flex-col gap-10">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 px-10 ">
          <ProjectCard
            src="/fitfusion.png"
            title="Fit Fusion "
            description="This web application allows users to explore a vast library of over 1,000 exercises, categorized by muscle group for targeted workouts."
            githubAdd="https://github.com/Arjun-Seth/fit-fusion"
            liveUrl="https://webfitfusion.netlify.app/"
          />
          <ProjectCard
            src="/blog-website.png"
            title="Personal blog Website"
            description="This user-friendly web app turns users into bloggers. It provides a platform to create insightful blog posts."
            githubAdd="https://github.com/Arjun-Seth/Blog-Webapp-mern"
            liveUrl="https://web-blogg-app.netlify.app/"
          />
          <ProjectCard
            src="/keeper.png"
            title="Keeper"
            description="Keeper is a user-friendly note-taking platform for efficient organization and easy access to information, enhancing productivity and creativity."
            githubAdd="https://github.com/Arjun-Seth/keeper-project"
            liveUrl="https://web-keeper-app.netlify.app/"
          />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 px-10 ">
          <ProjectCard
            src="/fitness-world.png"
            title="Fitness world "
            description="Explore your fitness potential at our gym. Discover our services, training options, and pricing - all on our informative website."
            githubAdd="https://github.com/Arjun-Seth/fitness-world"
            liveUrl="https://arjun-seth.github.io/fitness-world/"
          />
          <ProjectCard
            src="/currency.png"
            title="Currency Converter"
            description="Effortlessly convert currencies with this user-friendly tool. Get accurate exchange rates for informed financial decisions."
            githubAdd="https://github.com/Arjun-Seth/currency-converter"
            liveUrl="https://arjun-seth.github.io/currency-converter/"
          />
          <ProjectCard
            src="/dice-game1.png"
            title="Dice Game"
            description="Ready for some quick dice fun? You and a friend can click, roll, and be crowned champion in minutes - no setup required!"
            githubAdd="https://github.com/Arjun-Seth/Dice-Game"
            liveUrl="https://arjun-seth.github.io/Dice-Game/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

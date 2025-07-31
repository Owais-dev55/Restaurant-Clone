import React from "react";
import TeamMemberCard from "../components/TeamMemberCard";

const CtaSection = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <p className="text-white font-medium tracking-wide">
              BOOK A TABLE FOR YOU AND FAMILY MEMBERS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
              NEED A TABLE ON COFFEE HOUSE
            </h2>
          </div>
          <button className="mt-6 md:mt-0 border-2 border-white text-white font-bold py-3 px-8 rounded-sm hover:bg-gray-800 hover:text-white transition-colors">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

const teamData = [
  { id: 1, name: "Richard John", title: "CEO & Founder" },
  { id: 2, name: "Jessica Miler", title: "Head Chef" },
  { id: 3, name: "Patrick Smith", title: "Sous Chef" },
  { id: 4, name: "George James", title: "Pastry Chef" },
  { id: 5, name: "Edward May", title: "Manager" },
  { id: 6, name: "Monica Robert", title: "Waiter" },
];

const Team = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="bg-[#3D3D3D] text-white text-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            OUR CHEF
          </h2>
          <p className="text-xs font-medium tracking-widest mb-10">
            HOME / OUR CHEF
          </p>
          <h3
            className="
              text-[4rem] sm:text-[6rem] lg:text-[8rem]  
              font-black uppercase text-stroke tracking-widest 
              leading-none text-center mb-[-1rem] lg:mb-[-2rem] 
            "
          >
            TEAM EXPERT
          </h3>
        </div>
      </section>

      {/* --- TEAM GRID SECTION --- */}
      <section className="bg-gray-100 py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <CtaSection />
    </>
  );
};

export default Team;
export { teamData };

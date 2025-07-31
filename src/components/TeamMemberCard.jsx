import React from "react";
import { Link } from "react-router-dom";
import teamImage from "../assets/team.png";

const TeamMemberCard = ({ id, name, title }) => {
  return (
    <Link to={`/team/${id}`} className="block group">
      <div className="bg-white p-6 rounded-md shadow-sm h-full">
        <img src={teamImage} alt={name} className="w-full h-auto mb-6" />

        <div className="text-center">
          <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider group-hover:text-[#CB3A1A] transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;

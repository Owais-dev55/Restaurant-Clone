
import React from 'react';
import { useParams } from 'react-router-dom'
import { teamData } from './Team';
import { FaUser, FaEnvelope, FaPhone, FaFax } from 'react-icons/fa';
import teamDetailImage from '../assets/team-detail.png';

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

const TeamDetails = () => {
  const { memberId } = useParams();
  const member = teamData.find(m => m.id === parseInt(memberId));

  if (!member) {
    return (
      <div className="container mx-auto px-4">
        <p className="text-center py-20 font-bold text-2xl">Sorry, we could not find that team member.</p>
      </div>
    );
  }

  return (
    <>

          {/* --- HERO SECTION --- */}
      <section className="bg-[#3D3D3D] text-white text-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            CHEF DETAILS
          </h2>
          <p className="text-xs font-medium tracking-widest mb-10">
            HOME /  CHEF DETAILS
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

      {/* --- TEAM DETAIL SECTION --- */}
      <section className="bg-gray-100 py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800">{member.name}</h2>
                <p className="text-[#CB3A1A] font-semibold mt-1 mb-6">
                  {member.title}
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-10">
                  Sem consequat mauris conubia inceptos nostra rutrum morbi sagittis pulvinar, commodo curabitur maecenas fermentum magna tempus nisi ullamcorper, ante auctor magnis pretium eu lectus euismod platea. Congue sociosqu nostra est urna pellentesque placerat euismod bibendum.
                </p>

                {/* Contact Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 border-t border-gray-200 pt-8">
                  {/* Item 1: Experience */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                      <FaUser className="text-[#CB3A1A]" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm">Experience</h4>
                      <p className="font-bold text-gray-800">More Than 10 Years</p>
                    </div>
                  </div>

                  {/* Item 2: Email */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                      <FaEnvelope className="text-[#CB3A1A]" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm">Email</h4>
                      <p className="font-bold text-gray-800">info@agency.com</p>
                    </div>
                  </div>

                  {/* Item 3: Phone */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                      <FaPhone className="text-[#CB3A1A]" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm">Phone</h4>
                      <p className="font-bold text-gray-800">+(256) 58621-69581</p>
                    </div>
                  </div>

                  {/* Item 4: Fax */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                      <FaFax className="text-[#CB3A1A]" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm">Fax</h4>
                      <p className="font-bold text-gray-800">+2568145632</p>
                    </div>
                  </div>
                </div>

                {/* Contact Me Button */}
                <div className="mt-10">
                  <button className="bg-[#CB3A1A] text-white font-bold tracking-wider py-3 px-8 rounded-md hover:bg-red-700 transition-colors">
                    CONTACT ME
                  </button>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={teamDetailImage} 
                  alt={member.name} 
                  className="w-full max-w-sm h-auto rounded-lg"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* --- CTA SECTION --- */}
      <CtaSection />
    </>
  );
};

export default TeamDetails;
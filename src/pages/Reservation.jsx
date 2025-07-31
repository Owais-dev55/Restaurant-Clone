import React from "react";
export const TopComp = ({ pageName, pageSubtitle, pageTitle }) => {
  return (
    <>
      <div className="relative">
        <div className="h-[333px] bg-[#383838] text-white justify-center flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="uppercase font-jost font-semibold text-[40px]">
              {pageTitle}
            </h1>
            <p className="text-[14px] uppercase">{pageSubtitle}</p>
          </div>

          <div className="absolute bottom-4 ">
            <p class="font-jost font-bold md:text-[105px] leading-[100%] tracking-[0]  uppercase  text-transparent text-stroke  text-[50px] ">
              {pageName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const InputComp = ({ name }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <label htmlFor="person" className="uppercase font-semibold text-[14px]">
          {name} *
        </label>
        <input
          type="text"
          placeholder="Person"
          className="border-2 border-[#5f5d5d33] py-3 px-4 md:w-[300px] placeholder:text-white placeholder:text-[13px] focus:ring-2 focus:ring-[#5f5d5d33] outline-none p-2 "
        />
      </div>
    </>
  );
};

const Btn = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer justify-between gap-2 mx-auto bg-[#CB3A1A] hover:bg-[#b96450] py-2 md:px-6 px-2 mt-2 font-bold ">
        <button type="submit" className="uppercase max-sm:text-[16px]">
          Book a table
        </button>
        <svg
          width="30"
          height="1"
          viewBox="0 0 30 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="30" y2="0.5" stroke="white" />
        </svg>

        <svg
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 1L15 5.5M15 5.5L10.5 10M15 5.5H1"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </>
  );
};
export const TextAreaComp = ({ name }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <label htmlFor="person" className="uppercase font-semibold text-[14px]">
          {name} *
        </label>

        <textarea
          name=""
          id=""
          className="border-2  py-3 px-4 border-[#5f5d5d33] w-full placeholder:text-white placeholder:text-[13px] focus:ring-2 focus:ring-[#5f5d5d33] outline-none p-2"
          cols="30"
          rows="4"
          placeholder="Tell us more about your special message"
        ></textarea>
      </div>
    </>
  );
};

const RightComp = ({ hour, lunch, diner, location, email, phone }) => {
  const infoItems = [lunch, diner, location, phone, email];
  return (
    <>
      <div className="flex flex-col gap-1 border border-[#E9E9E9] py-5 md:px-7 px-2">
        <h1 className="font-bold uppercase md:text-lg text-md">{hour}</h1>
        {infoItems.map((item, idx) => (
          <p key={idx} className="text-[#74787C]">
            {item}
          </p>
        ))}
      </div>
    </>
  );
};
export const CtaBanner = ({ subtitle, title, btn, imageUrl }) => {
  return (
    <div className="relative bg-[#D9D9D9] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex md:flex-row flex-col md:justify-around md:items-center md:h-[170px] h-[200px] items-center justify-between max-sm:py-5">
        <div>
          <p className="font-semibold md:text-[16px] text-[12px] uppercase max-sm:text-center">
            {subtitle}
          </p>
          <h1 className="font-bold md:text-[40px] text-[20px] uppercase">
            {title}
          </h1>
        </div>
        <div>
          <button className="px-4 py-2 border-2 text-white font-bold text-[16px] cursor-pointer hover:text-black border-white uppercase transition duration-700 ease-in-out hover:border-black">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

const Reservation = () => {
  return (
    <>
      <TopComp
        pageName="Reservation"
        pageSubtitle="Home / Book A Table"
        pageTitle="Book A Table"
      />
      <div className="bg-black text-white pb-16">
        <div className="md:px-[190px] px-8 pt-12 ">
          <form
            action=""
            className="flex flex-wrap justify-between items-center md:gap-5 gap-7"
          >
            <InputComp name="NUMBER OF GUEST " />
            <InputComp name="Select date " />
            <InputComp name="Select time " />
            <InputComp name="your name" />
            <InputComp name="email address " />
            <InputComp name="phone number " />
            <TextAreaComp name="Type Your Special Message" />
            <Btn />
          </form>
        </div>
      </div>

      <div>
        <div className="md:px-[200px] px-8 pt-16  pb-20 flex md:flex-row flex-col justify-center md:gap-40 gap-12 md:items-center ">
          <div>
            <div className="bg-[#D9D9D9] md:w-[350px] w-[240px] h-[300px] md:h-[400px] relative">
              <div className="bg-[#D9D9D9] md:w-[150px] md:h-[180px] w-[100px] h-[120px] border-7 z-10 border-white absolute md:right-[-70px] right-[-40px] bottom-9"></div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <RightComp
              hour="Opening Hours"
              lunch="Lunch: 12Pm - 3Pm"
              diner="Diner: 7Pm - 2Am (Last Order At 11:30Pm)"
            />
            <RightComp
              hour="Visit Hour Restaurant"
              location="Eight avenue 487, NY,"
              phone="T. +12 344 0567899"
              email="M. fidalgo@example.com"
            />
          </div>
        </div>
      </div>
      <CtaBanner
        subtitle="Book A Table For Your and Family Members"
        title="Need A Table On Coffee House"
        btn=" Book A Table"
        
      />
    </>
  );
};

export default Reservation;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TopComp, CtaBanner } from "./Reservation";
import blogData from "../data/BlogData.js";
import { RigthComp } from "./Blog";
import imgUrl from "../assets/bg.jpg";
const CommentComp = ({ name, reply }) => {
  return (
    <>
      <div className={`mt-6 flex gap-4 ${reply ? "ml-18" : " "} `}>
        <div className="min-w-[90px] min-h-[90px] bg-[#E3E3E3]"></div>

        {/* right */}
        <div className="relative">
          <p className="text-[#74787C]  text-[12px]">10 Mar, 2022</p>
          <p className="font-bold mb-1">{name}</p>
          <p className="text-[#74787C]  text-[13px]">
            Collaboratively empower multifunctional e-commerce for prospective
            applications. Seamlessly productivate plug-and-play markets whereas
            synergistic scenarios.
          </p>

          <div className="text-[#CB3A1A] absolute top-0 right-1  cursor-pointer">
            <svg
              width="64"
              height="18"
              viewBox="0 0 64 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.552 8.656H4.6L8.392 14H6.12L2.552 8.656ZM0.248 2.8H2.136V14H0.248V2.8ZM1.368 4.432V2.8H3.704C4.51467 2.8 5.21867 2.944 5.816 3.232C6.424 3.52 6.89333 3.92533 7.224 4.448C7.55467 4.96 7.72 5.568 7.72 6.272C7.72 6.976 7.55467 7.58933 7.224 8.112C6.89333 8.63467 6.424 9.04 5.816 9.328C5.21867 9.616 4.51467 9.76 3.704 9.76H1.368V8.208H3.624C4.05067 8.208 4.424 8.13333 4.744 7.984C5.07467 7.83467 5.33067 7.62133 5.512 7.344C5.69333 7.056 5.784 6.71467 5.784 6.32C5.784 5.91467 5.69333 5.57333 5.512 5.296C5.33067 5.01867 5.07467 4.80533 4.744 4.656C4.424 4.50667 4.05067 4.432 3.624 4.432H1.368ZM12.8196 14.16C12.073 14.16 11.4116 14 10.8356 13.68C10.2703 13.36 9.83296 12.912 9.52363 12.336C9.21429 11.76 9.05963 11.088 9.05963 10.32C9.05963 9.54133 9.21429 8.864 9.52363 8.288C9.84363 7.712 10.2916 7.26933 10.8676 6.96C11.4436 6.64 12.121 6.48 12.8996 6.48C13.6783 6.48 14.3396 6.62933 14.8836 6.928C15.4276 7.22667 15.8436 7.65867 16.1316 8.224C16.4303 8.77867 16.5796 9.45067 16.5796 10.24C16.5796 10.3253 16.5743 10.416 16.5636 10.512C16.5636 10.608 16.5583 10.6773 16.5476 10.72H10.0836V9.536H15.0756L14.5476 10.272C14.5796 10.208 14.6116 10.1227 14.6436 10.016C14.6863 9.89867 14.7076 9.80267 14.7076 9.728C14.7076 9.33333 14.6276 8.992 14.4676 8.704C14.3183 8.416 14.105 8.192 13.8276 8.032C13.561 7.872 13.2463 7.792 12.8836 7.792C12.4463 7.792 12.073 7.888 11.7636 8.08C11.4543 8.272 11.2196 8.54933 11.0596 8.912C10.8996 9.27467 10.8143 9.72267 10.8036 10.256C10.8036 10.7893 10.8836 11.2427 11.0436 11.616C11.2036 11.9787 11.4383 12.256 11.7476 12.448C12.0676 12.64 12.4516 12.736 12.8996 12.736C13.369 12.736 13.7796 12.64 14.1316 12.448C14.4836 12.256 14.777 11.9627 15.0116 11.568L16.4996 12.176C16.1156 12.8373 15.6196 13.3333 15.0116 13.664C14.4036 13.9947 13.673 14.16 12.8196 14.16ZM19.909 17.52H18.165V6.64H19.909V17.52ZM26.005 10.32C26.005 11.1307 25.8397 11.8293 25.509 12.416C25.1783 12.992 24.741 13.4347 24.197 13.744C23.653 14.0427 23.061 14.192 22.421 14.192C21.7917 14.192 21.2423 14.0373 20.773 13.728C20.3143 13.408 19.957 12.96 19.701 12.384C19.4557 11.7973 19.333 11.1093 19.333 10.32C19.333 9.52 19.4557 8.832 19.701 8.256C19.957 7.68 20.3143 7.23733 20.773 6.928C21.2423 6.608 21.7917 6.448 22.421 6.448C23.061 6.448 23.653 6.60267 24.197 6.912C24.741 7.21067 25.1783 7.648 25.509 8.224C25.8397 8.8 26.005 9.49867 26.005 10.32ZM24.213 10.32C24.213 9.82933 24.1117 9.41333 23.909 9.072C23.7063 8.72 23.4343 8.45867 23.093 8.288C22.7623 8.10667 22.3943 8.016 21.989 8.016C21.6583 8.016 21.333 8.10667 21.013 8.288C20.693 8.45867 20.4263 8.71467 20.213 9.056C20.0103 9.39733 19.909 9.81867 19.909 10.32C19.909 10.8213 20.0103 11.2427 20.213 11.584C20.4263 11.9253 20.693 12.1867 21.013 12.368C21.333 12.5387 21.6583 12.624 21.989 12.624C22.3943 12.624 22.7623 12.5387 23.093 12.368C23.4343 12.1867 23.7063 11.9253 23.909 11.584C24.1117 11.232 24.213 10.8107 24.213 10.32ZM27.6509 1.52H29.3789V14H27.6509V1.52ZM38.1004 6.64L33.3004 17.52H31.4604L33.3804 13.136L30.4204 6.64H32.4044L34.7564 12.464L33.9404 12.416L36.2444 6.64H38.1004ZM63.625 10.5V14.25C63.625 14.6875 63.2812 15 62.875 15C62.4375 15 62.125 14.6875 62.125 14.2812V10.5625C62.125 8.78125 60.6562 7.34375 58.875 7.34375H50.375L54.3438 10.7812C54.6562 11.0625 54.6875 11.5312 54.4375 11.8438C54.2812 11.9375 54.0625 12 53.875 12C53.6875 12 53.5 11.9688 53.375 11.8438L47.875 7.125C47.7188 6.9375 47.625 6.71875 47.625 6.5C47.625 6.28125 47.7188 6.09375 47.875 5.9375L53.375 1.21875C53.6562 0.96875 54.1562 1 54.4375 1.3125C54.6875 1.625 54.6562 2.09375 54.3438 2.375L50.375 5.75H58.875C61.4688 5.75 63.625 7.90625 63.625 10.5Z"
                fill="#CB3A1A"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogDetails = () => {
  const [reply, setReply] = useState(true);
  const { id } = useParams();
  const blog = blogData.find((b) => b.id == id);
  return (
    <>
      <TopComp
        pageName="News Insights"
        pageSubtitle="Home / Blog Details"
        pageTitle="Blog Details"
      />

      <div className="bg-white">
        <div className="md:px-[200px] px-8 py-16 flex gap-13 justify-center max-sm:flex-col ">
          {/* left */}
          <div className="flex flex-col  ">
            <div className="md:w-[600px] h-[300px] bg-[#D9D9D9] relative"></div>
            <div className=" bg-white py-3 mb-5">
              <div className="flex items-center   md:gap-4 ">
                <div className="flex gap-2 items-center">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 2H9.25V0.75C9.25 0.34375 9.5625 0 10 0C10.4062 0 10.75 0.34375 10.75 0.75V2H12C13.0938 2 14 2.90625 14 4V14C14 15.125 13.0938 16 12 16H2C0.875 16 0 15.125 0 14V4C0 2.90625 0.875 2 2 2H3.25V0.75C3.25 0.34375 3.5625 0 4 0C4.40625 0 4.75 0.34375 4.75 0.75V2ZM1.5 14C1.5 14.2812 1.71875 14.5 2 14.5H12C12.25 14.5 12.5 14.2812 12.5 14V6H1.5V14Z"
                      fill="#CB3A1A"
                    />
                  </svg>
                  <p className="text-[#74787C] text-sm ">{blog.calenader}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 9.5C11.5312 9.5 14 11.9688 14 15C14 15.5625 13.5312 16 13 16H1C0.4375 16 0 15.5625 0 15C0 11.9688 2.4375 9.5 5.5 9.5H8.5ZM1.5 14.5H12.4688C12.2188 12.5312 10.5312 11 8.5 11H5.5C3.4375 11 1.75 12.5312 1.5 14.5ZM7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM7 1.5C5.59375 1.5 4.5 2.625 4.5 4C4.5 5.40625 5.59375 6.5 7 6.5C8.375 6.5 9.5 5.40625 9.5 4C9.5 2.625 8.375 1.5 7 1.5Z"
                      fill="#CB3A1A"
                    />
                  </svg>

                  <p className="text-[#74787C] text-sm">by {blog.whoPost}</p>
                </div>
              </div>
              <h1 className="uppercase font-bold max-sm:mt-1 py-1 font-Jost text-[18px] md:text-[25px]">
                {blog.title}
              </h1>

              <p className="text-[#74787C] max-sm:text-[12px] font-normal text-[14px] leading-[26px] align-middle tracking-[0] font-jost">
                Global business consultancies play a critical role in driving
                thought leadership and knowledge exchange on a global scale.
                Through industry reports, white papers, seminars, and
                conferences, these firms share insights, best practices, and
                emerging trends that shape the future of international business.
                By staying at the forefront of global trends and innovations,
                the consultancy provides clients with invaluable intelligence
                and foresight, empowering them to anticipate market shifts,
                capitalize on emerging opportunities, and stay ahead of the
                curve in an ever-changing global landscape.
                <div className="mt-2"></div>
                global business consultancy serves as a strategic partner and
                trusted advisor to organizations navigating the complexities of
                international commerce. By offering a comprehensive suite of
                services, deep industry expertise, and a global network of
                resources, these firms empower clients to seize opportunities.
              </p>
            </div>

            <div className="bg-[#F6F6F6] flex flex-col justify-center py-6 pl-12 pr-3  gap-4 ">
              <div className="rounded-full w-12 h-12 bg-[#CB3A1A] text-white flex justify-center items-center">
                99
              </div>
              <div className="font-jost font-semibold text-sm">
                “We offer competitive pricing and deliver exceptional value for
                your investment our goal is to help you achieve the highest”
              </div>
              <div>
                <p className="font-semibold text-[#CB3A1A] text-[16px]">
                  William Benjamin
                </p>

                <p className="text-[#74787C] text-[12px] ">Top Author</p>
              </div>
            </div>

            <p className="text-[#74787C] max-sm:text-[12px] font-normal text-[14px] leading-[26px] align-middle tracking-[0] font-jost mt-5">
              Professionally pursue cutting-edge web-readiness vis-a-vis just in
              time infrastructures. Conveniently target client-based systems
              with turnkey sources. Collaboratively syndicate focused
              opportunities for interactive deliverables. Assertively initiate
              client-based infomediaries through collaborative mindshare.
              Completely create bleeding-edge meta-services through compelling
              functionalities.
            </p>

            <div className="flex gap-2 justify-between items-center mt-5 ">
              <div className="bg-[#D9D9D9] h-[300px] w-[200px] "></div>
              <div className="bg-[#D9D9D9] h-[300px] w-[200px]"></div>
              <div className="bg-[#D9D9D9] h-[300px] w-[200px]"></div>
            </div>
            <p className="text-[#74787C] max-sm:text-[12px] font-normal text-[14px] leading-[26px] align-middle tracking-[0] font-jost mt-5">
              Quickly build covalent data after turnkey content. Distinctively
              reconceptualize customized growth strategies via prospective
              potentialities. Professionally pursue cutting-edge web-readiness
              vis-a-vis just in time infrastructures. Conveniently target
              client-based systems with turnkey sources.
            </p>
            <p className="text-[#74787C] max-sm:text-[12px] font-normal text-[14px] leading-[26px] align-middle tracking-[0] font-jost mt-5">
              Collaboratively syndicate focused opportunities for interactive
              deliverables. Assertively initiate client-based infomediaries
              through collaborative mindshare create bleeding-edge meta-services
            </p>

            <div className="flex justify-between items-center mt-5 font-jost">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-black text-sm">Tags</h1>
                <p className="text-[#74787C] text-sm">
                  Business Solution, Growth Strenth
                </p>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold font-jost text-black text-sm">
                  Social Icon
                </h1>
                <div className="flex items-center gap-2  justify-center">
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z"
                      fill="#74787C"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                      fill="#74787C"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.40625C9.96875 3.40625 11.5938 5.03125 11.5938 7C11.5938 9 9.96875 10.5938 8 10.5938C6 10.5938 4.40625 9 4.40625 7C4.40625 5.03125 6 3.40625 8 3.40625ZM8 9.34375C9.28125 9.34375 10.3125 8.3125 10.3125 7C10.3125 5.71875 9.28125 4.6875 8 4.6875C6.6875 4.6875 5.65625 5.71875 5.65625 7C5.65625 8.3125 6.71875 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C15 5.28125 15 8.75 14.9375 9.90625C14.875 11.0312 14.625 12 13.8125 12.8438C13 13.6562 12 13.9062 10.875 13.9688C9.71875 14.0312 6.25 14.0312 5.09375 13.9688C3.96875 13.9062 3 13.6562 2.15625 12.8438C1.34375 12 1.09375 11.0312 1.03125 9.90625C0.96875 8.75 0.96875 5.28125 1.03125 4.125C1.09375 3 1.34375 2 2.15625 1.1875C3 0.375 3.96875 0.125 5.09375 0.0625C6.25 0 9.71875 0 10.875 0.0625C12 0.125 13 0.375 13.8125 1.1875C14.625 2 14.875 3 14.9375 4.125ZM13.4375 11.125C13.8125 10.2188 13.7188 8.03125 13.7188 7C13.7188 6 13.8125 3.8125 13.4375 2.875C13.1875 2.28125 12.7188 1.78125 12.125 1.5625C11.1875 1.1875 9 1.28125 8 1.28125C6.96875 1.28125 4.78125 1.1875 3.875 1.5625C3.25 1.8125 2.78125 2.28125 2.53125 2.875C2.15625 3.8125 2.25 6 2.25 7C2.25 8.03125 2.15625 10.2188 2.53125 11.125C2.78125 11.75 3.25 12.2188 3.875 12.4688C4.78125 12.8438 6.96875 12.75 8 12.75C9 12.75 11.1875 12.8438 12.125 12.4688C12.7188 12.2188 13.2188 11.75 13.4375 11.125Z"
                      fill="#74787C"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.25C12.25 0.25 15.75 3.75 15.75 8C15.75 12.2812 12.25 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.75 3.71875 0.25 8 0.25ZM13.0938 3.84375C12.9688 4.03125 11.875 5.4375 9.40625 6.4375C9.65625 6.9375 9.8125 7.3125 10 7.75C12.1875 7.46875 14.375 7.90625 14.5938 7.96875C14.5938 6.40625 14.0312 4.96875 13.0938 3.84375ZM12.375 3.0625C10.75 1.625 8.53125 1.09375 6.4375 1.59375C6.625 1.84375 7.8125 3.46875 8.90625 5.46875C11.25 4.59375 12.25 3.25 12.375 3.0625ZM5.15625 2.03125C3.3125 2.90625 1.9375 4.625 1.5 6.65625C1.8125 6.6875 4.53125 6.6875 7.625 5.875C6.53125 3.90625 5.34375 2.28125 5.15625 2.03125ZM1.375 8.03125C1.375 9.71875 2 11.2812 3.0625 12.4375C4.125 10.625 6.3125 8.6875 8.71875 8C8.53125 7.625 8.375 7.25 8.15625 6.875C4.875 7.875 1.65625 7.84375 1.375 7.8125C1.375 7.90625 1.375 7.96875 1.375 8.03125ZM3.90625 13.25C5.875 14.7812 8.4375 15.0312 10.5625 14.125C10.4688 13.5312 10.0938 11.5 9.15625 9.09375C6.5 10 4.625 11.8438 3.90625 13.25ZM11.6875 13.5C13.1562 12.5 14.2188 10.9062 14.5312 9.0625C14.2812 9 12.4688 8.46875 10.4062 8.78125C11.25 11.1875 11.625 13.125 11.6875 13.5Z"
                      fill="#74787C"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#D9D9D9] mt-5 mb-5"></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[70px] h-[70px] bg-[#D9D9D9] "></div>
                <p className="font-semibold">Previous Post</p>
              </div>
              <div className="flex gap-1 w-[50px] flex-wrap">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[10px] h-[10px] bg-[#F0F0F0]"></div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold">Next Post</p>
                <div className="w-[70px] h-[70px] bg-[#D9D9D9] "></div>
              </div>
            </div>
            <div className="h-[1px] bg-[#D9D9D9] mt-5"></div>

            <div className="mt-10 bg-[#F6F6F6] flex items-center gap-3 py-6 px-5 ">
              <div className="min-w-[150px] min-h-[150px] bg-[#D9D9D9] "></div>
              <div>
                <p className="font-semibold">William Benjamin</p>
                <p className="text-[#CB3A1A] text-[12px]">Author</p>
                <p className="text-[#74787C] text-[13px]">
                  Re-engineer multimedia based internal or "organic" sources for
                  progressive vortals. Assertively leverage existing
                  economically sound total linkage whereas global best
                  practices.
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-bold mt-6 text-xl font-jost">3 Comments</h1>

              {/* comment */}
              <CommentComp name="Daniel Adam" />
              <div className="h-[1px] bg-[#D9D9D9] mt-5"></div>
              <CommentComp name="Zenelia Lozhe" reply={reply} />
              <div className="h-[1px] bg-[#D9D9D9] mt-5"></div>
              <CommentComp name="Jhon Smith" />
            </div>

            <div className="bg-[#F6F6F6] mt-5 mb-5 py-6 px-4 ">
              <h1 className="font-bold mt-2 mb-6 text-xl font-jost">
                Leave a Reply
              </h1>
              <div className="">
                <form
                  action=""
                  className="flex gap-5 flex-wrap items-center justify-between"
                >
                  <div className="relative w-[260px] ">
                    <input
                      required
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                      className="bg-white py-2 px-2"
                    />
                    <div className="absolute top-3 right-5">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM7 1C5.34375 1 4 2.375 4 4C4 5.65625 5.34375 7 7 7C8.625 7 10 5.65625 10 4C10 2.375 8.625 1 7 1ZM8.5625 9.5C11.5625 9.5 14 11.9375 14 14.9375C14 15.5312 13.5 16 12.9062 16H1.0625C0.46875 16 0 15.5312 0 14.9375C0 11.9375 2.40625 9.5 5.40625 9.5H8.5625ZM12.9062 15C12.9375 15 13 14.9688 13 14.9375C13 12.5 11 10.5 8.5625 10.5H5.40625C2.96875 10.5 1 12.5 1 14.9375C1 14.9688 1.03125 15 1.0625 15H12.9062Z"
                          fill="#74787C"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-[260px]">
                    <input
                      required
                      type="email"
                      name=""
                      id=""
                      placeholder="Email Address"
                      className="bg-white py-2 px-2"
                    />
                    <div className="absolute top-4 right-5">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V2ZM1 2V3.25L7.09375 7.75C7.625 8.125 8.34375 8.125 8.875 7.75L15 3.25V2C15 1.46875 14.5312 1 14 1H1.96875C1.4375 1 0.96875 1.46875 0.96875 2H1ZM1 4.5V10C1 10.5625 1.4375 11 2 11H14C14.5312 11 15 10.5625 15 10V4.5L9.46875 8.5625C8.59375 9.1875 7.375 9.1875 6.5 8.5625L1 4.5Z"
                          fill="#74787C"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full">
                    <textarea
                      name=""
                      id=""
                      required
                      cols="30"
                      rows="5"
                      placeholder="Type Your Message"
                      className="bg-white w-full px-3 py-3"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button className="uppercase text-center w-full bg-[#CB3A1A] cursor-pointer font-semibold py-2 text-white">
                      submit comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <RigthComp />
        </div>
      </div>

      <CtaBanner
        subtitle=" BookA Table For Your and Family Members"
        title="Need A Table On Coffee House"
        btn=" Book A Table"
        imageUrl={imgUrl}
      />
    </>
  );
};

export default BlogDetails;

import React from "react";
import imgUrl from "../assets/bg.jpg";
import { TopComp } from "./Reservation";
import { CtaBanner } from "./Reservation";
import blogData from "../data/BlogData.js"
import { Link } from "react-router-dom";

const SearchComp = () => {
  return (
    <>
      <div className="bg-[#F6F6F6] h-[120px] w-[300px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter Keyboard"
            className="bg-white w-[200px] pl-2 h-[40px] placeholder:text-[14px]  focus:border-white focus:outline-white"
          />
          <div className="bg-[#CB3A1A] h-[40px] w-[40px] flex  justify-center items-center">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const RecentPosts = ({ title }) => {
  return (
    <>
      <div className="flex  justify-center items-center gap-2 pb-3 ">
        <div className="w-[70px] h-[70px] bg-[#D9D9D9]"></div>
        <div>
          <div className="flex  gap-2 items-center">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0.75C10.8555 0.75 14 3.89453 14 7.75C14 11.6328 10.8555 14.75 7 14.75C3.11719 14.75 0 11.6328 0 7.75C0 3.89453 3.11719 0.75 7 0.75ZM7 13.875C8.28516 13.875 9.48828 13.4922 10.4727 12.8086C10.3633 11.4414 9.24219 10.375 7.875 10.375H6.125C4.73047 10.375 3.60938 11.4414 3.5 12.8086C4.48438 13.4922 5.6875 13.875 7 13.875ZM11.2383 12.1523C12.3867 11.0312 13.125 9.47266 13.125 7.75C13.125 4.38672 10.3633 1.625 7 1.625C3.60938 1.625 0.875 4.38672 0.875 7.75C0.875 9.47266 1.58594 11.0312 2.73438 12.1523C3.11719 10.6484 4.48438 9.5 6.125 9.5H7.875C9.48828 9.5 10.8555 10.6484 11.2383 12.1523ZM7 4.25C8.20312 4.25 9.1875 5.23438 9.1875 6.4375C9.1875 7.66797 8.20312 8.625 7 8.625C5.76953 8.625 4.8125 7.66797 4.8125 6.4375C4.8125 5.23438 5.76953 4.25 7 4.25ZM7 7.75C7.71094 7.75 8.3125 7.17578 8.3125 6.4375C8.3125 5.72656 7.71094 5.125 7 5.125C6.26172 5.125 5.6875 5.72656 5.6875 6.4375C5.6875 7.17578 6.26172 7.75 7 7.75Z"
                fill="#74787C"
              />
            </svg>

            <p className="text-[#74787C] text-[12px]">by David Smith</p>
          </div>
          <h1 className="font-semibold text-[13.5px] mt-1 w-[170px]">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

const CategoriesComp = ({ name }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-1 mb-3">
        <div className="bg-white h-[40px] w-[200px] flex pl-3 items-center text-[#74787C] text-sm">
          {name}
        </div>
        <div className="bg-white h-[40px] w-[40px] flex justify-center items-center">
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
              fill="#CB3A1A"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export const RigthComp=()=>{
  return(
    <>
    <div className="flex flex-col gap-5 max-sm:justify-center max-sm:items-center">
            <SearchComp />
            <div className="bg-[#F6F6F6]  w-[300px] pb-3 ">
              <h1 className="font-bold uppercase px-5 text-[18px] py-4">
                recent posts
              </h1>
              <RecentPosts title=" Craftsmanship of Artisanal Foods in Restaurants" />
              <RecentPosts
                title="Restaurants Are Adapting to
Changing Dietary Trends"
              />
              <RecentPosts
                title="Passion and Perseverance
from Renowned Chefs"
              />
            </div>
            <div>
              <div className="bg-[#F6F6F6]  w-[300px] pb-3">
                <h1 className="font-bold uppercase px-5 text-[18px] py-4">
                  Categories
                </h1>
                <CategoriesComp name="Soups and Salads" />
                <CategoriesComp name="Pasta and Noodles" />
                <CategoriesComp name="Vegetarian and Vegan" />
                <CategoriesComp name="Pizza and Flatbreads" />
              </div>
            </div>
            <div>
              <div className="bg-[#F6F6F6]  w-[300px] pb-3">
                <h1 className="font-bold uppercase px-5 text-[18px] py-4">
                  gallery
                </h1>
                <div className="flex justify-center gap-3 items-center flex-wrap px-3">
                  <div className="w-[65px] h-[65px] bg-[#D9D9D9]"></div>
                  <div className="w-[65px] h-[65px] bg-[#D9D9D9]"></div>
                  <div className="w-[65px] h-[65px] bg-[#D9D9D9]"></div>

                  <div className="w-[65px] h-[65px] bg-[#D9D9D9]"></div>
                  <div className="w-[65px] h-[65px] bg-[#D9D9D9]"></div>
                  <div className="w-[65px] h-[65px] bg-[#D9D9D9]"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#F6F6F6]  w-[300px] pb-3">
                <h1 className="font-bold uppercase px-5 text-[18px] py-4">
                  Popular Tags
                </h1>
                <div className="flex justify-center items-center gap-3 flex-wrap px-1">
                  <div className="px-3 h-[40px] bg-[#CB3A1A] uppercase flex justify-center items-center text-white text-[14px] font-semibold">
                    adivce
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Author
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Consulting
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[15px] font-semibold">
                    Delish
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Family
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Health
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Tip
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Judge
                  </div>
                  <div className="px-3 h-[40px] bg-[#FFFFFF] uppercase flex justify-center items-center text-black text-[14px] font-semibold">
                    Solution
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
const Blog = () => {
  return (
    <>
      <TopComp
        pageName="News Insights"
        pageSubtitle="Home / Latest News"
        pageTitle="Latest News"
        
      />

      <div className="bg-white">
        <div className="md:px-[200px] px-8 py-16 flex gap-13 justify-center max-sm:flex-col ">
          {/* left */}

          <div className="flex flex-col ">
            {blogData.map((data, index) => {
              return (
                <>
                  <div className="md:w-[600px] h-[300px] bg-[#D9D9D9] relative" key={index+"ym"}>
                    <div className=" flex justify-center items-center bg-[#CB3A1A] w-[85px] h-[30px] absolute top-5 left-5 uppercase text-[13px] text-white font-semibold ">
                      {data.category}
                    </div>
                  </div>

                  <div className="px-6 bg-[#F6F6F6] py-3 mb-5" key={index+"my"}>
                    <div className="flex items-center  md:gap-4 ">
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
                        <p className="text-[#74787C] text-sm ">
                          {data.calenader}
                        </p>
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

                        <p className="text-[#74787C] text-sm">
                          by {data.whoPost}
                        </p>
                      </div>
                    </div>
                    <h1 className="uppercase font-bold max-sm:mt-1 py-1 font-Jost text-[18px] md:text-[25px]">
                      {data.title}
                    </h1>

                    <p className="text-[#74787C] text-[12px]">
                      Efficiently reinvent installed base opportunities after
                      team driven quality vectors. Dramatically for value <br />{" "}
                      added partnerships. Holisticly reintermediate client based
                      materials...
                    </p>
                    <div className="h-[1px] bg-[#DDDEE1] my-3"></div>
                    <Link to={`/blog-detail/${data.id}`}  className="uppercase font-semibold cursor-pointer font-Jost text-[14px] text-[#CB3A1A] mb-2">
                      Read Details {">>"}
                    </Link>
                  </div>
                </>
              );
            })}

            <div className="flex gap-3">
              <div className="w-[50px] h-[50px] bg-[#CB3A1A] flex justify-center items-center cursor-pointer text-white">
                1
              </div>
              <div className="w-[50px] h-[50px] flex text-black justify-center bg-[#F6F6F6] items-center cursor-pointer">
                2
              </div>
              <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer  bg-[#F6F6F6] text-black">
                3
              </div>
              <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer  bg-[#F6F6F6] text-black">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 1.21875L13.75 6.46875C13.9062 6.625 14 6.8125 14 7.03125C14 7.21875 13.9062 7.40625 13.75 7.5625L8.25 12.8125C7.96875 13.0938 7.46875 13.0938 7.1875 12.7812C6.90625 12.5 6.90625 12 7.21875 11.7188L11.375 7.78125H0.75C0.3125 7.78125 0 7.4375 0 7.03125C0 6.59375 0.3125 6.28125 0.75 6.28125H11.375L7.21875 2.3125C6.90625 2.03125 6.90625 1.53125 7.1875 1.25C7.46875 0.9375 7.9375 0.9375 8.25 1.21875Z"
                    fill="#111111"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* right */}
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

export default Blog;

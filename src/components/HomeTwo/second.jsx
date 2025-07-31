import player from "../../assets/player.png";
import notebook from "../../assets/notebool.png";
import burger from "../../assets/burger-icon.png";
import heading from "../../assets/heading.png";
import tag from "../../assets/tag.png";
export default function FoodSection() {
  return (
    <section className="bg-white font-[jost]">
      <div className="py-16 md:py-20 lg:py-24">
        <img src={burger} alt="" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
                  CRISPY, EVERY BITE TASTE
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
                  DELICIOUS FOOD FOR
                  <br />
                  HEALTHY LIFE
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12  rounded-sm flex items-center justify-center">
                    <img src={player} alt="" />
                  </div>
                  <span className="h-14 w-[2px] bg-[#D9D9D9]"></span>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">
                      QUALITY FOOD
                    </h3>
                    <p className="text-[#74787C] text-sm leading-relaxed">
                      The wise man therefore always holds Indies matters this
                      principle information
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-[#CB3A1A] rounded-sm flex items-center justify-center">
                    <img src={notebook} alt="" />
                  </div>
                  <span className="h-14 w-[2px] bg-[#D9D9D9]"></span>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">
                      SUPPLY CHAIN MAINTAIN
                    </h3>
                    <p className="text-[#74787C] text-sm leading-relaxed">
                      The wise man therefore always holds Indies matters this
                      principle information
                    </p>
                  </div>
                </div>
              </div>
              <button className="border border-[#111111] text-[#111111] px-8 py-3 text-sm font-medium uppercase hover:bg-[#111111] hover:text-white transition-colors duration-300">
                BOOK A TABLE
              </button>
            </div>
            <div className="w-full aspect-[4/3] bg-[#D9D9D9] border[10px] border-[#FAFAFA] rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="pb-16 md:pb-20 lg:pb-24">
        <div className="w-full flex justify-evenly  px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-[#CB3A1A] text-white p-8 lg:p-10">
              <h3 className="text-xl font-bold uppercase mb-4">
                FIND FOOD LOUNGE
              </h3>
              <div className="flex gap-2 mb-6">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-10 h-[2px] bg-white mt-1"> </span>
              </div>
              <div className="space-y-2 text-sm">
                <p>187B, New Ave 1000 New York</p>
                <p>999 888 999 00</p>
                <p>office@webmailfire.com</p>
              </div>
              <div className="mt-6 space-y-1 text-sm">
                <p>Mon - Thu: 10 AM - 02 AM</p>
                <p>Fri - Sun: 10 AM - 02 AM</p>
              </div>
            </div>
            <div className="bg-[#2A2A2A] text-white p-8 lg:p-10 relative overflow-hidden flex justify-end">
              <div className="w-20 relative">
                <img src={tag} alt="" className="w-full" />
              </div>
              <div className="mt-16 w-48">
                <img src={heading} alt="" className="w-full " />
              </div>
            </div>
            <div className="bg-[#111111] text-white p-8 lg:p-10">
              <h3 className="text-xl font-bold uppercase mb-4">
                CONTACT US NOW
              </h3>
              <div className="flex gap-2 mb-6">
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-10 h-[2px] bg-[#CB3A1A] mt-1"> </span>
              </div>
              <p className="text-[#74787C] text-sm leading-relaxed mb-6">
                Sus nisl platea primis dignissim quam cras molestie adipiscing
                elit. Ut fames praesent sapien...
              </p>
              <button className="border border-white text-white px-6 py-2 text-sm font-medium uppercase hover:bg-white hover:text-[#111111] transition-colors duration-300">
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

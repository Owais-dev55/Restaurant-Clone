export default function RestaurantHero() {
  return (
    <section className="relative min-h-screen bg-[#0A0504AB] flex items-center justify-center font-jost overflow-hidden border border-gray-600">
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-white font-normal text-xs tracking-[0.2em] z-10 hidden lg:block">
        OPENING HOURS: 18:00 - 02:00
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white max-w-2xl px-4 sm:px-8">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.3em] opacity-95">
              THE GREAT
            </h3>
          </div>
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] leading-tight">
              FLAVORED FOOD
            </h1>
          </div>
          <div className="flex items-center justify-center mb-12 sm:mb-14 lg:mb-16 gap-4 sm:gap-6 lg:gap-8">
            <div className="w-12 sm:w-16 lg:w-20 h-px bg-white"></div>
            <span className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] whitespace-nowrap">
              PART OF US
            </span>
            <div className="w-12 sm:w-16 lg:w-20 h-px bg-white"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <button className="relative font-semibold text-sm tracking-[0.2em] uppercase text-white pb-1 border-b-2 border-white hover:opacity-80 transition-opacity">
              BOOK A TABLE
            </button>
            <button className="font-semibold text-sm tracking-[0.2em] uppercase text-white hover:opacity-80 transition-opacity">
              VIEW MENU
            </button>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/30"></div>
        </div>
      </div>

      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-white font-normal text-xs tracking-[0.2em] z-10 hidden lg:block">
        OPENING HOURS: 18:00 - 02:00
      </div>
    </section>
  );
}

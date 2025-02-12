
const HeroImage = () => {
  return (
    <div className="w-full z-10 min-h-screen mt-34 relative hidden md:block">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat md:bg-[url('./hero1.png')]"  >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-30 h-full">
          {/* Left Content */}
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-secondary text-[18px] font-work font-semibold uppercase">Caring for Life</p>
            <h1 className="text-3xl font-yeseva md:text-5xl font-bold text-primary leading-tight mt-2">
              Leading the Way <br /> in Medical Excellence
            </h1>
            <button className="mt-6 px-8 py-3 bg-extra text-primary font-semibold shadow-md hover:bg-secondary font-work rounded-full transition">
              Our Services
            </button>
          </div>
        </div>

        {/* Absolute Positioned Appointment Buttons */}
        <div className="hidden md:block">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full flex justify-center gap-4">
            <button className="flex items-center gap-10 px-12 py-6 bg-primary text-white rounded-lg shadow-md hover:bg-blue-800 transition">
              Book an Appointment <img src="./calendar.png" alt="calendar" className="h-8 w-8" />
            </button>
            <button className="flex items-center gap-10 px-12 py-6 bg-extra text-primary rounded-lg shadow-md hover:bg-blue-400 transition">
              Book an Appointment <img src="./user.svg" alt="calendar" className="h-8 w-8" />
            </button>
            <button className="flex items-center gap-10 px-12 py-6 bg-secondary text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Book an Appointment <img src="./money.svg" alt="calendar" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



const MobileHeroImg = () => {
  return (
    <div className="w-full md:hidden">
      <div style={{
        backgroundImage: `url('./mobileHero.png'), linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 25%)",
        maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 25%)",
      }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-30 h-full">
          {/* Left Content */}
          <div className=" text-center py-8 md:text-left">
            <p className="text-secondary text-[18px] font-work font-semibold uppercase">Caring for Life</p>
            <h1 className="text-3xl font-yeseva md:text-5xl font-bold text-primary leading-tight mt-2">
              Leading the Way <br /> in Medical Excellence
            </h1>
            <button className="mt-6 px-8 py-3 bg-extra text-primary font-semibold shadow-md hover:bg-secondary font-work rounded-full transition">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CombinedHeroImg = () => {
  return (
    <header>
      <HeroImage />
      <MobileHeroImg />
    </header>
  );
}
export default CombinedHeroImg;

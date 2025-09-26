

const Header = () => {
  return (
    <section className="mx-4 md:mx-8 lg:mx-30">
        <div className="flex items-center justify-between py-4 md:py-5">
          <div className="w-full h-full max-w-32 md:max-w-36 lg:max-w-42 max-h-12 md:max-h-15">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-2 px-4 md:py-2.5 md:px-6.5 bg-[#3BA334] shadow-[0px_8px_16px_0px_rgba(57,164,50,0.34)] rounded-xl cursor-pointer">
            <button className="text-white font-sans font-bold text-sm md:text-base leading-6.5 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </section>
  )
}

export default Header
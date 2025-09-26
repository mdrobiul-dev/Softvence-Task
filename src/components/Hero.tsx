

const Hero = () => {
  return (
     <section className="relative overflow-hidden">
      <div className="w-fit h-fit absolute top-[40%] left-[45%] lg:top-10 lg:left-95">
        <img src="/images/flower.png" className="w-full h-full object-cover"/>
      </div>
        <div className="mx-4 md:mx-8 lg:ml-30 flex flex-col lg:flex-row">
          {/* hero text part */}
          <div className="relative w-full lg:w-1/2 mt-8 md:mt-12 lg:mt-22.5 order-2 lg:order-1">
          <div className="hidden lg:block w-fit h-fit absolut md:top-[80%]e lg:top-[30%] lg:left-[23%]">
        <img src="/images/underline.png" className="w-full h-full object-cover"/>
      </div>
            <h1 className=" font-sans font-bold text-4xl md:text-5xl lg:text-[84px] leading-tight md:leading-23 text-[#212B36] mb-4 text-center lg:text-left">
              All Your Jobs <br /> One Smart App
            </h1>
            <p className="font-sans font-normal text-sm md:text-base leading-6 text-[#637381] mb-8 md:mb-16 text-center lg:text-left">
              Built for business owners, employees, and clients streamline job
              scheduling, service tracking, and team management in one powerful
              app.
            </p>
            <div className="w-full flex flex-col sm:flex-row gap-3 md:gap-4.5 justify-center lg:justify-start">
              {/* apple */}
              <div className="flex gap-3 items-center pl-3.5 border-2 border-[#ABDAA9] rounded-lg py-2">
                <div className="h-full w-full max-h-[27px] max-w-5.5">
                  <img
                    src="/images/Apple.png"
                    alt="Apple logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-normal text-[9px] leading-[9px] text-[#212B36]">
                    Download on the
                  </span>
                  <a
                    href="#"
                    className="font-sans font-semibold text-sm md:text-lg leading-[100%] tracking-[-0.47px] pr-4"
                  >
                    App Store
                  </a>
                </div>
              </div>
              {/* playstore */}
              <div className="flex gap-3 items-center pl-3.5 border-2 border-[#ABDAA9] rounded-lg py-2">
                <div className="h-full w-full max-h-[27px] max-w-5.5">
                  <img
                    src="/images/Playstore.png"
                    alt="Play Store logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-normal text-[9px] leading-[9px] text-[#212B36]">
                    Download on the
                  </span>
                  <a
                    href="#"
                    className="font-sans font-semibold text-sm md:text-lg leading-[100%] tracking-[-0.47px] pr-4"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* hero image part */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0 bg-[url('/images/Ellipse.png')]  bg-contain bg-no-repeat bg-center">
            <div className="relative  h-64 md:h-80 lg:h-full">
              <div className="w-full flex justify-center">
                <img
                  src="/images/mobile.png"
                  alt="mobile"
                  className="h-64 md:h-80 lg:h-full object-contain"
                />
              </div>
              <div className="w-fit h-fit absolute bottom-0">
                <img
                  src="/images/fade.png"
                  alt="fade"
                  className="h-full w-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero


const Footer = () => {
  return (
     <footer className="bg-[url('/images/Footer_bg.png')] mt-16 md:mt-29 bg-no-repeat bg-cover">
        <div className="px-4 md:px-8 lg:px-30">
          <div className="flex flex-col lg:flex-row justify-between pt-12 md:pt-27.5 gap-8">
            <div className="w-fit h-fit mx-auto lg:mx-0">
              <img src="/images/footer_logo.png" alt="logo" className="w-32 md:w-40 lg:w-full h-full object-cover"/>
            </div>
            <p className="font-sans font-medium text-base leading-6 text-[#CFD8D6] text-center lg:text-left">
              Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.
            </p>
            <div className="w-full lg:w-fit flex flex-col sm:flex-row gap-3 md:gap-4.5 justify-center lg:justify-start">
              {/* apple */}
              <div className="flex gap-3 items-center pl-3.5 border-2 border-[#347C30] rounded-lg py-2">
                <div className="h-full w-full max-h-[27px] max-w-5.5">
                  <img
                    src="/images/Apple_white.png"
                    alt="Apple logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-normal text-[10px] leading-[10px] text-white">
                    Download on the
                  </span>
                  <a
                    href="#"
                    className="font-sans font-semibold text-sm md:text-lg leading-[100%] tracking-[-0.47px] pr-4 text-white"
                  >
                    App Store
                  </a>
                </div>
              </div>
              {/* playstore */}
              <div className="flex gap-3 items-center pl-3.5 border-2 border-[#347C30] rounded-lg py-2">
                <div className="h-full w-full max-h-[27px] max-w-5.5">
                  <img
                    src="/images/Playstore.png"
                    alt="Play Store logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-normal text-[9px] leading-[9px] text-white">
                    Download on the
                  </span>
                  <a
                    href="#"
                    className="font-sans font-semibold text-sm md:text-lg leading-[100%] tracking-[-0.47px] pr-4 text-white"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 md:gap-8 pt-12 md:pt-25 pb-6">
            <div className="h-8 w-8">
              <img src="/images/YouTube.png" alt="youtube" className="h-full w-full object-contain"/>
            </div>
            <div className="h-8 w-8">
              <img src="/images/X.png" alt="X" className="h-full w-full object-contain"/>
            </div>
            <div className="h-8 w-8">
              <img src="/images/Facebook.png" alt="Facebook" className="h-full w-full object-contain"/>
            </div>
            <div className="h-8 w-8">
              <img src="/images/Instagram.png" alt="Instagram" className="h-full w-full object-contain"/>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#D7DAE0]/40">
          <div className="px-4 md:px-8 lg:px-30">
            <p className="font-sans font-normal text-sm leading-[150%] text-[#E5E5E5] py-3 text-center lg:text-left">
              © 2021-2025, ScapeSync. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
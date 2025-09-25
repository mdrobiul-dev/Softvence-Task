const Home = () => {
  return (
    <>
      {/* header and logo */}
      <section className="mx-30">
        <div className="flex items-center justify-between py-5">
          <div className="w-full h-full max-w-42 max-h-15">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-2.5 px-6.5 bg-[#3BA334] shadow-[0px_8px_16px_0px_rgba(57,164,50,0.34)] rounded-xl cursor-pointer">
            <button className="text-white font-sans font-bold text-base leading-6.5 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* hero section */}

      <section>
        <div className="h-fit w-fit absolute top-0 left-0">
          <img
            src="/images/Ellipseleft.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-30 flex ">
          {/* hero text part */}
          <div className="w-1/2 mt-22.5">
            <h1 className="font-sans font-bold text-[84px] leading-23 text-[#212B36] mb-4">
              All Your Jobs One Smart App
            </h1>
            <p className="font-sans font-normal text-base leading-6 text-[#637381] mb-16">
              Built for business owners, employees, and clients streamline job
              scheduling, service tracking, and team management in one powerful
              app.
            </p>
            <div className="w-fit flex gap-4.5">
              {/* apple */}
              <div className="flex gap-3 items-center pl-3.5 border-2 border-[#ABDAA9] rounded-lg">
                <div className="h-full w-full max-h-[27px] max-w-5.5">
                  <img
                    src="/images/Apple.png"
                    alt="Apple logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 py-2.5">
                  <span className="font-sans font-normal text-[9px] leading-[9px] text-[#212B36]">
                    Download on the
                  </span>
                  <a
                    href="#"
                    className="font-sans font-semibold text-lg leading-[100%] tracking-[-0.47px] pr-4"
                  >
                    App Store
                  </a>
                </div>
              </div>
              {/* playstore */}
              <div className="flex gap-3 items-center pl-3.5 border-2 border-[#ABDAA9] rounded-lg">
                <div className="h-full w-full max-h-[27px] max-w-5.5">
                  <img
                    src="/images/Playstore.png"
                    alt="Apple logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 py-2.5">
                  <span className="font-sans font-normal text-[9px] leading-[9px] text-[#212B36]">
                    Download on the
                  </span>
                  <a
                    href="#"
                    className="font-sans font-semibold text-lg leading-[100%] tracking-[-0.47px] pr-4"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* hero image part */}
          <div className="w-1/2 relative">
            <div className="bg-[url('/images/Ellipse.png')] h-full w-full">
              <div className="w-fit h-fit">
                <img
                  src="/images/mobile.png"
                  alt="mobile"
                  className="h-full w-full object-cover "
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

      {/* card section */}
      <section className="mx-30 mt-20 mb-43">
        <div className="flex">
          {/* single card */}
          <div className="pr-9 border-r-2 border-r-[#F4F6F8] mr-9">
            <div className="flex flex-col gap-5 w-full">
              <div className="h-fit w-fit">
                <img
                  src="/images/calender.png"
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="pb-1 font-sans font-bold text-lg leading-7 text-[#212B36]">
                  Easy Service Booking
                </h2>
                <p className="font-sans font-normal text-sm leading-[150%] text-[#637381]">
                  Streamlined booking process for clients with service catalogs
                  and availability.
                </p>
              </div>
            </div>
          </div>
          {/* single card */}
          <div className="pr-9 border-r-2 border-r-[#F4F6F8] mr-9">
            <div className="flex flex-col gap-5 w-full">
              <div className="h-fit w-fit">
                <img
                  src="/images/calender.png"
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="pb-1 font-sans font-bold text-lg leading-7 text-[#212B36]">
                  Real-Time Tracking
                </h2>
                <p className="font-sans font-normal text-sm leading-[150%] text-[#637381]">
                  Monitor job progress, employee hours, and project timelines
                  with live updates.
                </p>
              </div>
            </div>
          </div>
          {/* single card */}
          <div className="pr-9 border-r-2 border-r-[#F4F6F8] mr-9">
            <div className="flex flex-col gap-5 w-full">
              <div className="h-fit w-fit">
                <img
                  src="/images/calender.png"
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="pb-1 font-sans font-bold text-lg leading-7 text-[#212B36]">
                  Performance Analytics
                </h2>
                <p className="font-sans font-normal text-sm leading-[150%] text-[#637381]">
                  Comprehensive reporting and insights to improve business
                  operations and efficiency.
                </p>
              </div>
            </div>
          </div>
          {/* single card */}
          <div>
            <div className="flex flex-col gap-5 w-full">
              <div className="h-fit w-fit">
                <img
                  src="/images/calender.png"
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="pb-1 font-sans font-bold text-lg leading-7 text-[#212B36]">
                  Secure & Reliable
                </h2>
                <p className="font-sans font-normal text-sm leading-[150%] text-[#637381]">
                  Enterprise-grade security with 99.9% uptime guarantee and data
                  protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build for Everyone section */}

      <section>
        <div className="pl-30">
          <div className="mx-auto">
            <div>
              <h2 className=" font-sans font-bold text-5xl leading-16 text-[#212B36] pb-3  text-center">
                Build for Everyone
              </h2>
              <p className=" font-sans font-normal text-sm leading-[150%] text-[#637381] text-center">
                Whether you're booking services, managing tasks, or running
                operations, we've <br /> designed the perfect experience for
                you.
              </p>
            </div>
          </div>
          {/* mobile section 1 */}
          <div className="mt-18 flex">
            <div className="w-1/2 pt-19">
              <div>
                <div className="w-fit px-5 py-1.5 text-[#3BA334] font-sans font-semibold text-sm leading-[110%] border border-[#3BA334] rounded-2xl">
                  Users
                </div>
                <h3 className="pb-4 font-sans font-bold text-2xl leading-[110%] text-[#0F172A] pt-4.5">
                  Book services, track progress and stay updated
                </h3>
                <p className="font-sans font-normal text-lg leading-[160%] text-[#637381]">
                  Easily schedule appointments, get real-time updates, and <br /> enjoy
                  a smooth, transparent service experience.
                </p>
                <ul className="space-y-2 pt-7">
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]">
                    Book services in seconds
                  </li>
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] py-4 relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]/70">
                    Track real-time job updates
                  </li>
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]/40">
                    Schedule appointments at your convenience
                  </li>
                </ul>
              </div>
            </div>
            {/* image part */}
            <div className="w-1/2 relative">
            <div className="bg-[url('/images/Ellipse.png')] h-full w-full">
              <div className="w-fit h-fit">
                <img
                  src="/images/mobile_2.png"
                  alt="mobile"
                  className="h-full w-full object-cover "
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
           {/* mobile section 2 */}
          <div className="mt-18 flex">
               {/* image part */}
            <div className="w-1/2 relative">
            <div className="bg-[url('/images/Ellipse.png')] h-full w-full">
              <div className="w-fit h-fit">
                <img
                  src="/images/mobile_3.png"
                  alt="mobile"
                  className="h-full w-full object-cover "
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
            {/* text part */}
            <div className="w-1/2 pt-19">
              <div>
                <div className="w-fit px-5 py-1.5 text-[#3BA334] font-sans font-semibold text-sm leading-[110%] border border-[#3BA334] rounded-2xl">
                  Business Owners
                </div>
                <h3 className="pb-4 font-sans font-bold text-2xl leading-[110%] text-[#0F172A] pt-4.5">
                  Assign jobs, monitor performance, and <br /> streamline operations.
                </h3>
                <p className="font-sans font-normal text-lg leading-[160%] text-[#637381]">
                Gain full control of your workforce with real-time tracking, <br /> smart scheduling, and service management in one app.
                </p>
                <ul className="space-y-2 pt-7">
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]">
                    Assign jobs to the right team member
                  </li>
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] py-4 relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]/70">
                    Monitor performance in real time
                  </li>
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]/40">
                    Manage clients and services seamlessly
                  </li>
                </ul>
              </div>
            </div>
          </div>
            {/* mobile section 3 */}
          <div className="mt-18 flex">
            <div className="w-1/2 pt-19">
              <div>
                <div className="w-fit px-5 py-1.5 text-[#3BA334] font-sans font-semibold text-sm leading-[110%] border border-[#3BA334] rounded-2xl">
                 Employees
                </div>
                <h3 className="pb-4 font-sans font-bold text-2xl leading-[110%] text-[#0F172A] pt-4.5">
                 See tasks, track time, and navigate <br /> routes with ease.
                </h3>
                <p className="font-sans font-normal text-lg leading-[160%] text-[#637381]">
                 Everything you need to manage your workday from job <br /> assignments to optimized routes and time logging.
                </p>
                <ul className="space-y-2 pt-7">
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]">
                   Assign jobs to the right team member
                  </li>
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] py-4 relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]/70">
                   Monitor performance in real time
                  </li>
                  <li className="font-sans font-medium text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0  before:w-1 before:h-7 before:rounded-full before:bg-[#3BA334]/40">
                    Manage clients and services seamlessly
                  </li>
                </ul>
              </div>
            </div>
            {/* image part */}
            <div className="w-1/2 relative">
            <div className="bg-[url('/images/Ellipse.png')] h-full w-full">
              <div className="w-fit h-fit">
                <img
                  src="/images/mobile_4.png"
                  alt="mobile"
                  className="h-full w-full object-cover "
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
        </div>
      </section>
               
                 {/* What Our Users Are Saying section */}
         <section className="mt-43">
          <div className="px-30">
             <h2 className="pb-1.5 font-sans font-bold text-5xl leading-16 text-[#212B36] text-center">What Our Users Are Saying</h2>
             <p className="font-sans font-normal text-sm leading-[150%] text-[#637381] text-center">Real stories from clients, employees, and business owners who use <br /> our app every day.</p>
             {/* cards */}
             <div className="flex gap-5">
              {/* single */}
              <div className="w-full p-7 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)] bg-white rounded-lg">
                <div className="flex gap-3.5 pb-6.5">
                  <div className="w-fit h-fit">
                    <img src="/images/profile.png" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <span className="pb-1 font-inter font-bold text-base text-[#212B36]">Farzana H.</span>
                    <p className=" font-inter font-normal text-sm text-[#637381]">Owner, CleanPro Services</p>
                  </div>
                </div>
                <p className="font-sans font-normal text-base leading-6.5 tracking-[-1%] text-[#637381]">This app completely changed the way we <br /> manage our team. Assigning jobs takes <br /> minutes, and we never miss an update.</p>
              </div>
             {/* single */}
              <div className="w-full p-7 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)] bg-white rounded-lg">
                <div className="flex gap-3.5 pb-6.5">
                  <div className="w-fit h-fit">
                    <img src="/images/profile.png" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <span className="pb-1 font-inter font-bold text-base text-[#212B36]">Farzana H.</span>
                    <p className=" font-inter font-normal text-sm text-[#637381]">Owner, CleanPro Services</p>
                  </div>
                </div>
                <p className="font-sans font-normal text-base leading-6.5 tracking-[-1%] text-[#637381]">This app completely changed the way we <br /> manage our team. Assigning jobs takes <br /> minutes, and we never miss an update.</p>
              </div>
               {/* single */}
              <div className="w-full p-7 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)] bg-white rounded-lg">
                <div className="flex gap-3.5 pb-6.5">
                  <div className="w-fit h-fit">
                    <img src="/images/profile.png" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <span className="pb-1 font-inter font-bold text-base text-[#212B36]">Farzana H.</span>
                    <p className=" font-inter font-normal text-sm text-[#637381]">Owner, CleanPro Services</p>
                  </div>
                </div>
                <p className="font-sans font-normal text-base leading-6.5 tracking-[-1%] text-[#637381]">This app completely changed the way we <br /> manage our team. Assigning jobs takes <br /> minutes, and we never miss an update.</p>
              </div>
             </div>
          </div>
         </section>
    </>
  );
};

export default Home;

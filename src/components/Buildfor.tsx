

const Buildfor = () => {
  return (
    <section className="px-4 md:px-8 lg:px-30">
        <div className="mx-auto">
          <div>
            <h2 className="relative font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-16 text-[#212B36] pb-3 text-center">
              Build for Everyone
               <div className="w-[130px] h-fit md:w-[160px] md:h-fit lg:w-fit lg:h-fit absolute top-[72%] left-[50%]">
        <img src="/images/underline_2.png" className="w-full h-full object-cover"/>
      </div>
            </h2>
            <p className="font-sans font-normal text-sm leading-[150%] text-[#637381] text-center">
              Whether you're booking services, managing tasks, or running
              operations, we've <br className="hidden md:block" /> designed the perfect experience for
              you.
            </p>
          </div>
        </div>
        
        {/* mobile section 1 */}
        <div className="mt-12 md:mt-18 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 pt-8 md:pt-19 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <div className="w-fit px-5 py-1.5 text-[#3BA334] font-sans font-semibold text-sm leading-[110%] border border-[#3BA334] rounded-2xl mx-auto lg:mx-0">
                Users
              </div>
              <h3 className="pb-4 font-sans font-bold text-xl md:text-2xl leading-[110%] text-[#0F172A] pt-4.5">
                Book services, track progress and stay updated
              </h3>
              <p className="font-sans font-normal text-base md:text-lg leading-[160%] text-[#637381]">
                Easily schedule appointments, get real-time updates, and <br className="hidden md:block" /> enjoy a smooth, transparent service experience.
              </p>
              <ul className="space-y-2 pt-6 md:pt-7">
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]">
                  Book services in seconds
                </li>
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] py-3 md:py-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]/70">
                  Track real-time job updates
                </li>
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]/40">
                  Schedule appointments at your convenience
                </li>
              </ul>
            </div>
          </div>
          {/* image part */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="bg-[url('/images/Ellipse.png')] bg-contain bg-no-repeat bg-center h-64 md:h-80 lg:h-full">
              <div className="w-full flex justify-center">
                <img
                  src="/images/mobile_2.png"
                  alt="mobile"
                  className="h-64 md:h-80 lg:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile section 2 */}
        <div className="mt-12 md:mt-18 flex flex-col lg:flex-row">
          {/* image part */}
          <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="bg-[url('/images/Ellipse.png')] bg-contain bg-no-repeat bg-center h-64 md:h-80 lg:h-full">
              <div className="w-full flex justify-center">
                <img
                  src="/images/mobile_3.png"
                  alt="mobile"
                  className="h-64 md:h-80 lg:h-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="w-full lg:w-1/2 pt-8 md:pt-19 lg:pl-8">
            <div className="text-center lg:text-left">
              <div className="w-fit px-5 py-1.5 text-[#3BA334] font-sans font-semibold text-sm leading-[110%] border border-[#3BA334] rounded-2xl mx-auto lg:mx-0">
                Business Owners
              </div>
              <h3 className="pb-4 font-sans font-bold text-xl md:text-2xl leading-[110%] text-[#0F172A] pt-4.5">
                Assign jobs, monitor performance, and streamline operations.
              </h3>
              <p className="font-sans font-normal text-base md:text-lg leading-[160%] text-[#637381]">
                Gain full control of your workforce with real-time tracking, <br className="hidden md:block" /> smart scheduling, and service management in one app.
              </p>
              <ul className="space-y-2 pt-6 md:pt-7">
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]">
                  Assign jobs to the right team member
                </li>
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] py-3 md:py-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]/70">
                  Monitor performance in real time
                </li>
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]/40">
                  Manage clients and services seamlessly
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* mobile section 3 */}
        <div className="mt-12 md:mt-18 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 pt-8 md:pt-19 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <div className="w-fit px-5 py-1.5 text-[#3BA334] font-sans font-semibold text-sm leading-[110%] border border-[#3BA334] rounded-2xl mx-auto lg:mx-0">
                Employees
              </div>
              <h3 className="pb-4 font-sans font-bold text-xl md:text-2xl leading-[110%] text-[#0F172A] pt-4.5">
                See tasks, track time, and navigate routes with ease.
              </h3>
              <p className="font-sans font-normal text-base md:text-lg leading-[160%] text-[#637381]">
                Everything you need to manage your workday from job <br className="hidden md:block" /> assignments to optimized routes and time logging.
              </p>
              <ul className="space-y-2 pt-6 md:pt-7">
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]">
                  View daily tasks and schedules
                </li>
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] py-3 md:py-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]/70">
                  Track time and job progress
                </li>
                <li className="font-sans font-medium text-base md:text-lg leading-[110%] text-[#0F172A] relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 md:before:h-7 before:rounded-full before:bg-[#3BA334]/40">
                  Navigate optimized routes efficiently
                </li>
              </ul>
            </div>
          </div>
          {/* image part */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="bg-[url('/images/Ellipse.png')] bg-contain bg-no-repeat bg-center h-64 md:h-80 lg:h-full">
              <div className="w-full flex justify-center">
                <img
                  src="/images/mobile_4.png"
                  alt="mobile"
                  className="h-64 md:h-80 lg:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Buildfor
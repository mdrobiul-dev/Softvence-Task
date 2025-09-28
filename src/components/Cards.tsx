


const Cards = () => {
  return (
     <section className="mx-4 md:mx-8 lg:mx-30 mt-12 md:mt-20 mb-20 md:mb-43">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* single card */}
          <div className="pr-4 md:pr-9 border-r-0 lg:border-r-2 border-r-[#F4F6F8] lg:mr-9">
            <div className="flex flex-col gap-4 md:gap-5 w-full">
              <div className="h-fit w-fit mx-auto lg:mx-0">
                <img
                  src="/images/calender.png"
                  alt="icon"
                  className="w-12 h-12 md:w-16 md:h-16 object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
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
          <div className="pr-4 md:pr-9 border-r-0 lg:border-r-2 border-r-[#F4F6F8] lg:mr-9">
            <div className="flex flex-col gap-4 md:gap-5 w-full">
              <div className="h-fit w-fit mx-auto lg:mx-0">
                <img
                  src="/images/mark.png"
                  alt="icon"
                  className="w-12 h-12 md:w-16 md:h-16 object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
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
          <div className="pr-4 md:pr-9 border-r-0 lg:border-r-2 border-r-[#F4F6F8] lg:mr-9">
            <div className="flex flex-col gap-4 md:gap-5 w-full">
              <div className="h-fit w-fit mx-auto lg:mx-0">
                <img
                  src="/images/graph.png"
                  alt="icon"
                  className="w-12 h-12 md:w-16 md:h-16 object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
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
            <div className="flex flex-col gap-4 md:gap-5 w-full">
              <div className="h-fit w-fit mx-auto lg:mx-0">
                <img
                  src="/images/shield.png"
                  alt="icon"
                  className="w-12 h-12 md:w-16 md:h-16 object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
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
  )
}

export default Cards
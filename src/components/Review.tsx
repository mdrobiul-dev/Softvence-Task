
const Review = () => {
  return (
    <section className="mt-20 md:mt-43">
        <div className="px-4 md:px-8 lg:px-30">
          <h2 className="pb-1.5 font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-16 text-[#212B36] text-center">
            What Our Users Are Saying
          </h2>
          <p className="font-sans font-normal text-sm leading-[150%] text-[#637381] text-center">
            Real stories from clients, employees, and business owners who use <br className="hidden md:block" /> our app every day.
          </p>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-12">
            {/* single */}
            <div className="w-full p-6 md:p-7 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)] bg-white rounded-lg">
              <div className="flex gap-3.5 pb-6.5">
                <div className="w-12 h-12">
                  <img
                    src="/images/profile.png"
                    className="w-full h-full object-cover rounded-full"
                    alt="profile"
                  />
                </div>
                <div>
                  <span className="pb-1 font-inter font-bold text-base text-[#212B36]">
                    Farzana H.
                  </span>
                  <p className="font-inter font-normal text-sm text-[#637381]">
                    Owner, CleanPro Services
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal text-base leading-6.5 tracking-[-1%] text-[#637381]">
                This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.
              </p>
            </div>
            {/* single */}
            <div className="w-full p-6 md:p-7 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)] bg-white rounded-lg">
              <div className="flex gap-3.5 pb-6.5">
                <div className="w-12 h-12">
                  <img
                    src="/images/profile_2.png"
                    className="w-full h-full object-cover rounded-full"
                    alt="profile"
                  />
                </div>
                <div>
                  <span className="pb-1 font-inter font-bold text-base text-[#212B36]">
                    Ahmed R.
                  </span>
                  <p className="font-inter font-normal text-sm text-[#637381]">
                    Technician
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal text-base leading-6.5 tracking-[-1%] text-[#637381]">
                I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.
              </p>
            </div>
            {/* single */}
            <div className="w-full p-6 md:p-7 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)] bg-white rounded-lg md:col-span-2 lg:col-span-1">
              <div className="flex gap-3.5 pb-6.5">
                <div className="w-12 h-12">
                  <img
                    src="/images/profile_3.png"
                    className="w-full h-full object-cover rounded-full"
                    alt="profile"
                  />
                </div>
                <div>
                  <span className="pb-1 font-inter font-bold text-base text-[#212B36]">
                    Rafiq M.
                  </span>
                  <p className="font-inter font-normal text-sm text-[#637381]">
                    Homeowner
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal text-base leading-6.5 tracking-[-1%] text-[#637381]">
                As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Review
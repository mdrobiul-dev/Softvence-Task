

const Questions = () => {
  return (
    <section className="mt-20 md:mt-42.5">
        <div className="px-4 md:px-8 lg:px-16 xl:px-56">
          <h2 className="pb-1.5 font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-16 text-[#212B36] text-center">
            Frequently Asked Questions
          </h2>
          <p className="pb-1.5 font-sans font-normal text-sm leading-[150%] text-[#637381] text-center">
            Quick answers to help you get the most out of our app.
          </p>
          <div className="mt-8 md:mt-15 flex flex-col gap-4">
            <div className="w-full border-2 border-[#C7E6C5] rounded-xl">
              <div className="px-4 md:px-6 flex justify-between py-4 md:py-6">
                <h3 className="font-sans font-semibold text-sm md:text-base leading-7 text-[#212B36]">
                  Is the app free to use?
                </h3>
                <div className="h-fit w-fit">
                  <img
                    src="/images/minus.png"
                    alt="icon"
                    className="h-6 w-6 object-cover"
                  />
                </div>
              </div>
              <p className="font-sans font-normal text-sm leading-6 text-[#637381] px-4 md:px-6 pb-4 md:pb-6">
                Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.
              </p>
            </div>
            {/* single row */}
            <div className="px-4 md:px-6 flex justify-between py-4 md:py-6 w-full border-2 border-[#C7E6C5] rounded-xl">
              <h3 className="font-sans font-semibold text-sm md:text-base leading-7 text-[#212B36]">
                Can I assign multiple employees to one job?
              </h3>
              <div className="h-fit w-fit">
                <img
                  src="/images/plus.png"
                  alt="icon"
                  className="h-6 w-6 object-cover"
                />
              </div>
            </div>
            {/* single row */}
            <div className="px-4 md:px-6 flex justify-between py-4 md:py-6 w-full border-2 border-[#C7E6C5] rounded-xl">
              <h3 className="font-sans font-semibold text-sm md:text-base leading-7 text-[#212B36]">
                Does it work on both mobile and desktop?
              </h3>
              <div className="h-fit w-fit">
                <img
                  src="/images/plus.png"
                  alt="icon"
                  className="h-6 w-6 object-cover"
                />
              </div>
            </div>
            {/* single row */}
            <div className="px-4 md:px-6 flex justify-between py-4 md:py-6 w-full border-2 border-[#C7E6C5] rounded-xl">
              <h3 className="font-sans font-semibold text-sm md:text-base leading-7 text-[#212B36]">
                Is GPS tracking always on?
              </h3>
              <div className="h-fit w-fit">
                <img
                  src="/images/plus.png"
                  alt="icon"
                  className="h-6 w-6 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Questions
const AccountCreated = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans relative">
      {/* Logo top-left */}
      <div className="absolute h-full w-full max-h-14 max-w-34 top-6 left-6 flex items-center">
        <img
          src="/images/logo.png"
          alt="ScapeSync Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center  px-4">
        {/* Fireworks Image */}
        <img
          src="/images/fireworks.png"
          alt="Fireworks Celebration"
          className="max-w-[260px] w-full h-auto mb-8"
        />

        {/* Heading */}
        <h1 className="text-2xl font-bold text-[#212B36]">
          Account Created Successfully!
        </h1>

        {/* Subtext */}
        <p className="mt-2 text-base text-[#637381]">
          Your account is set up! Just verify your email to get started.
        </p>

        {/* Button */}
        <button className="mt-8 w-full max-w-[440px] bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition">
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default AccountCreated;

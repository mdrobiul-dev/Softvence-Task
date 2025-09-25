import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Forgetpassword = () => {

      const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    // Add password reset API call here
  };
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
      {/* Logo top-left */}
      <div className="absolute h-full w-full max-h-14 max-w-34 top-6 left-6 flex items-center space-x-2">
        <img
          src="/images/logo.png"
          alt="ScapeSync Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-[530px] bg-white p-8 rounded-lg">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 text-green-600 text-sm font-medium mb-6 hover:underline"
        >
          <IoIosArrowBack className="text-lg" />
          Back
        </button>

        {/* Title */}
        <h2 className="font-sans text-2xl font-bold leading-9 text-[#212B36]">
          Forgot your password?
        </h2>
        <p className="font-sans font-normal text-base leading-6 text-[#637381] mt-2">
          Please enter the email address associated with your account, and we’ll
          email you a link to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email Input */}
          <div className="flex flex-col w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="border-[#919EAB]/32 px-[10px] py-[11px] text-sm bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400"
              required
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default Forgetpassword
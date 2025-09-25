import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Emailvariefication = () => {

    const [code, setCode] = useState(Array(6).fill(""));

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input if value entered
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    console.log("Entered Code:", code.join(""));
    // Add API call or verification logic here

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
          className="flex items-center text-green-600 text-sm font-medium mb-6 hover:underline"
        >
          <IoIosArrowBack /> <span className="pl-2">Back</span>
        </button>

        {/* Title */}
        <h2 className="font-sans  text-2xl font-bold leading-9 text-[#212B36]">
          Please check your email!
        </h2>
        <p className="font-sans font-normal  text-base leading-6 text-[#637381] mt-2">
          We’ve emailed a 6-digit confirmation code to
          <span className="font-medium text-[#212B36]">acb@domain</span>, please
          enter the code below to verify your email.
        </p>

        {/* Code Input */}
        <form onSubmit={handleVerify} className="mt-8 flex flex-col gap-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center border-2 border-gray-300 rounded-md text-lg font-medium focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition"
          >
            Verify
          </button>
        </form>

        {/* Resend Code */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have a code?{" "}
          <button
            type="button"
            onClick={() => alert("Resend code clicked")}
            className="text-green-600 font-medium hover:underline"
          >
            Resend code
          </button>
        </p>
      </div>
    </div>
  )
}

export default Emailvariefication
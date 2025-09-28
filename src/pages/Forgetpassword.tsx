import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/api"; 

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessage("");
  setLoading(true);

  try {
    const result = await authServices.forgotPassword(email);

    console.log("Forgot password result:", result);

    setMessage("✅ Password reset link has been sent to your email.");
    
    setTimeout(() => {
      navigate('/forgot-verify-otp', { 
        state: { email: email } 
      });
    }, 3000);

  } catch (error: any) {
    console.log("Forgot password error:", error);
    
    if (error.response?.data?.message) {
      setMessage("❌ " + error.response.data.message);
    } else if (error.message) {
      setMessage("❌ " + error.message);
    } else {
      setMessage("❌ Something went wrong. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};

  const handleBack = () => {
    navigate("/");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
   
    if (message) setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
   
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
          onClick={handleBack}
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
          Please enter the email address associated with your account, and we'll
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
              onChange={handleEmailChange}
              placeholder="Email address"
              className="border-[#919EAB]/32 px-[10px] py-[11px] text-sm bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400"
              required
              disabled={loading}
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        {/* Message (success or error) */}
        {message && (
          <div className={`mt-4 p-3 rounded-md text-center ${
            message.startsWith("✅") 
              ? "bg-green-50 border border-green-200 text-green-600" 
              : "bg-red-50 border border-red-200 text-red-600"
          }`}>
            <p className="text-sm">{message}</p>
          </div>
        )}

        {/* Additional Help Text */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Check your spam folder if you don't see the email in your inbox.</p>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;

import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { authServices } from "../services/api"; 

const EmailVerification = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState(""); 
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

 
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

 
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setError(""); 

     
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
   
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const numbers = pasteData.replace(/[^0-9]/g, '').slice(0, 6);
    
    if (numbers.length === 6) {
      const newCode = numbers.split('');
      setCode(newCode);
      newCode.forEach((digit, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index]!.value = digit;
        }
      });
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const verificationCode = code.join("");

  
    if (verificationCode.length !== 6) {
      setError("Please enter the full 6-digit code");
      setLoading(false);
      return;
    }

    if (!/^\d{6}$/.test(verificationCode)) {
      setError("Please enter a valid 6-digit code");
      setLoading(false);
      return;
    }

    try {
     
      const result = await authServices.verifyOtp(email, verificationCode);

     
      if (result.verified || result.success) {
        setSuccess("Email verified successfully! Redirecting to login...");
        
      
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err: any) {
    
      if (err.response) {
        
        const errorData = err.response.data;
        
        if (errorData.errors) {
         
          const errorMessages = Object.values(errorData.errors).flat();
          setError(errorMessages.join(', ') || "Verification failed. Please try again.");
        } else if (errorData.message) {
          setError(errorData.message);
        } else {
          setError("Verification failed. Please check the code and try again.");
        }
      } else if (err.request) {
      
        setError("Network error. Please check your connection and try again.");
      } else {
       
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (resendCooldown > 0) return;

    setResendLoading(true);
    setError("");
    setSuccess("");

    try {
     
      const result = await authServices.resendOtp(email);

      if (result.data?.otp) {
        const newOtp = result.data.otp;
        setOtpCode(newOtp);
        
       
        setSuccess(`New verification code generated! Use code: ${newOtp}`);
        setResendCooldown(60);
        setCode(Array(6).fill(""));
        inputRefs.current[0]?.focus();
        
        console.log("OTP for testing:", newOtp); 
      } else if (result.message) {
        setSuccess(result.message);
        setResendCooldown(60);
        setCode(Array(6).fill(""));
        inputRefs.current[0]?.focus();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to resend code. Please try again.");
      }
    } finally {
      setResendLoading(false);
    }
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
          onClick={() => navigate("/")}
          className="flex items-center text-green-600 text-sm font-medium mb-6 hover:underline"
        >
          <IoIosArrowBack /> <span className="pl-2">Back</span>
        </button>

        {/* Title */}
        <h2 className="font-sans text-2xl font-bold leading-9 text-[#212B36]">
          Please check your email!
        </h2>
        <p className="font-sans font-normal text-base leading-6 text-[#637381] mt-2">
          We've emailed a 6-digit confirmation code to
          <span className="font-medium text-[#212B36]"> {email}</span>, please
          enter the code below to verify your email.
        </p>

        {/* Success Message */}
        {success && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-600 text-sm text-center">{success}</p>
            {otpCode && (
              <p className="text-green-700 font-bold text-center mt-2">
                Testing OTP: {otpCode}
              </p>
            )}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        {/* Code Input */}
        <form onSubmit={handleVerify} className="mt-8 flex flex-col gap-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-center border-2 border-gray-300 rounded-md text-lg font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
                disabled={loading}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        {/* Resend Code */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have a code?{" "}
          <button
            type="button"
            onClick={handleResendCode}
            disabled={resendLoading || resendCooldown > 0}
            className="text-green-600 font-medium hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            {resendLoading ? "Sending..." : resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend code"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/api.js"; 

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

  
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!formData.terms) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
    
      const result = await authServices.register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        terms: formData.terms
      });

      console.log("Registration result:", result);

      
      navigate('/email-verification', { 
        state: { email: formData.email } 
      });

    } catch (err: any) {
     
      if (err.response) {
       
        const errorData = err.response.data;
        
        if (errorData.errors) {
         
          const errorMessages = Object.values(errorData.errors).flat();
          setError(errorMessages.join(', ') || "Registration failed. Please try again.");
        } else if (errorData.message) {
          setError(errorData.message);
        } else {
          setError("Registration failed. Please try again.");
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
      <div className="absolute h-full w-full max-h-14 max-w-34 top-6 left-6 flex items-center space-x-2">
        <img src="/images/logo.png" alt="ScapeSync Logo" className="h-full w-full object-cover" />
      </div>

      {/* Card */}
      <div className="w-full max-w-[530px] bg-white p-8 rounded-lg">
        <h2 className="font-sans text-center text-2xl font-bold leading-9 text-[#212B36]">
          Create your Account
        </h2>
        <p className="font-sans font-normal text-center text-base leading-6 text-[#637381] mt-2">
          When sports Meets smart Tech.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* First + Last name */}
          <div className="flex gap-4 items-center">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="text-[#919EAB] font-sans text-xs font-normal leading-4.5 relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                First Name
              </label>
              <input 
                id="firstName" 
                type="text" 
                placeholder="First name" 
                value={formData.firstName}
                onChange={handleChange}
                className="border-[#919EAB]/32 px-[10px] py-[11px] text-sm bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400" 
              />
            </div>
            <div className="flex flex-col w-full pt-[17px]">
              <input 
                id="lastName" 
                type="text" 
                placeholder="Last name" 
                value={formData.lastName}
                onChange={handleChange}
                className="border-[#919EAB]/32 px-[10px] py-[11px] text-sm bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400" 
              />
            </div>
          </div>

          {/* Email */}
          <div className="input flex flex-col w-full">
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email..." 
              value={formData.email}
              onChange={handleChange}
              className="font-sans font-normal text-base leading-6 border-[#919EAB]/32 px-[10px] py-[11px] text-[#212B36] bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400" 
            />
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                className="font-sans font-normal text-base leading-6 w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute inset-y-0 right-3 flex items-center"
              >
                <img src="/images/eye.png" alt="Toggle Password Visibility" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                placeholder="Confirm password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                className="font-sans font-normal text-base leading-6 w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none" 
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="absolute inset-y-0 right-3 flex items-center"
              >
                <img src="/images/eye.png" alt="Toggle Password Visibility" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="terms" 
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" 
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to Tech Take's{" "}
              <a href="#" className="underline px-1">Terms of Service</a> and{" "}
              <a href="#" className="underline px-1">Privacy Policy</a>.
            </label>
          </div>

          {/* Create Account Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        {/* Google Signup */}
        <button 
          type="button"
          className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 transition"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width={20} height={20} />
          <span className="text-gray-700 text-sm font-medium">Continue with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a 
            href="/" 
            className="text-green-600 font-medium hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
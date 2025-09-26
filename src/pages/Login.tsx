import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/api"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
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

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
     
      const result = await authServices.login({
        email: formData.email,
        password: formData.password,
        remember: formData.remember
      });

      console.log("Login result:", result);

      navigate('/'); 

    } catch (err: any) {
    
      if (err.response) {
        
        const errorData = err.response.data;
        
        if (errorData.errors) {
       
          const errorMessages = Object.values(errorData.errors).flat();
          setError(errorMessages.join(', ') || "Login failed. Please try again.");
        } else if (errorData.message) {
          setError(errorData.message);
        } else {
          setError("Login failed. Please check your credentials and try again.");
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

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/forget-password'); 
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


      <div className="w-full max-w-[530px] bg-white p-8 rounded-lg ">
        <h2 className="font-sans text-center text-2xl font-bold leading-9 text-[#212B36]">
          Welcome to ScapeSync
        </h2>
        <p className="font-sans font-normal text-center text-base leading-6 text-[#637381] mt-2">
          Please share your login details so you can access the website.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="input flex flex-col w-full ">
            <label
              htmlFor="email"
              className="text-[#919EAB] font-sans text-xs font-normal leading-4.5 relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              className="border-[#919EAB]/32 px-[10px] py-[11px] text-sm bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400"
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
                <img
                  src="/images/eye.png"
                  alt="Toggle Password Visibility"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center space-x-2 justify-between">
            <div className="flex items-center gap-1.5">
              <input
                type="checkbox"
                id="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <div className="flex justify-end mt-1">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-xs text-green-600 hover:underline font-medium"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
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

        {/* Google Login */}
        <button 
          type="button"
          className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span className="text-gray-700 text-sm font-medium">
            Log in with Google
          </span>
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button 
            type="button"
            className="text-green-600 font-medium hover:underline"
            onClick={() => navigate('/signup')}
          >
            Get started
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

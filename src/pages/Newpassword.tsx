import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authServices } from "../services/api";

const Newpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  
  // Get reset token from navigation state (this should come from email link)
  const resetToken = location.state?.resetToken || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ Form submitted - handleSubmit called");
    setLoading(true);
    setError("");
    setSuccess("");

    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Reset Token:", resetToken);

    // Validation
    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    if (!resetToken) {
      setError("Missing reset token. Please use the link from your email.");
      setLoading(false);
      return;
    }

    try {
      console.log("Calling resetPassword API...");
      
      const result = await authServices.resetPassword(
        resetToken, 
        "", // email parameter (empty if not needed)
        {
          password: password,
          confirmPassword: confirmPassword
        }
      );

      console.log("API Response:", result);

      if (result.success || result.message) {
        setSuccess("Password updated successfully! Redirecting to login...");
        
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError("Password update failed. Please try again.");
      }
    } catch (err: any) {
      console.log("API Error:", err);
      
      if (err.response) {
        const errorData = err.response.data;
        console.log("Error response data:", errorData);
        
        if (errorData.message === "Invalid Token") {
          setError("Invalid or expired reset token. Please request a new password reset.");
        } else if (errorData.errors) {
          const errorMessages = Object.values(errorData.errors).flat();
          setError(errorMessages.join(', ') || "Password reset failed. Please try again.");
        } else if (errorData.message) {
          setError(errorData.message);
        } else {
          setError("Password reset failed. Please try again.");
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (error) setError("");
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

      <div className="w-full max-w-[530px] bg-white p-8 rounded-lg">
        <h2 className="font-sans text-2xl font-bold leading-9 text-[#212B36]">
          Enter your new password
        </h2>
        <p className="font-sans font-normal text-base leading-6 text-[#637381] mt-2">
          Please enter your new password below to update your account credentials.
        </p>

        {!resetToken && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-yellow-700 text-sm text-center">
              Missing reset token. Please use the link from your password reset email.
            </p>
          </div>
        )}

        {success && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-600 text-sm text-center">{success}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              value={password}
              onChange={handlePasswordChange}
              className="font-sans font-normal text-base leading-6 w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
              minLength={6}
              disabled={loading}
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

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="font-sans font-normal text-base leading-6 w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
              minLength={6}
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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

          <button
            type="submit"
            disabled={loading || !resetToken}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {loading ? "Updating Password..." : "Update Password"}
          </button>
        </form>

        <button
          onClick={() => navigate("/forgot-password")}
          className="w-full text-center text-green-600 text-sm font-medium mt-4 hover:underline"
        >
          Request New Reset Link
        </button>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Make sure your password is at least 6 characters long and contains a mix of letters and numbers for security.</p>
        </div>
      </div>
    </div>
  );
};

export default Newpassword;
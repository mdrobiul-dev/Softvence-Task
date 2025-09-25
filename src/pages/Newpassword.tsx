import { useState } from "react";


const Newpassword = () => {

    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("New Password:", password);
    // Add password update API logic here
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
        {/* Title */}
        <h2 className="font-sans text-2xl font-bold leading-9 text-[#212B36]">
          Enter your new password.
        </h2>
        <p className="font-sans font-normal text-base leading-6 text-[#637381] mt-2">
          Please enter your new password below to update your account credentials.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-sans font-normal text-base leading-6 w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="font-sans font-normal text-base leading-6 w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
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

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition"
          >
            Update Password
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="w-full text-center text-green-600 text-sm font-medium mt-4 hover:underline"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Newpassword
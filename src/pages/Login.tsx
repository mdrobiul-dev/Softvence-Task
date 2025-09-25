import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      <div className="w-full max-w-[530px] bg-white p-8 rounded-lg ">
        <h2 className="font-sans text-center text-2xl font-bold leading-9 text-[#212B36]">
          Welcome to ScapeSync
        </h2>
        <p className="font-sans font-normal text-center text-base leading-6 text-[#637381] mt-2">
          Please share your login details so you can access the website.
        </p>

        <form className="mt-6 space-y-4">
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
              defaultValue="eddie_lake@gmail.com"
              placeholder="Enter your email..."
              className="border-[#919EAB]/32 px-[10px] py-[11px] text-sm bg-white border-2 rounded-md w-full focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
            >
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
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
              <a
                href="#"
                className="text-xs text-green-600 hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>
            
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md shadow transition"
          >
            Login
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
        <button className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 transition">
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
          Don’t have an account?{" "}
          <a href="#" className="text-green-600 font-medium hover:underline">
            Get started
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

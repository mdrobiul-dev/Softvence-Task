// services/api.js
import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "https://apitest.softvencefsd.xyz/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    const rememberMe = localStorage.getItem("rememberMe");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add remember me preference if available
    if (rememberMe) {
      config.headers['X-Remember-Me'] = rememberMe;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const authServices = {
  // Registration endpoint
  register: async (userData) => {
    const formData = new FormData();
    formData.append('first_name', userData.firstName);
    formData.append('last_name', userData.lastName);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('password_confirmation', userData.confirmPassword);
    formData.append('terms', userData.terms.toString());

    const response = await api.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    return response.data;
  },

  // Login endpoint
  login: async (userData) => {
    const response = await api.post("/login", {
      email: userData.email,
      password: userData.password,
      remember_me: userData.remember || false
    });

    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      
      // Store user data if available
      if (response.data.user) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      }
      
      // Store remember me preference
      if (userData.remember) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
    }
    
    return response.data;
  },

  // Verify OTP endpoint
  verifyOtp: async (email, otp) => {
    const response = await api.post("/forgot-verify-otp", {
      email: email,
      otp: otp
    });
    
   
    if (response.data.verified) {
   
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");
      userData.email_verified = true;
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    
    return response.data;
  },

  // Resend OTP endpoint
  resendOtp: async (email) => {
    const response = await api.post("/resend_otp", {
      email: email
    });
    return response.data;
  },

  // Forgot password endpoint
  forgotPassword: async (email) => {
    const response = await api.post("/forgot-password", {
      email: email
    });
    return response.data;
  },

  // Reset password endpoint
  resetPassword: async (token, email, passwordData) => {
    const formData = new FormData();
    formData.append('password', passwordData.password);
    formData.append('password_confirmation', passwordData.confirmPassword);
    formData.append('token', token);

    const response = await api.post("/reset-password", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
  
    if (response.data.success) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
    }
    
    return response.data;
  },


  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("rememberMe");

    return Promise.resolve();
  },


  getCurrentUser: () => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  },

 
  isAuthenticated: () => {
    return !!localStorage.getItem("authToken");
  }
};



// Utility functions
export const apiUtils = {
  // Set auth token manually (useful for social logins)
  setAuthToken: (token) => {
    localStorage.setItem("authToken", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  },

  clearAuth: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("rememberMe");
    delete api.defaults.headers.Authorization;
  },

  getToken: () => {
    return localStorage.getItem("authToken");
  }
};

export default api;
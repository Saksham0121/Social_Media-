import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, ArrowRight, Users } from 'lucide-react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Register:', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      alert('Registration successful! (Check console for form data)');
    }
  };


  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Neon Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal Lines */}
        <div 
          className="absolute top-20 left-0 w-full h-0.5 opacity-30 animate-pulse"
          style={{
            background: `linear-gradient(90deg, transparent 0%, #1DCD9F 50%, transparent 100%)`,
            boxShadow: `0 0 10px #1DCD9F, 0 0 20px #1DCD9F, 0 0 30px #1DCD9F`
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-0 w-full h-0.5 opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent 0%, #169976 50%, transparent 100%)`,
            boxShadow: `0 0 8px #169976, 0 0 16px #169976`,
            animation: 'slideRight 8s linear infinite'
          }}
        ></div>
        
        {/* Vertical Lines */}
        <div 
          className="absolute top-0 left-1/4 w-0.5 h-full opacity-25"
          style={{
            background: `linear-gradient(180deg, transparent 0%, #1DCD9F 30%, #169976 70%, transparent 100%)`,
            boxShadow: `0 0 8px #1DCD9F`,
            animation: 'slideDown 6s linear infinite'
          }}
        ></div>
        <div 
          className="absolute top-0 right-1/3 w-0.5 h-full opacity-20 animate-pulse"
          style={{
            background: `linear-gradient(180deg, transparent 0%, #169976 50%, transparent 100%)`,
            boxShadow: `0 0 6px #169976`
          }}
        ></div>
        
        {/* Diagonal Lines */}
        <div 
          className="absolute top-0 left-0 opacity-15"
          style={{
            width: '141.42%',
            height: '2px',
            background: `linear-gradient(45deg, transparent 0%, #1DCD9F 50%, transparent 100%)`,
            boxShadow: `0 0 8px #1DCD9F`,
            transform: 'rotate(45deg) translateX(-20%)',
            animation: 'glow 4s ease-in-out infinite alternate'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 opacity-10"
          style={{
            width: '141.42%',
            height: '2px',
            background: `linear-gradient(45deg, transparent 0%, #169976 50%, transparent 100%)`,
            boxShadow: `0 0 6px #169976`,
            transform: 'rotate(-45deg) translateX(20%)',
            animation: 'glow 6s ease-in-out infinite alternate-reverse'
          }}
        ></div>
        
        {/* Corner Accent Lines */}
        <div 
          className="absolute top-10 left-10 w-20 h-0.5 opacity-40"
          style={{
            background: '#1DCD9F',
            boxShadow: `0 0 10px #1DCD9F, 0 0 20px #1DCD9F`
          }}
        ></div>
        <div 
          className="absolute top-10 left-10 w-0.5 h-20 opacity-40"
          style={{
            background: '#1DCD9F',
            boxShadow: `0 0 10px #1DCD9F, 0 0 20px #1DCD9F`
          }}
        ></div>
        
        <div 
          className="absolute bottom-10 right-10 w-20 h-0.5 opacity-30"
          style={{
            background: '#169976',
            boxShadow: `0 0 8px #169976, 0 0 16px #169976`
          }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-0.5 h-20 opacity-30"
          style={{
            background: '#169976',
            boxShadow: `0 0 8px #169976, 0 0 16px #169976`
          }}
        ></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes glow {
          0% { opacity: 0.1; box-shadow: 0 0 5px currentColor; }
          100% { opacity: 0.3; box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
      `}</style>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#1DCD9F'}}>
              <Users className="w-6 h-6 text-black" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Join Us
          </h1>
          <p style={{color: '#1DCD9F'}} className="text-sm">
            Create your account to get started
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl p-8 shadow-2xl" style={{backgroundColor: '#222222'}}>
          <div className="space-y-6">
            {/* Username field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
                  style={{'--tw-ring-color': '#1DCD9F'}}
                  placeholder="Enter your username"
                />
              </div>
              {errors.username && (
                <p className="text-red-400 text-xs">{errors.username}</p>
              )}
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
                  style={{'--tw-ring-color': '#1DCD9F'}}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
                  style={{'--tw-ring-color': '#1DCD9F'}}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
                  style={{'--tw-ring-color': '#1DCD9F'}}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <Link to = "/homepage"
              onClick={handleSubmit}
              className="w-full py-3 px-4 rounded-lg font-semibold text-black transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90 transform hover:scale-[1.02] cursor-pointer"
              style={{backgroundColor: '#1DCD9F'}}
            >
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Sign In Option */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Already have an account?
            <Link to = '/'
              className="ml-2 font-semibold transition-colors hover:opacity-80"
              style={{color: '#169976'}}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
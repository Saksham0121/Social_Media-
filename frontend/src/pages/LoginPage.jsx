import React, { useState, useContext, useRef } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Users, Loader2 } from 'lucide-react';
import { loginCall } from '../apiCalls';
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef();
  const password = useRef();
  const {user , isFetching, dispatch } = useContext(AuthContext);
  
  
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    
  };
  console.log(user);
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
      <style>{`
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
            Welcome Back
          </h1>
          <p style={{color: '#1DCD9F'}} className="text-sm">
            Sign in to your account
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl p-8 shadow-2xl" style={{backgroundColor: '#222222'}}>
          <div className="space-y-6">
            {/* Email field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
                <input
                  type="email"
                  ref={email}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
                  style={{'--tw-ring-color': '#1DCD9F'}}
                  placeholder="Enter your email"
                  // onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
                <input
                  type={showPassword ? "text" : "password"}
                  ref={password}
                  required
                  minLength="6"
                  className="w-full pl-12 pr-12 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
                  style={{'--tw-ring-color': '#1DCD9F'}}
                  placeholder="Enter your password"
                  // onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
 
            {/* Submit Button */}
            <button
              type="button"
              onClick={handleClick}
              disabled={isFetching}
              className="w-full py-3 px-4 rounded-lg font-semibold text-black transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{backgroundColor: '#1DCD9F'}}
            >
              {isFetching ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Forgot your password?
            </button>
          </div>
        </div>

        {/* Create Account Option */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Don't have an account?
            <button
              onClick={() => console.log('Navigate to signup')}
              className="ml-2 font-semibold transition-colors hover:opacity-80"
              style={{color: '#169976'}}
            >
              Create new account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState , useContext} from 'react';
// import { Link } from "react-router-dom";
// import { Eye, EyeOff, Mail, Lock, ArrowRight, Users } from 'lucide-react';
// import { loginCall } from '../apiCalls';
// import { AuthContext } from "../context/AuthContext"

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const {user, isFetching, error, dispatch} = useContext(AuthContext)
  
//   const handleClick = (e) => {
//     if (validateForm()) {
//       loginCall({email, password}, dispatch)
//     }
//   };

//   console.log(user)

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


//   const handleCreateAccount = () => {
//     // This would typically navigate to signup page
//     console.log('Navigate to signup page');
//     alert('Navigate to Signup Page');
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Animated Neon Lines Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Horizontal Lines */}
//         <div 
//           className="absolute top-20 left-0 w-full h-0.5 opacity-30 animate-pulse"
//           style={{
//             background: `linear-gradient(90deg, transparent 0%, #1DCD9F 50%, transparent 100%)`,
//             boxShadow: `0 0 10px #1DCD9F, 0 0 20px #1DCD9F, 0 0 30px #1DCD9F`
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-32 left-0 w-full h-0.5 opacity-20"
//           style={{
//             background: `linear-gradient(90deg, transparent 0%, #169976 50%, transparent 100%)`,
//             boxShadow: `0 0 8px #169976, 0 0 16px #169976`,
//             animation: 'slideRight 8s linear infinite'
//           }}
//         ></div>
        
//         {/* Vertical Lines */}
//         <div 
//           className="absolute top-0 left-1/4 w-0.5 h-full opacity-25"
//           style={{
//             background: `linear-gradient(180deg, transparent 0%, #1DCD9F 30%, #169976 70%, transparent 100%)`,
//             boxShadow: `0 0 8px #1DCD9F`,
//             animation: 'slideDown 6s linear infinite'
//           }}
//         ></div>
//         <div 
//           className="absolute top-0 right-1/3 w-0.5 h-full opacity-20 animate-pulse"
//           style={{
//             background: `linear-gradient(180deg, transparent 0%, #169976 50%, transparent 100%)`,
//             boxShadow: `0 0 6px #169976`
//           }}
//         ></div>
        
//         {/* Diagonal Lines */}
//         <div 
//           className="absolute top-0 left-0 opacity-15"
//           style={{
//             width: '141.42%',
//             height: '2px',
//             background: `linear-gradient(45deg, transparent 0%, #1DCD9F 50%, transparent 100%)`,
//             boxShadow: `0 0 8px #1DCD9F`,
//             transform: 'rotate(45deg) translateX(-20%)',
//             animation: 'glow 4s ease-in-out infinite alternate'
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-0 right-0 opacity-10"
//           style={{
//             width: '141.42%',
//             height: '2px',
//             background: `linear-gradient(45deg, transparent 0%, #169976 50%, transparent 100%)`,
//             boxShadow: `0 0 6px #169976`,
//             transform: 'rotate(-45deg) translateX(20%)',
//             animation: 'glow 6s ease-in-out infinite alternate-reverse'
//           }}
//         ></div>
        
//         {/* Corner Accent Lines */}
//         <div 
//           className="absolute top-10 left-10 w-20 h-0.5 opacity-40"
//           style={{
//             background: '#1DCD9F',
//             boxShadow: `0 0 10px #1DCD9F, 0 0 20px #1DCD9F`
//           }}
//         ></div>
//         <div 
//           className="absolute top-10 left-10 w-0.5 h-20 opacity-40"
//           style={{
//             background: '#1DCD9F',
//             boxShadow: `0 0 10px #1DCD9F, 0 0 20px #1DCD9F`
//           }}
//         ></div>
        
//         <div 
//           className="absolute bottom-10 right-10 w-20 h-0.5 opacity-30"
//           style={{
//             background: '#169976',
//             boxShadow: `0 0 8px #169976, 0 0 16px #169976`
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-10 right-10 w-0.5 h-20 opacity-30"
//           style={{
//             background: '#169976',
//             boxShadow: `0 0 8px #169976, 0 0 16px #169976`
//           }}
//         ></div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes slideRight {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
        
//         @keyframes slideDown {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }
        
//         @keyframes glow {
//           0% { opacity: 0.1; box-shadow: 0 0 5px currentColor; }
//           100% { opacity: 0.3; box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
//         }
//       `}</style>
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center mb-4">
//             <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#1DCD9F'}}>
//               <Users className="w-6 h-6 text-black" />
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">
//             Welcome Back
//           </h1>
//           <p style={{color: '#1DCD9F'}} className="text-sm">
//             Sign in to your account
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="rounded-2xl p-8 shadow-2xl" style={{backgroundColor: '#222222'}}>
//           <div className="space-y-6">
//             {/* Email field */}
//             <div className="space-y-2">
//               <label className="text-white text-sm font-medium">Email</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full pl-12 pr-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
//                   style={{'--tw-ring-color': '#1DCD9F'}}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-red-400 text-xs">{errors.email}</p>
//               )}
//             </div>

//             {/* Password field */}
//             <div className="space-y-2">
//               <label className="text-white text-sm font-medium">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#1DCD9F'}} />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full pl-12 pr-12 py-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 transition-all"
//                   style={{'--tw-ring-color': '#1DCD9F'}}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-400 text-xs">{errors.password}</p>
//               )}
//             </div>
// v 
//             {/* Submit Button */}
//             <div
//               onClick={handleClick}
//               className="w-full py-3 px-4 rounded-lg font-semibold text-black transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90 transform hover:scale-[1.02] cursor-pointer"
//               style={{backgroundColor: '#1DCD9F'}}
//             >
//               <span>Sign In</span>
//               <ArrowRight className="w-5 h-5" />
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="text-center mt-4">
//             <button className="text-gray-400 hover:text-white text-sm transition-colors">
//               Forgot your password?
//             </button>
//           </div>
//         </div>

//         {/* Create Account Option */}
//         <div className="text-center mt-6">
//           <p className="text-gray-400 text-sm">
//             Don't have an account?
//             <Link to='/signup'
//               className="ml-2 font-semibold transition-colors hover:opacity-80"
//               style={{color: '#169976'}}
//             >
//               Create new account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

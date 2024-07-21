import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up
            </button>
          </div>
          <div className="mt-4 text-center">
            <span>or</span>
          </div>
          <button className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">
            Email me a sign-up link
          </button>
          <button className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full flex items-center justify-center">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-1/2 mr-2">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-1/2 ml-2">
              <i className="fab fa-apple"></i>
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

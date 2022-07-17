import React from "react";

const LoginScreen = () => {
  return (
    <section className="py-12 w-full min-h-max">
      <div className="w-full max-w-lg m-auto bg-slate-800 rounded px-6 py-10">
        <h1 className="text-center font-semibold mb-3 tracking-wide">Login</h1>
        <form>
          <div>
            <label className="block mb-2 text-sm" htmlFor="userName">
              Username
            </label>

            <input
              className="w-full p-2 mb-6 text-slate-800 bg-slate-400 border-b-2 border-none outline-none focus:bg-slate-300"
              placeholder="Username"
              type="text"
              name="username"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm" htmlFor="password">
              Password
            </label>

            <input
              className="w-full p-2 mb-6 text-slate-800 bg-slate-400 border-b-2 border-none outline-none focus:bg-slate-300"
              placeholder="Password"
              type="password"
              name="password"
            />
          </div>
          <div>
            <button
              className={`w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 mb-6 rounded tracking-wide transition-all duration-300`}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;

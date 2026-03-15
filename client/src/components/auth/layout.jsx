import { Outlet } from "react-router-dom";
import logo from "@/assets/she-slays-logo.png";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">

      {/* Left Side */}
      <div
        className="hidden lg:flex w-1/2 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>

    </div>
  );
}

export default AuthLayout;
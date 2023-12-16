import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div class="flex items-center justify-center h-screen">
        <div class="flex-col space-y-4 text-center">
          <div class="text-5xl font-medium">Page not found</div>
          <div class="text-gray-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <div class="flex items-center justify-center">
            <Link to="/" class="  transition delay-50 bg-slate-900 px-4 py-1 text-white font-medium rounded-lg  hover:scale-110 cursor-pointer">
              Visit Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { page, pageChangeHandler, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex items-center justify-center border-t-2 drop-shadow fixed bottom-0 bg-white">
      <div className="flex w-11/12 max-w-[450px] justify-between py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="border rounded-md py-1 px-3 border-gray-400"
              onClick={() => pageChangeHandler(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="border rounded-md py-1 px-3 border-gray-400"
              onClick={() => pageChangeHandler(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm mt-2">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Footer;

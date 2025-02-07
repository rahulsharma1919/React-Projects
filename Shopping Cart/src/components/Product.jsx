import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeItem = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between border-2 hover:scale-110 transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-bold">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            className="rounded-full border-2 p-1 px-3 border-gray-700 font-semibold uppercase text-[12px]
            hover:bg-gray-700 transition-all ease-in duration-100 hover:text-white"
            onClick={removeItem}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="rounded-full border-2 p-1 px-3 border-gray-700 font-semibold uppercase text-[12px]
            hover:bg-gray-700 transition-all ease-in duration-100 hover:text-white"
            onClick={addItem}
          >
            Add Item
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

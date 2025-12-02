import React from "react";

type Props = {
  img: string;
  name: string;
  price: string;
  short?: string;
};

export default function ProductCard({ img, name, price, short }: Props) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={img} alt={name} className="h-40 w-full object-cover rounded-md" />
      <div className="mt-4 flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-slate-500 mt-2">{short ?? "High-quality farm input."}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="font-bold">{price}</div>
        <button className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">Add</button>
      </div>
    </div>
  );
}

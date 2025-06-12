import React from "react";

export default function TailwindExample() {
  return (
    <div>
      <h1>TailwindExample</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md">버튼</button>

      <div className="container mx-auto">
        <div className="bg-red-500">
          <h1>Hello</h1>
          <p>This is a paragraph</p>
        </div>
        <div className="w-500 h-500 bg-blue-500">my box</div>
      </div>
    </div>
  );
}

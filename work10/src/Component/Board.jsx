import React, { useEffect, useState } from "react";

export default function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{ backgroundColor: "lightgrey", margin: "5px" }}
        >
          <a href={`https://jsonplaceholder.typicode.com/posts/${item.id}`}>
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
}

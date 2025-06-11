import React, { useEffect, useState } from "react";

export default function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const deletePosts = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    setData((prev) => prev.filter((item) => item.id !== id));
  };

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
          <button onClick={() => deletePosts(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

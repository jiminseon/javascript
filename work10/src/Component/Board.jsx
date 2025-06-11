import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Board.css";

export default function Board() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleModify = async (id, text) => {
    console.log("수정");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          title: { text },
        }),
      }
    );
  };

  return (
    <div className="board-container">
      <h2 className="board-title">게시판</h2>
      <ul className="board-list">
        {data.map((item, idx) => (
          <li key={item.id} className="board-item">
            <span className="board-index">{idx + 1}.</span>
            <a
              href={`https://jsonplaceholder.typicode.com/posts/${item.id}`}
              className="board-link"
            >
              {item.title}
            </a>
            <button
              onClick={() => handleDelete(item.id)}
              className="delete-btn"
            >
              삭제
            </button>
            <button
              onClick={() => handleModify(item.id)}
              className="delete-btn"
            >
              수정
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

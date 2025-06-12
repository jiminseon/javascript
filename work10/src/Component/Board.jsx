import React, { useEffect, useState } from "react";
import "../Board.css";

export default function Board() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleModifyClick = (id, currentTitle) => {
    setEditId(id);
    setEditTitle(currentTitle);
  };

  const handleModifySave = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: editTitle,
      }),
    });

    const handleSave = async (id) => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          title: editTitle,
        }),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      setData(...data, json);

      setEditId(null);
      setEditTitle("");
    };
  };

  return (
    <div className="board-container">
      <h2 className="board-title">게시판</h2>
      <ul className="board-list">
        {data.map((item, idx) => (
          <li key={item.id} className="board-item">
            <span className="board-index">{idx + 1}.</span>

            {editId === item.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="board-input"
                />
                <button
                  onClick={() => handleModifySave(item.id)}
                  className="btn"
                >
                  저장
                </button>
                <button onClick={() => handleDelete(item.id)} className="btn">
                  삭제
                </button>
              </>
            ) : (
              <>
                <a
                  href={`https://jsonplaceholder.typicode.com/posts/${item.id}`}
                  className="board-data"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
                <button
                  onClick={() => handleModifyClick(item.id, item.title)}
                  className="btn"
                >
                  수정
                </button>
                <button onClick={() => handleDelete(item.id)} className="btn">
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

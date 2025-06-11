import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Board.css"; // CSS 파일 불러오기

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
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          title: "foo",
        }),
      }
    );
  };
  return (
    <div className="board-container">
      <h2 className="board-title">게시판</h2>
      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>삭제</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={item.id}>
              <td>{idx + 1}</td>
              <td>
                <Link
                  to={`https://jsonplaceholder.typicode.com/posts/${item.id}`}
                  className="board-link"
                >
                  {item.title}
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="delete-btn"
                >
                  삭제
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleModify(item.id, text)}
                  className="delete-btn"
                >
                  수정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

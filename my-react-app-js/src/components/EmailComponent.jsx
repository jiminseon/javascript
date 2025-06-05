import { useState, useEffect } from "react";

export default function EmailComponent() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const usersFetch = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const info = data.map((user) => ({
        username: user.username,
        email: user.email,
      }));

      setInfo(info);
    };

    usersFetch();
  }, []);

  return (
    <div>
      <ul style={{ marginTop: "20px" }}>
        {info.map((user, idx) => (
          <li key={idx}>
            {user.username}: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

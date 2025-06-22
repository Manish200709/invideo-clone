import { useState } from "react";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "manish(362154)") {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!unlocked) {
    return (
      <div style={{ padding: "50px", fontFamily: "Arial" }}>
        <h2>Enter Password to Access InVideo Clone</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", marginRight: "10px" }}
          />
          <button type="submit" style={{ padding: "10px 20px" }}>Unlock</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Welcome to your InVideo Clone</h1>
      <p>Build your video scene-by-scene here.</p>
    </div>
  );
}

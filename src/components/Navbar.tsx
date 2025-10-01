import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tarefas</Link>
      </nav>
    </header>
  );
}

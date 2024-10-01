import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  return (
    <header style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>MyApp</div>

        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/employer">
              Employer
            </Link>
          </li>
          <li>
            <Link href="/jobseeker">
              Jobseeker
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

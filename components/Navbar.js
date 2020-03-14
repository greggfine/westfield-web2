import Link from "next/link";

function Navbar() {
  return (
    <nav className="Nav">
      <div className="Logo">
        <Link href="/">
          <a>Westfield Web</a>
        </Link>
      </div>
      <div className="Nav-items">
        <Link href="/plansandpricing">
          <a>Plans and Pricing</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

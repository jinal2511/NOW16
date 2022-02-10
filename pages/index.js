import Header from "./header";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <div className="container">
          <div className="logoimg">
            <img src="/logo.svg" />
          </div>
          <Header />
          <div className="mobileview">
            <Link href="/Girls">
              <a className="girlfont">GIRLS</a>
            </Link>
            <Link href="/Boys">
              <a className="boyfont">BOYS</a>
            </Link>
            <Link href="/Everyone">
              <a className="everyfont">EVERYONE</a>
            </Link>
            <Link href="/Accessories">
              <a className="accefont">ACCESSORIES</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

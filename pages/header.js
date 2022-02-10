import Link from "next/link";

export default function Header() {
  return (
   <>
   <div className="headers">
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
      <Link href="/Search">
         <a><img  src="/search.svg" className="searchlogo"/></a>
      </Link>
      <Link href="/Cart">
         <a><img  src="/cart.svg" className="cartlogo"/></a>
      </Link>
      <Link href="/User">
         <a><img  src="/user.svg" className="userlogo"/></a>
      </Link>
      <Link href="/Try">
         <a><img  src="/try.svg" className="trylogo"/></a>
      </Link>
   
      <div className="hamburger"><a><img  src="/hamburger.svg" className="hamburger"/></a></div>
      </div>
   </>
  );
}

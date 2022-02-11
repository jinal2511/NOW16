import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [main, setMain] = useState(false);

  return (
    <>
    
      <div className="headers">
        
        <Link href="./Girls">
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
          <a>
            <img src="/search.svg" className="searchlogo" />
          </a>
        </Link>
        <Link href="/Cart">
          <a>
            <img src="/cart.svg" className="cartlogo" />
          </a>
        </Link>
        <Link href="/User">
          <a>
            <img src="/user.svg" className="userlogo" />
          </a>
        </Link>
        <Link href="/Try">
          <a>
            <img src="/try.svg" className="trylogo" />
          </a>
        </Link>

        <a onClick={() => setMain(!main)} className="hamburger">   
          {!main ? (
            <img src="/hamburger.svg" className="hamburger" />
          ) : (
           <a> </a>
            
          )}
     </a>
        </div>
        {main ? (
          <div className="menuview">
            <div onClick={()=>setMain(false)}><img src="/close.svg" className="close"/></div>
            <Link href="/">
              <a>GIRLS</a>
            </Link>
            <Link href="/About">
              <a>BOYS</a>
            </Link>
            <Link href="/Contact">
              <a>EVERYONE</a>
            </Link>
            <Link href="/Contact">
              <a>ACCESSORIES</a>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
     
    </>
  );
}

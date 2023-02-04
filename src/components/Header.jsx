import { Link } from "react-router-dom";

import React from "react"

const Header = () => {
  return (
    <header className="Header">
      <h1>リダックスブロッグ</h1>
      <nav>
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="post">ポスト</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

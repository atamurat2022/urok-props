import React from "react";

function Header(props) {
  return (
    <div>
      <h1>{props.data.siteName}</h1>
      <h1> {props.secondHeader} </h1>
      <Nav nav={props.data.nav} />
    </div>
  );
}
function Nav(props) {
  console.log(props);
  const data = props.nav;
  const listitem = data.map((item) => (
    <li key={item.link}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));
  return (
    <>
      <nav>
        <ul>{listitem}</ul>
      </nav>
    </>
  );
}

export default Header;

import React, { useState } from "react";

function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div onClick={handleClick}
      style={{ backgroundColor: active ? "black" : "white" }}
     >
       <h1>Welcome to my blog</h1>
    </div>
  );
}

export default Home;
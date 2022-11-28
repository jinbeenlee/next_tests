import React from "react";


export default function SubPageHeader(props:any) {
  return (
    <header className="TopCont"
      style={{
        fontSize: "clamp(15px, 5.5vw, 20px)",
        fontWeight: "700",
        width: "100%",
        height: "80px",
        textAlign: "center",
        lineHeight: "80px"
      }}>
      <div>
        {props.name}
        <span
          style={{
            color: "#6524ff",
          fontSize:"30px"}}>&nbsp;.</span>
      </div>
      {/*<img src="img/TopContImg.png" />*/}
    </header>
  );
}

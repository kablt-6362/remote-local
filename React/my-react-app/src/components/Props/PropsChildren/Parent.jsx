import React from "react";
import Children from "./Children";

export default function Parent() {

  return (
    <div>
      <Children>
        <div>
          <h1>지나가는 이순신</h1>
          <h2>그의 나이 34세</h2>
        </div>
      </Children>
      <Children>
        <div>
          <h1>굴러오는 모모리</h1>
          <h2>달동네 25세</h2>
        </div>
      </Children>
      <Children>
        <div>
          <h1>화가 난 라이언</h1>
          <h2>활발한 4살</h2>
        </div>
      </Children>
    </div>
  );
}

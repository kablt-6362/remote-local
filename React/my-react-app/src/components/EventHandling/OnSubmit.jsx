import React from "react";
// submit 이벤트는 form 태크만 발생한다
export default function OnSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <div>
      {/* form 태그의 onSubmit 속성에서 handleSubmit 함수를 호출하는 코드를 작성 */}
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <input type="submit" value="제출" className="border-2" />
      </form>
    </div>
  );
}

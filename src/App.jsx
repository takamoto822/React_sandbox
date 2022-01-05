// const App = () => {
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  // ボタンを押したときに実行する関数を定義
  const onClickButton = () => {
    // alert();
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColoredMessage color="blue"> お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

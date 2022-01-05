export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSXです</p>
        <button className="button">ボタン</button>
      </div>

      <style jsx>{`
    .container {
      border: solid 1px #aaa;
      border-radius: 20px;
      padding: 8px;
      margin: 8px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .tile {
      margin:0;
      color: #aaa;
    }
    .button {
      backgroud-color: #ddd;
      border: none;
      padding: nonel
      padding: 8px;
      border-radius: 8px;
    }
    `}</style>
    </>
  );
};

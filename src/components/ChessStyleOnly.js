function ChessStyleOnly() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const revertNumbers = numbers.reverse();

  const whiteItem = {
    background: "white",
    width: "50px",
    height: "50px",
  };

  const blackItem = {
    background: "black",
    width: "50px",
    height: "50px",
  };

  const ChessBoard = () => (
    <div
      className="chessboard"
      style={{
        display: "flex",
        width: "400px",
        height: "400px",
        border: "1px solid orange",
        flexWrap: "wrap",
      }}
    >
      {[1, 2, 3, 4].map(() => (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {revertNumbers.map((number) =>
              number % 2 === 0 ? (
                <div key={number} style={whiteItem} />
              ) : (
                <div key={number} style={blackItem} />
              )
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {numbers.map((number) =>
              number % 2 === 0 ? (
                <div key={number} style={blackItem} />
              ) : (
                <div key={number} style={whiteItem} />
              )
            )}
          </div>
        </>
      ))}
    </div>
  );

  return <ChessBoard />;
}

export default ChessStyleOnly;

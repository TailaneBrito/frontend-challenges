import "./App.css";
import Board from "./components/Board";
import ChessStyleOnly from "./components/ChessStyleOnly";
import { DetailsBody, Details } from "./styles/board.style";

function App() {
  return (
    <div className="App">
      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Details open>
          <summary>Board v1</summary>
          <DetailsBody>
            <Board />
          </DetailsBody>
        </Details>

        <Details open>
          <summary>Board v2</summary>
          <DetailsBody>
            <ChessStyleOnly />
          </DetailsBody>
        </Details>
      </div>
    </div>
  );
}

export default App;

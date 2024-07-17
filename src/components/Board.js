import {
  BoardNumbers,
  BoardContainer,
  BoardLetters,
  ItemWhite,
  ItemBlack,
  Column,
  MainContent,
  BoardBlock,
  Item,
  ChessBoard,
  Letter,
} from "../styles/board.style";

function Board() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const reverse = numbers.reverse();

  const ColumnOdd = () => (
    <Column>
      <Item>
        {numbers.map((number) =>
          number % 2 === 0 ? <ItemWhite /> : <ItemBlack />
        )}
      </Item>
    </Column>
  );

  const ColumnEven = () => (
    <Column>
      <Item>
        {reverse.map((number) =>
          number % 2 === 0 ? <ItemBlack /> : <ItemWhite />
        )}
      </Item>
    </Column>
  );

  return (
    <div>
      <ChessBoard>
        <BoardLetters>
          {letters.map((letter) => (
            <Letter>{letter.toUpperCase()}</Letter>
          ))}
        </BoardLetters>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {reverse.map((number) => (
            <BoardNumbers>{number}</BoardNumbers>
          ))}
        </div>
        <MainContent>
          <BoardBlock>
            <BoardContainer>
              {[1, 2, 3, 4].map(() => (
                <>
                  <ColumnEven />
                  <ColumnOdd />
                </>
              ))}
            </BoardContainer>
          </BoardBlock>
        </MainContent>
      </ChessBoard>
    </div>
  );
}

export default Board;

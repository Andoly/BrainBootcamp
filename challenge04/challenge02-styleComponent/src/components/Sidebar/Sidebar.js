import { HeadingH2 } from "../Heading";
import Button from "../Button/Button";
import * as S from "./Sidebar.style";

const Sidebar = ({ games, changeGame }) => {
  return (
    <S.AsideStyled>
      <HeadingH2>Games</HeadingH2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <S.ASidebar
              href="true"
              onClick={(event) => {
                event.preventDefault();
                changeGame(game.id);
              }}
            >
              <Button kind="primary">{game.title.substring(0, 14)}</Button>
            </S.ASidebar>
          </li>
        ))}
      </ul>
    </S.AsideStyled>
  );
};

export default Sidebar;

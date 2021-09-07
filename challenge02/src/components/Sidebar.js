import { HeadingH2 } from "./Heading";
import Button from "./Button";

const Sidebar = ({ games }) => {
  return (
    <aside>
      <HeadingH2>Games</HeadingH2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <a href="true">
              <Button kind="secondary">{game.title.substring(0, 14)}</Button>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

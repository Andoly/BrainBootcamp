import Header from "./components/Header";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

const games = [
  {
    id: "6136cea8c018338be51fae6a",
    title: "The Witcher 3 : Wild Hunt - Game of the Year Edition",
    content: [
      "Play the most polished and complete version of the most awarded game of 2015 - The Witcher 3: Wild Hunt – Game of the Year Edition. Now available with all expansions and additional content. ",
      "Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions, and combat magic. ",
      "Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes to cunning supernatural predators lurking in the shadowy back alleys of densely populated cities. ",
      "Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse races, card games, fist fighting and other pleasures life brings. ",
      "Traverse a fantastical open world: explore forgotten ruins, caves and shipwrecks, trade with merchants and dwarven smiths in cities, and hunt across open plains, amidst mountains and at sea. ",
      "Make choices that go beyond good and evil and face their far-reaching consequences.",
    ],
  },
  {
    id: "6136cea80098f44f934627d8",
    title: "Cyberpunk 2077",
    content: [
      "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
      "Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Create your character from scratch and choose their background out of three unique Lifepaths. Take the role of a gang-wise Street Kid, freedom-loving Nomad, or a ruthless Corpo.",
      "Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth. Explore the bustling megalopolis of the future and its extensive districts, each with exceptional visual flavor, inhabitants and chances to earn cash. Interact with members of powerful gangs who rule the streets of Night City.",
    ],
  },
  {
    id: "6136cea8c6e038289b5d45d2",
    title: "  Pathfinder  : Wrath of the Righteous - Core Edition",
    content: [
      "Your path will lead you to the Worldwound, where the opening of a rift to the Abyss has unleashed all-consuming terror across the land. For over a century, the neighboring nations have fought fearlessly, trying to drive the enemy back — but to little avail.",
      "Now, you have the chance to put an end to this conflict, but the path to salvation is far from clear-cut. Will you become a shining angel, backed by noble paladins? Or a powerful necromancer with hordes of immortal undead in your thrall? Or something else entirely? Lead your army and challenge mighty demon lords. Your crusade will set in motion a chain of events that will leave you — and the world itself — forever changed.",
    ],
  },
];

export default function App() {
  const [title, setTitle] = useState(games[0].title);
  const [content, setContent] = useState(games[0].content);
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Sidebar games={games} />
          <Content title={title} content={content} />
        </main>
        <Footer />
      </div>
    </>
  );
}

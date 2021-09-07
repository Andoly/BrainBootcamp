import Button from "./Button";

const Sidebar = () => {
  return (
    <aside>
      <h2>Sidebar</h2>
      <Button color>Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button color>Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button color>Primary</Button>
    </aside>
  );
};

export default Sidebar;

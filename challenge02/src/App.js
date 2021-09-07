import Header from "./components/Header";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Sidebar />
          <Content />
        </main>
        <Footer />
      </div>
    </>
  );
}

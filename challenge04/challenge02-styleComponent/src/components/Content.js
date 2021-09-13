import { HeadingH2, HeadingH4 } from "./Heading";

const Content = ({ title, content }) => {
  return (
    <article>
      <section>
        <HeadingH2>{title}</HeadingH2>
        <HeadingH4>{content}</HeadingH4>
      </section>
    </article>
  );
};

export default Content;

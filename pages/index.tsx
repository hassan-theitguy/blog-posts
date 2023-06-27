import posts from "../json/blog-posts.json";

const IndexPage = () => {
  return (
    <>
      <ul>
        {posts.map((i) => (
          <li><a href={i.href}>{i.title ?? 'No title available'}</a></li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;

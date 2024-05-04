import css from "./Article.module.css";

const Article = ({ items }) => {
  return (
    <>
      {items.map(({ objectID, url, title, story_title, story_url }) => (
        <li className={css.listItem} key={objectID}>
          <a
            className={css.itemLink}
            href={url ? url : story_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title ? title : story_title ? story_title : "No title available"}
          </a>
        </li>
      ))}
    </>
  );
};
export default Article;

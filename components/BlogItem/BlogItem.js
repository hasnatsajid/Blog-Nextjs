import styles from './BlogItem.module.scss';

const BlogItem = ({ data }) => {
  const { _id: id, date, title, image } = data;

  console.log(title, image);

  return (
    <div className={styles.blog__container}>
      <div className={styles.blog__intro}>{title}</div>
      <div className={styles.blog__image}>{image}</div>
    </div>
  );
};

export default BlogItem;

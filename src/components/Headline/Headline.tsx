import styles from "./Headline.module.css"

const Headline = ({ title }: {title: string}) => <h1 className={styles.headline}>{title}</h1>;

export default Headline;

import styles from './style.module.css';

const DocsIdPage = ({ params }) => {
  console.log(params)
  const len = params.length;

  return (
    <div>
      <h1 className={styles.title}>Docs Id Page</h1>
    </div>
  )
}
export default DocsIdPage

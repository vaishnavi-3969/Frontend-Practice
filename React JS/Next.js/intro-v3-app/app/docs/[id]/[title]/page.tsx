const DocsIdPage = ({ params }) => {
  return (
    <div>
      <h1>Docs ID Page</h1>
      <p>{params.id}</p>
      <p>{params.title}</p>
    </div>
  )
}
export default DocsIdPage

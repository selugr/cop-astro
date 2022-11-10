const { data: list } = await fetch(
  'https://copastro.deta.dev/api/articles'
).then(
  (response) => !console.log('hace la petición de articulos') && response.json()
)

export default function ArticleList() {
  return (
    <ul>
      {list?.map(({ id, name, price, stock, images }) => (
        <li key={id}>
          {name} - {price}{' '}
        </li>
      ))}
    </ul>
  )
}

import { useEffect, useState } from 'react'

function useStock(articleId, initial = 0) {
  const [stock, setStock] = useState(initial)

  useEffect(() => {
    fetch(`https://copastro.deta.dev/api/articles/${articleId}/status`)
      .then((response) => response.json())
      .then(
        ({ data: { stock: fetchedStock } }) =>
          !console.log('hace la peticion del stock') &&
          setStock(fetchedStock ?? initialValue)
      )
  }, [])

  return stock
}

export default function ArticleStock({ articleId, initialValue }) {
  const stock = useStock(articleId, initialValue)

  return (
    <p>
      {stock === 0 && 'YA NO QUEDAN!!'}
      {stock === 1 && '¡¡QUEDA 1 CORRE 🏃‍♂️!!'}
      {stock > 1 && `¡¡QUEDAN ${stock}!!`}
    </p>
  )
}

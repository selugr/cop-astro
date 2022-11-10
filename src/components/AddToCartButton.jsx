import styles from './AddToCartButton.module.css'

export default function AddToCartButton({ articleId }) {
  const handleOnClick = () => {
    console.log('Add to cart', articleId)
  }

  return (
    <button type="button" className={styles.button} onClick={handleOnClick}>
      Add to Cart
    </button>
  )
}

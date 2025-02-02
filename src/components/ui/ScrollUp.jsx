export default function ScrollUpBtn() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className='scroll-up' type='button' onClick={scroll}>
      &#11165;
    </button>
  )
}
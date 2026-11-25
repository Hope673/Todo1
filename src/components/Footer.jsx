const Footer = ({itemsLength}) => {
  return (
    <footer className="text-center bg-blue-600 text-white text-bold h-10 w-[800px] fixed bottom-0">
      <p>{itemsLength > 1 ? `${itemsLength} items in your list` : `${itemsLength} item in your list`}</p>
    </footer>
  )
}

export default Footer

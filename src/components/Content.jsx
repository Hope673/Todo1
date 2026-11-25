import ItemList from './ItemList'
const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <div className="flex flex-col flex-grow-1 items-center pb-15">
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      ) : (
        <p>No Items to display</p>
      )}
    </div>
  )
}

export default Content

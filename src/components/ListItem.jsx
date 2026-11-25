const ListItem = ({item, handleCheck, handleDelete}) => {
  return (
    <div>
      <li key={item.id} className="flex items-center mb-2 border-2 rounded-sm border-blue-600 p-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
              className="h-10 w-10"
            />
            <label className={`ml-5 w-96 ${item.checked ? 'line-through text-gray-500' : 'text-gray-800'}`} onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <button className="ml-2 text-red-500 hover:text-red-700 bg-red-500 text-white p-2 rounded-md" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
    </div>
  )
}

export default ListItem

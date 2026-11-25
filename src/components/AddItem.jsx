import { useRef } from 'react'
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef()
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center bg-gray-200 p-5 gap-2">
      <label htmlFor="addItem" className="absolute hidden">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            id='addItem'
            type='text'
            placeholder='Add Item'
            value={newItem}
            className='border border-gray-300 rounded-md p-2 w-96'
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add item'
            onClick={() => inputRef.current.focus()}
            className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 w-12'
        >
            +
        </button>
    </form>
  )
}

export default AddItem

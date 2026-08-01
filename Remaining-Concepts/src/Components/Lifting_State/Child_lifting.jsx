

function Child_lifting({name, setName}) {
  return (
    <div>
        <h3>Child Component</h3>
        <input type="text"  placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Child_lifting
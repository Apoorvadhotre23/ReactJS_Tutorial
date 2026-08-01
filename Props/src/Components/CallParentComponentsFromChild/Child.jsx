

export default function Child({displayName, name}) {
  return (
    <button onClick={()=>{displayName(name)}}>Display</button>
  )
}

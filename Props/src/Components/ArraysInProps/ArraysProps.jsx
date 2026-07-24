

function ArraysProps({skills}) {
  return (
    <div>
       
        <ul>
            {skills.map((item, index)=>
                    <li key={index}>{item}</li>
                )}
        </ul>
    </div>
  )
}

export default ArraysProps
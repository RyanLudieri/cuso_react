import {useState} from 'react'

const ListRender = () => {

  const [list] = useState(["Matheus", "Ryan", "Léticia", "Julia"])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender
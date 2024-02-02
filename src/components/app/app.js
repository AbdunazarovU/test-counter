import { useRef, useState } from "react"
import "./app.css"

const User = () => {
  const [cardNumber, setCardNumber] = useState("")

  const cvcRef = useRef(null);

  const handleInput = e => {
    const val = e.target.value
    setCardNumber(val)
    if(val.length === 16) {
      cvcRef.current.focus()
    }
  }

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-2 fw-bolder" >
        <input className="form-control mb-2" type="text" placeholder="Card number" onChange={handleInput} value={cardNumber} />
        <input ref={cvcRef} className="form-control" type="text" placeholder="Secure number" />
      </div>
    </div>
  )
}

const App = () => {
  return <User firstName="Ulug'bek" lastName={"Abdunazarov"} link={"youtube.com"} />
}

export default App
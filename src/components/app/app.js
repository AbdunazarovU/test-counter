import { Component, useState } from "react"
import "./app.css"

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isLogin: true,
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }
  decrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }))
  }
  reset = () => this.setState({ counter: 0 })

  changeHandler = e => this.setState({ age: e.target.value })

  componentDidMount() {
    document.title = "Counter: " + this.state.counter
    console.log("Mounting")
  }

  componentDidUpdate() {
    document.title = "Counter: " + this.state.counter
    console.log("Update")
  }

  componentWillUnmount() {
    alert("Component will unmount")
    console.log("Unmount")
  }

  handleDelete = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }


  render() {
    const {firstName, lastName, link} = this.props
    const {counter} = this.state

    return (
          <div className="w-50 mx-auto">
            <div className="border p-3 mt-2">
              <h1>Mening ismim - {firstName}, sharifim {lastName}</h1>
              <a href={link}>YouTube kanalim</a>
              <div className="mt-3">
                <button onClick={this.increment} className="btn btn-success">Increment</button>
                <button onClick={() => this.decrement()} className="btn btn-danger mx-2">Decrement</button>
                <button onClick={this.reset} className="btn btn-info">Reset</button>
                <p>{counter}</p>
              </div>
              <form>
                <span>Yoshingiz</span>
                <input className="form-control" type="text" onChange={e => this.changeHandler(e, "ulugbek")} />
              </form>

              {this.state.isLogin ? <p className="text-center my-3">LOGIN</p> : null}
                <div className="d-flex justify-content-center mt-3">
                  <button onClick={this.handleDelete} className="btn btn-outline-primary">TOGGLE</button>
                </div>
            </div>
          </div>
        )
  }
}

// const User = ({ firstName, lastName, link }) => {
//   const [counter, setCounter] = useState(0)
//   const [login, setLogin] = useState(false)

//   // const [state, setState] = useState({
//   //   counter: 0,
//   //   isLogin: false,
//   // })

//   // const onIncrement = () => {
//   //   console.log(state)
//   //   setState(prevState => ({...prevState ,counter: prevState.counter + 1}))
//   // }
//   const onIncrement = () => {
//     setCounter(prevCounter => prevCounter + 1)
//   }
//   const onDecrement = () => {
//     setCounter(prevCounter => prevCounter - 1)
//   }
//   const onReset = () => {
//     setCounter(0)
//   }

//   const onToggleLogin = () => {
//     setLogin(prevState => !prevState)
//   }

//   return (
//     <div className="w-50 mx-auto">
//       <div className="border p-3 mt-2">
//         <h1>
//           Mening ismim - {firstName}, sharifim {lastName}.
//         </h1>
//         <a href={link}>YouTube kanalim</a>

//         <p className="text-center">{counter}</p>
//         <div className="d-flex justify-content-center">
//           <button onClick={onIncrement} className="btn btn-success">+</button>
//           <button onClick={onDecrement} className="btn btn-danger mx-2">-</button>
//           <button onClick={onReset} className="btn btn-info">0</button>
//         </div>

//         {login ? <p className="text-center my-3">LOGIN</p> : null}
//         <div className="d-flex justify-content-center mt-3">
//           <button onClick={onToggleLogin} className="btn btn-outline-primary">TOGGLE</button>
//         </div>
//       </div>
//     </div>
//   )
// }

const App = () => {
  const [display, setDisplay] = useState(true)

  const deleteDisplayHandler = () => {
    setDisplay(prevState => !prevState)
  }

  return (
    <>
      <div className="text-center my-3">
        <button className="btn btn-outline-primary" onClick={deleteDisplayHandler} >Click</button>
      </div>
      {display && (
        <User firstName="Ulug'bek" lastName={"Abdunazarov"} link={"youtube.com"} />
      )}
    </>
  )
}

export default App

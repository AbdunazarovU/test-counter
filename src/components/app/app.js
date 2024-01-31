import "./app.css"

// class User extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//       age: "",
//     }
//     this.increment = this.increment.bind(this)
//   }

//   increment() {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1,
//     }))
//   }
//   decrement() {
//     this.setState(prevState => ({
//       counter: prevState.counter - 1,
//     }))
//   }
//   reset = () => {
//     this.setState({
//       counter: 0,
//     })
//   }

//   changeHandler = (e, name) => {
//     console.log(name)
//     this.setState({
//       age: e.target.value,
//     })
//   }

//   render() {
//     const {firstName, lastName, link} = this.props
//     const {age, counter} = this.state

//     return (
//           <div className="w-50 mx-auto">
//             <div className="border p-3 mt-2">
//               <h1>Mening ismim - {firstName}, sharifim {lastName}, yoshim {age}</h1>
//               <a href={link}>YouTube kanalim</a>
//               <div className="mt-3">
//                 <button onClick={this.increment} className="btn btn-success">Increment</button>
//                 <button onClick={() => this.decrement()} className="btn btn-danger mx-2">Decrement</button>
//                 <button onClick={this.reset} className="btn btn-info">Reset</button>
//                 <p>{counter}</p>
//               </div>
//               <form>
//                 <span>Yoshingiz</span>
//                 <input className="form-control" type="text" onChange={e => this.changeHandler(e, "ulugbek")} />
//               </form>
//             </div>
//           </div>
//         )
//   }
// }

const User = ({ firstName, lastName, link }) => {
  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-2">
        <h1>
          Mening ismim - {firstName}, sharifim {lastName}
        </h1>
        <a href={link}>YouTube kanalim</a>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <User firstName="Ulug'bek" lastName={"Abdunazarov"} link={"youtube.com"} />
      <User firstName="Samar" lastName={"Badriddinov"} link={"google.com"} />
    </>
  )
}

export default App

import useInputValidate from "../../hook/useInputValidate";
import "./app.css";

const User = () => {
  const firstname = useInputValidate("");
  const lastname = useInputValidate("");

  return (
    <div className="w-50 mx-auto mb-5">
      <div className="border p-3 mt-5">
        <p className="text-center fs-3">Register</p>
        <div className="d-flex gap-3">
          <input
            className={`form-control ${firstname.validateColor}`}
            type="text"
            placeholder="Firstname"
            value={firstname.value}
            onChange={firstname.onChange}
          />
          <input
            className={`form-control ${lastname.validateColor}`}
            type="text"
            placeholder="Lastname"
            value={lastname.value}
            onChange={lastname.onChange}
          />
        </div>
        <button className="btn btn-success mt-3">Send data</button>
      </div>
    </div>
  );
};

const App = () => {
  return <User />;
};

export default App;

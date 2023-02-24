import { useState } from "react";
function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("http://localhost:4000/api/gym", {
      method: "POST",
      body: JSON.stringify(workout),
      header: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    });
    const json = await response.json();
    console.log(response);
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New Exercise added", json);
    }
  };
  return (
    <form className="create" onSubmit={submitHandler}>
      <h3>Add your new exercise</h3>
      <label>
        Exercise Title
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        Load (kg):
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </label>
      <label>
        Reps:
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </label>
      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;

import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
function Home() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/gym");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
        //console.log(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />;
          })}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;

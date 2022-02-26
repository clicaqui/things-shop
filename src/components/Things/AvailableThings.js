import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableThings.module.css";
import ThingsItem from "./ThingsItem/ThingsItem";

const AvailableThings = (props) => {
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchThings = async () => {
      const response = await fetch(
        "https://react-base-d188b-default-rtdb.firebaseio.com/things.json"
      );

      if (!response.ok) {
        throw new Error("Not fetch data!");
      }
      const result = await response.json();

      const loadedThings = [];

      for (const key in result) {
        loadedThings.push({
          id: key,
          name: result[key].name,
          description: result[key].description,
          price: result[key].price,
        });
      }
      setThings(loadedThings);
    };
    fetchThings().catch((err) => {
      setHttpError(err.message);
    });
  }, []);
  const [things, setThings] = useState([]);
  if (httpError) {
    return (
      <section>
        <p className={classes.ThingsError}>{httpError}</p>
      </section>
    );
  }
  const thingsList = things.map((item) => (
    <ThingsItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{thingsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableThings;

import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Button from "@material-ui/core/Button";

const App = () => {
  const [reminder, setReminder] = useState(data); // initialValue = array

  // function to clear reminders
  const clearReminder = () => {
    setReminder([]);
  };

  return (
    <main>
      <section>
        <h3>{reminder.length}birthdays today</h3>
        <List reminder={reminder} />

        <Button
          variant="contained"
          color="primary"
          onClick={clearReminder}
          className="btn"
        >
          Clear
        </Button>
      </section>
    </main>
  );
};

export default App;

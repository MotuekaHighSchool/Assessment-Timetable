import { useState } from "react";
import Data from "./data.json";
import logo from "./mhs.png";

function App() {
  const [nsn, setNsn] = useState("");
  const nsnMap = Data.map((student) => student.nsn);
  const [displayIndex, setDisplayIndex] = useState(-1);

  return (
    <>
      <img src={logo} alt="Motueka High School Logo" />
      <h1>Assessment Timetable</h1>
      <p>
        Input your NSN into the box below and press search to see when and where
        your exams will be.
      </p>
      <div className="input-group mb-3">
        <input
          value={nsn}
          onChange={(e) => setNsn(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Your NSN"
          aria-label="Your NSN"
          aria-describedby="basic-addon2"
        />
      </div>
      {nsn !== "" && <p>Searching for the timetable of NSN: {nsn}.</p>}
      {displayIndex >= 0 && <h2>{Data[displayIndex].nsn}</h2>}
      // Add component here so that variables can be declared at the correct
      time, then add index capability
      {displayIndex >= 0 && (
        <p>
          Your {Data[displayIndex].assessment1} assessment is in room{" "}
          {Data[displayIndex].room1} on the {Data[displayIndex].date1} at{" "}
          {Data[displayIndex].time1}.
        </p>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>
          nsnMap.forEach((element, index) => {
            if (element == nsn) {
              setDisplayIndex(index);
            }
          })
        }
      >
        Search
      </button>
      <button
        type="button"
        className="btn btn-danger mx-2"
        onClick={() => {
          setNsn("");
          setDisplayIndex(-1);
        }}
      >
        Clear
      </button>
    </>
  );
}
export default App;

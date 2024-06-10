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
      {nsn !== "" && <p>Your NSN is {nsn}.</p>}

      {displayIndex >= 0 && <h2>{Data[displayIndex].nsn}</h2>}

      {displayIndex >= 0 && (
        <p>
          Your {Data[displayIndex].assessment} assessment is in room{" "}
          {Data[displayIndex].room}.
        </p>
      )}

      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>
          nsnMap.forEach((element, index) => {
            if (element == nsn) {
              console.log(element);
              setDisplayIndex(index);
            }
          })
        }
      >
        Search
      </button>
      <button
        type="button"
        className="btn btn-danger"
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

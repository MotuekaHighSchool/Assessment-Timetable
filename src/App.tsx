import { useEffect, useState } from "react";
import Data from "./data.json";
import logo from "./mhs.png";

export interface Item {
  id: number;
  num: number;
}

function App() {
  const [inputNsn, setInputNsn] = useState("");
  const nsnMap = Data.map((student) => student.nsn);
  const [items, setItems] = useState<Item[]>([]);
  const [displayIndex, setDisplayIndex] = useState(-1);
  useEffect(() => {
    if (displayIndex < 0) {
      addIndex();
    }
  }, [displayIndex]);

  let foundResult = false;
  let itemList: Item[] = [];

  const addIndex = () => {
    setItems([
      ...items,
      {
        id: items.length,
        num: displayIndex,
      },
    ]);
  };

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
          value={inputNsn}
          onChange={(e) => setInputNsn(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Your NSN"
          aria-label="Your NSN"
          aria-describedby="basic-addon2"
        />
      </div>
      {inputNsn !== "" && (
        <p>Searching for the timetable of NSN: {inputNsn}.</p>
      )}
      {/*<DataDisplay index={displayIndex} items={items} />*/}
      {/*
      {props.index >= 0 && (
        <>
          <h2>{Data[props.index].nsn}</h2>
          <p>
            Your {Data[props.index].assessment1} assessment is in room{" "}
            {Data[props.index].room1} on the {Data[props.index].date1} at{" "}
            {Data[props.index].time1}.
          </p>
        </>
      )}
      {props.index == -2 && <p>No results found.</p>}
      */}
      {displayIndex >= 0 && (
        <>
          <h2>{Data[displayIndex].nsn}</h2>
          {items.map((item) => (
            <p key={item.id}>
              Your {Data[item.num].assessment} assessment is in room{" "}
              {Data[item.num].room} on the {Data[item.num].date} at{" "}
              {Data[item.num].time}.
            </p>
          ))}
          <br />
        </>
      )}
      {displayIndex == -2 && <p>No results found.</p>}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setItems([]);
          nsnMap.forEach((element, index) => {
            if (element == inputNsn) {
              itemList.push({ id: itemList.length, num: index });
              setDisplayIndex(index);
              foundResult = true;
            }
          });
          setItems(itemList);
          itemList = [];
          if (foundResult == false) {
            setItems([]);
            setDisplayIndex(-2);
          }
        }}
      >
        Search
      </button>
      <button
        type="button"
        className="btn btn-danger mx-2"
        onClick={() => {
          setInputNsn("");
          setItems([]);
          setDisplayIndex(-1);
        }}
      >
        Clear
      </button>
    </>
  );
}
export default App;

import Data from "./data.json";

interface Props {
  index: number;
}

function DataDisplay(props: Props) {
  return (
    <div>
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
    </div>
  );
}

export default DataDisplay;

import React, { useRef, useState } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import "./App.css";
import Gates from "./components/Gates";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

const boxStyleHighlight = {
  border: "red solid 2.5px",
  borderRadius: "10px",
  padding: "5px",
};

const DraggableBox = ({ id, gate, clicked, boxClicked }) => {
  const updateXarrow = useXarrow();

  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div
        id={id}
        style={clicked.includes(id) ? boxStyleHighlight : boxStyle}
        onClick={() => boxClicked(id)}
      >
        <Gates key={id} gate={gate} />
      </div>
    </Draggable>
  );
};

function App() {
  // {
  //     start: "elem1",
  //     end: "elem2",
  //   },
  const [arrows, setArrows] = useState([]);
  const [clicked, setClicked] = useState([]);

  function boxClicked(id) {
    let temp = clicked;
    if (temp.length == 0) {
      temp = [...temp, id];
    } else if (temp.length == 1) {
      temp = [...temp, id];
      if (temp[0] != temp[1]) {
        setArrows([
          ...arrows,
          {
            start: temp[0],
            end: temp[1],
          },
        ]);
      }
    } else {
      temp.shift();
      temp = [...temp, id];
      if (temp[0] != temp[1]) {
        setArrows([
          ...arrows,
          {
            start: temp[0],
            end: temp[1],
          },
        ]);
      }
    }
    setClicked(temp);
  }

  function onArrowClicked(start, end) {
    let temp = arrows.filter((arr) => arr.start != start && arr.end != end);
    // console.log(temp);
    setArrows(temp);
    setClicked([]);
  }

  function bodyClicked(ref) {
    // console.log(ref.target.classList.length);
    if (ref.target.classList.length == 0) {
      setClicked([]);
    }
  }

  return (
    <div
      className="bg-black"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        padding: "10px",
      }}
      onClick={(ref) => bodyClicked(ref)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Xwrapper>
          <DraggableBox
            id={"elem1"}
            clicked={clicked}
            boxClicked={boxClicked}
            gate={"AND"}
          />
          <DraggableBox
            id={"elem2"}
            clicked={clicked}
            boxClicked={boxClicked}
            gate={"OR"}
          />
          <DraggableBox
            id={"elem3"}
            clicked={clicked}
            boxClicked={boxClicked}
            gate={"NOT"}
          />
          {arrows.map((arr, i) => (
            <div key={i} onClick={() => onArrowClicked(arr.start, arr.end)}>
              <Xarrow start={arr.start} end={arr.end} />
            </div>
          ))}
        </Xwrapper>
      </div>
    </div>
  );
}

export default App;

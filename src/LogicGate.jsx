import React, { useState } from "react";

function LogicGate() {
  const [current, setCurrent] = useState(null);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="gates w-[25vw] h-full overflow-y-scroll">
        <ANDGate setCurrent={setCurrent} selected={true} />
        <ORGate setCurrent={setCurrent} selected={true} />
        <NANDGate setCurrent={setCurrent} selected={true} />
        <NORGate setCurrent={setCurrent} selected={true} />
        <EXORGate setCurrent={setCurrent} selected={true} />
      </div>
      <div
        className="w-[75vw] h-full flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/polka-dot-seamless-pattern-halftone-background-seamless-monochrome-dotted-texture-simple-minimal-pattern-vector-illustration-white-background_192280-1095.jpg')",
        }}
      >
        {current && <CurrentGate gate={current} setCurrent={setCurrent} />}
      </div>
    </div>
  );
}

function CurrentGate({ gate, setCurrent }) {
  if (gate == "OR") {
    return <ORGate setCurrent={setCurrent} selected={false} />;
  } else if (gate == "AND") {
    return <ANDGate setCurrent={setCurrent} selected={false} />;
  } else if (gate == "NAND") {
    return <NANDGate setCurrent={setCurrent} selected={false} />;
  } else if (gate == "NOR") {
    return <NORGate setCurrent={setCurrent} selected={false} />;
  } else if (gate == "EXOR") {
    return <EXORGate setCurrent={setCurrent} selected={false} />;
  }
}

function ORGate({ setCurrent, selected }) {
  const [in1, setIn1] = useState(false);
  const [in2, setIn2] = useState(false);

  return (
    <div
      className={`h-[200px] w-full flex justify-center items-center ${
        selected
          ? "hover:bg-slate-100 cursor-pointer border border-black"
          : "scale-150"
      }`}
      onClick={() => {
        if (selected) setCurrent("OR");
      }}
    >
      <svg
        width={234}
        height={85}
        viewBox="0 0 234 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="OR GATE">
          <g id="OUT">
            <line
              id="out"
              x1="184.726"
              y1="41.8529"
              x2="224.483"
              y2="41.8529"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-out"
              cx="228.459"
              cy="41.8529"
              r="4.33714"
              fill={in1 || in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-2"
            onClick={() => {
              if (!selected) setIn2(!in2);
            }}
          >
            <line
              id="IN_2"
              x1="10.5171"
              y1="64.9843"
              x2="52.4428"
              y2="64.9843"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-2"
              cx="5.8184"
              cy="64.9843"
              r="4.33714"
              fill={in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-1"
            onClick={() => {
              if (!selected) setIn1(!in1);
            }}
          >
            <line
              id="IN_1"
              x1="10.5171"
              y1="19.4443"
              x2="52.4428"
              y2="19.4443"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-1"
              cx="5.8184"
              cy="19.4443"
              r="4.33714"
              fill={in1 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g id="BODY">
            <path
              id="frame"
              d="M54.9729 2.81857H147.86C169.618 2.81857 187.256 20.4566 187.256 42.2143C187.256 63.9719 169.618 81.61 147.86 81.61H54.9729V2.81857Z"
              stroke="black"
              strokeWidth="5.06"
            />
            <text
              id="Text"
              fill="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="23.1314"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="93.6455" y="50.8914">
                OR
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ANDGate({ setCurrent, selected }) {
  const [in1, setIn1] = useState(false);
  const [in2, setIn2] = useState(false);

  return (
    <div
      className={`h-[200px] w-full flex justify-center items-center ${
        selected
          ? "hover:bg-slate-100 cursor-pointer border border-black"
          : "scale-150"
      }`}
      onClick={() => {
        if (selected) setCurrent("AND");
      }}
    >
      <svg
        width={234}
        height={85}
        viewBox="0 0 234 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="AND GATE">
          <g id="OUT">
            <line
              id="out"
              x1="184.726"
              y1="41.8529"
              x2="224.483"
              y2="41.8529"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-out"
              cx="228.459"
              cy="41.8529"
              r="4.33714"
              fill={in1 && in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-2"
            onClick={() => {
              if (!selected) setIn2(!in2);
            }}
          >
            <line
              id="IN_2"
              x1="10.5171"
              y1="64.9843"
              x2="52.4428"
              y2="64.9843"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-2"
              cx="5.8184"
              cy="64.9843"
              r="4.33714"
              fill={in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-1"
            onClick={() => {
              if (!selected) setIn1(!in1);
            }}
          >
            <line
              id="IN_1"
              x1="10.5171"
              y1="19.4443"
              x2="52.4428"
              y2="19.4443"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-1"
              cx="5.8184"
              cy="19.4443"
              r="4.33714"
              fill={in1 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g id="BODY">
            <path
              id="frame"
              d="M54.9729 2.81857H147.86C169.618 2.81857 187.256 20.4566 187.256 42.2143C187.256 63.9719 169.618 81.61 147.86 81.61H54.9729V2.81857Z"
              stroke="black"
              strokeWidth="5.06"
            />
            <text
              id="Text"
              fill="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="23.1314"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="93.6455" y="50.8914">
                AND
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

function NANDGate({ setCurrent, selected }) {
  const [in1, setIn1] = useState(false);
  const [in2, setIn2] = useState(false);

  return (
    <div
      className={`h-[200px] w-full flex justify-center items-center ${
        selected
          ? "hover:bg-slate-100 cursor-pointer border border-black"
          : "scale-150"
      }`}
      onClick={() => {
        if (selected) setCurrent("NAND");
      }}
    >
      <svg
        width={234}
        height={85}
        viewBox="0 0 234 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="AND GATE">
          <g id="OUT">
            <line
              id="out"
              x1="184.726"
              y1="41.8529"
              x2="224.483"
              y2="41.8529"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-out"
              cx="228.459"
              cy="41.8529"
              r="4.33714"
              fill={!(in1 && in2) ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-2"
            onClick={() => {
              if (!selected) setIn2(!in2);
            }}
          >
            <line
              id="IN_2"
              x1="10.5171"
              y1="64.9843"
              x2="52.4428"
              y2="64.9843"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-2"
              cx="5.8184"
              cy="64.9843"
              r="4.33714"
              fill={in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-1"
            onClick={() => {
              if (!selected) setIn1(!in1);
            }}
          >
            <line
              id="IN_1"
              x1="10.5171"
              y1="19.4443"
              x2="52.4428"
              y2="19.4443"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-1"
              cx="5.8184"
              cy="19.4443"
              r="4.33714"
              fill={in1 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g id="BODY">
            <path
              id="frame"
              d="M54.9729 2.81857H147.86C169.618 2.81857 187.256 20.4566 187.256 42.2143C187.256 63.9719 169.618 81.61 147.86 81.61H54.9729V2.81857Z"
              stroke="black"
              strokeWidth="5.06"
            />
            <text
              id="Text"
              fill="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="23.1314"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="93.6455" y="50.8914">
                NAND
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

function NORGate({ setCurrent, selected }) {
  const [in1, setIn1] = useState(false);
  const [in2, setIn2] = useState(false);

  return (
    <div
      className={`h-[200px] w-full flex justify-center items-center ${
        selected
          ? "hover:bg-slate-100 cursor-pointer border border-black"
          : "scale-150"
      }`}
      onClick={() => {
        if (selected) setCurrent("NOR");
      }}
    >
      <svg
        width={234}
        height={85}
        viewBox="0 0 234 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="OR GATE">
          <g id="OUT">
            <line
              id="out"
              x1="184.726"
              y1="41.8529"
              x2="224.483"
              y2="41.8529"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-out"
              cx="228.459"
              cy="41.8529"
              r="4.33714"
              fill={!(in1 || in2) ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-2"
            onClick={() => {
              if (!selected) setIn2(!in2);
            }}
          >
            <line
              id="IN_2"
              x1="10.5171"
              y1="64.9843"
              x2="52.4428"
              y2="64.9843"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-2"
              cx="5.8184"
              cy="64.9843"
              r="4.33714"
              fill={in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-1"
            onClick={() => {
              if (!selected) setIn1(!in1);
            }}
          >
            <line
              id="IN_1"
              x1="10.5171"
              y1="19.4443"
              x2="52.4428"
              y2="19.4443"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-1"
              cx="5.8184"
              cy="19.4443"
              r="4.33714"
              fill={in1 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g id="BODY">
            <path
              id="frame"
              d="M54.9729 2.81857H147.86C169.618 2.81857 187.256 20.4566 187.256 42.2143C187.256 63.9719 169.618 81.61 147.86 81.61H54.9729V2.81857Z"
              stroke="black"
              strokeWidth="5.06"
            />
            <text
              id="Text"
              fill="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="23.1314"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="93.6455" y="50.8914">
                NOR
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

function EXORGate({ setCurrent, selected }) {
  const [in1, setIn1] = useState(false);
  const [in2, setIn2] = useState(false);

  return (
    <div
      className={`h-[200px] w-full flex justify-center items-center ${
        selected
          ? "hover:bg-slate-100 cursor-pointer border border-black"
          : "scale-150"
      }`}
      onClick={() => {
        if (selected) setCurrent("EXOR");
      }}
    >
      <svg
        width={234}
        height={85}
        viewBox="0 0 234 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="OR GATE">
          <g id="OUT">
            <line
              id="out"
              x1="184.726"
              y1="41.8529"
              x2="224.483"
              y2="41.8529"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-out"
              cx="228.459"
              cy="41.8529"
              r="4.33714"
              fill={(in1 ^ in2) ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-2"
            onClick={() => {
              if (!selected) setIn2(!in2);
            }}
          >
            <line
              id="IN_2"
              x1="10.5171"
              y1="64.9843"
              x2="52.4428"
              y2="64.9843"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-2"
              cx="5.8184"
              cy="64.9843"
              r="4.33714"
              fill={in2 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g
            id="IN-1"
            onClick={() => {
              if (!selected) setIn1(!in1);
            }}
          >
            <line
              id="IN_1"
              x1="10.5171"
              y1="19.4443"
              x2="52.4428"
              y2="19.4443"
              stroke="black"
              strokeWidth="5.06"
            />
            <circle
              id="point-in-1"
              cx="5.8184"
              cy="19.4443"
              r="4.33714"
              fill={in1 ? "#FF0000" : "#FFFFF"}
              stroke="black"
              strokeWidth="2.16857"
            />
          </g>
          <g id="BODY">
            <path
              id="frame"
              d="M54.9729 2.81857H147.86C169.618 2.81857 187.256 20.4566 187.256 42.2143C187.256 63.9719 169.618 81.61 147.86 81.61H54.9729V2.81857Z"
              stroke="black"
              strokeWidth="5.06"
            />
            <text
              id="Text"
              fill="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="23.1314"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="93.6455" y="50.8914">
                EXOR
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LogicGate;

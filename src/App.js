import React, { useState } from "react";
import emage from "../src/public/Assets/edrift.jpeg";
import track from "../src/public/Assets/track.jpeg";
import "./App.css";

const App =()=> {
  
  const [thicknesstype,setThicknessType] = useState(2)
  const [current,setCurrent]= useState()
  const [thickness,setThickness] = useState()
  const [temprise,setTemprise] = useState()
  const [amptemp,setAmpTemp] = useState()   //with no use actually
  const [result,setResult]=useState("")
  const [layers,setLayers] = useState(1)

  const handleSelect =(e)=>{
   setResult("")
   setThicknessType(e.target.value)
   handleCalculate()
  }
  console.log(thicknesstype)

  const handleLayers = (e)=>{
   setResult("")
   setLayers(e.target.value)
   if(e.target.value==2){
    handleCalculate(2)
   }else{
    handleCalculate()
   }
  
  }
  
  const handleCalculate =(val)=>{
   if(val==2){
    const area = Math.pow((current/(0.048*Math.pow(temprise,0.44))),1/0.725)
    const width = (area/(thickness*1.378))
    if(thicknesstype==1){
      const wd = width*2.54
      setResult(wd.toFixed(2))
    }else if(thicknesstype==2){
      setResult(width.toFixed(2))
    }
   
   }else{
    const area = Math.pow((current/(0.024*Math.pow(temprise,0.44))),1/0.725)
    const width = (area/(thickness*1.378))
    setResult(width.toFixed(2))
    if(thicknesstype==1){
      console.log("called here in mmm")
      const wd = width*2.54
      setResult(wd.toFixed(2))
    }else if(thicknesstype==2){
      console.log("else called")
      setResult(width.toFixed(2))
    }
   }
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        scrollbarWidth: "thin",
      }}
    >
      <div className="container">
        {/* for logo and heading */}
        <div
          className="row"
          style={{ borderStyle: "solid", borderWidth: "thin" }}
        >
          <div
            className="col-lg-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={emage}
              alt="edriftimage"
              style={{ width: "60%", height: "95%" }}
            />
          </div>
          <div
            className="col-lg-10"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              background:
                "linear-gradient(90deg, rgba(5,182,232,1) 0%, rgba(80,215,244,1) 51%, rgba(126,235,252,1) 100%, rgba(146,244,255,1) 100%, rgba(40,142,150,1) 100%, rgba(55,194,200,1) 100%)",
            }}
          >
            <h1 style={{ color: "black" }}>PCB Design Calculations</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* left side */}
          <div
            className="col-lg-6"
            style={{
              height: "655px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "55px",
                backgroundColor: "#e3aa8b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: "solid",
                borderRightStyle: "solid",
              }}
            >
              <h3 style={{ color: "black" }}>Trace Width</h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%", height: "100px" }}>
                <p style={{ padding: "0px", textAlign: "left" }}>
                  Trace Width is the width of a copper trace on a PCB. It
                  determines the trace's current-carrying capacity,resistance
                  and heat dissipation. Properly calculating the trace width
                  ensures that the PCB operates reliably under the intended
                  current load without <br /> overheating.
                </p>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h5>The trace width is calculated as follows:</h5>
                <h6>First, the Area is calculated,</h6>
                <p>
                  Area[mils^2] = (current[Amps]/(k*(Temp_Rise[deg.C])^b))^(1/c)
                  <br />
                  Then, the Width is calculated:
                  <br />
                  Width[mils] = Area[mils^2]/(Thickness[oz]*1.378[mils/oz])
                  <br />
                  For IPC-2221 internal layers: k = 0.024, b = 0.44, c = 0.725{" "}
                  <br />
                  For IPC-2221 external layers: k = 0.048, b = 0.44, c = 0.725{" "}
                  <br />
                  where k,b and c are constants resulting from curve fitting to
                  the IPC-2221 curves
                </p>
              </div>
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={track}
                  alt="trackwidth"
                />
              </div>
            </div>
          </div>
          {/* right side */}
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "655px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "55px",
                backgroundColor: "#e3aa8b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "black" }}>Calculations</h3>
            </div>
            {/* for gap */}
            <div style={{ width: "100%", height: "50px" }}></div>
            {/* for current */}
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#10bae9", fontWeight: "bold" }}
                  >
                    Current
                  </span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    autoFocus
                    onChange={(e)=>setCurrent(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "70%",
                    background: "red",
                    fontWeight: "bold",
                    backgroundColor: "#e3aa8b",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <h5 style={{ fontWeight: "bold",fontSize:"15px"  }}>Amps</h5>
                </div>
              </div>
            </div>
            {/* for gap */}
            <div style={{ width: "100%", height: "10px" }}></div>
            {/* for Thickness */}
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#10bae9", fontWeight: "bold" }}
                  >
                    Thickness
                  </span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    onChange={(e)=>setThickness(e.target.value)}
                  />
                </div>
              </div>
              
              <div
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "70%",
                    background: "red",
                    fontWeight: "bold",
                    backgroundColor: "#e3aa8b",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <h5 style={{ fontWeight: "bold",fontSize:"15px"}}>oz/ft<sup>2</sup></h5>
                </div>
              </div>
            </div>
            {/* for gap */}
            <div style={{ width: "100%", height: "10px" }}></div>
            {/* for temp rise */}
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#10bae9", fontWeight: "bold" }}
                  >
                    Temperature Rise
                  </span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    onChange={(e)=>setTemprise(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "70%",
                    background: "red",
                    fontWeight: "bold",
                    backgroundColor: "#e3aa8b",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <h5 style={{ fontWeight: "bold",fontSize:"15px"  }}>Celcius</h5>
                </div>
              </div>
            </div>
            {/* for gap */}
            <div style={{ width: "100%", height: "10px" }}></div>
            {/* for ambient temp */}
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#10bae9", fontWeight: "bold" }}
                  >
                    Ambient Temperature
                  </span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    onChange={(e)=>setAmpTemp(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "70%",
                    background: "red",
                    fontWeight: "bold",
                    backgroundColor: "#e3aa8b",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <h5 style={{ fontWeight: "bold" ,fontSize:"15px"}}>Celcius</h5>
                </div>
              </div>
            </div>
            {/* for gap */}
            <div style={{ width: "100%", height: "50px" }}></div>
            {/* calculate button */}
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: 8,
                  }}
                  onClick={()=>handleCalculate()}
                >
                  Calculate Trace Width
                </button>
              </div>
            </div>
            {/* for gap */}
            <div style={{ width: "100%", height: "20px" }}></div>
            {/* result div */}
            <div
              style={{
                width: "100%",
                height: "70px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* button trace width */}
              <div
                style={{
                  width: "33.3%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "75%",
                    height: "70%",
                    backgroundColor: "#0fbaea",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Required TraceWidth
                  </h5>
                </div>
              </div>
              {/* center value */}
              <div
                style={{
                  width: "33.3%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "70%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                   {result.length>0?result:null}
                  </h5>
                </div>
              </div>
              {/* mm or mils */}
              <div
                style={{
                  width: "33.3%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
              <div class="input-group">
                <select class="form-select" id="inputGroupSelect02" onChange={(e)=>handleSelect(e)}>
                  <option selected value="" disabled>
                    select..
                  </option>
                  <option value="1">mm</option>
                  <option value="2">mils</option>
                </select>
                <select class="form-select" id="inputGroupSelect02" onChange={(e)=>handleLayers(e)}>
                  <option selected value="" disabled>
                    select..
                  </option>
                  <option value="1">Internal Layers</option>
                  <option value="2">External Layers</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02" style={{backgroundColor: "#e3aa8b", fontWeight: "bold",fontSize:"15px"}}>{thicknesstype==1?"mm":"mils"}</label>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

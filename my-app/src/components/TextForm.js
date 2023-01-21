import { useState } from "react"


export default function TextForm(props) {
  // function 
  const HandleUpClick = () => {
    // console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted To UpperCase.")
  }
  const HandleLoClick = () => {
    // console.log(text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted To LowerCase.");

  }
  // to enable typing  
  const HandleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value)
  }
  // to copy all text  
  const HandleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("succesfully copied.")

  }
    //to remove extra spaces
    const HandleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  const [text, setText] = useState("")
  // Text="new Text"  //wrong way to set text
  // setText=("new Text")  //correct way to set text
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">textarea</label>
        <textarea className="form-control" value={text}  onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert To UpperCase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert To LowerCase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={HandleCopy}>Copy Text</button>
      <button type="button" className="btn btn-primary mx-2" onClick={HandleExtraSpace}>Remove Extra Space</button>
    </div>
      <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary:</h2>
        <p>{text.split(" ").length} Words and {text.length}Characters.</p>
        <p>{0.08*text.split(" ").length}minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above textarea to preview it."}</p>
      </div>

    </>
  )
}

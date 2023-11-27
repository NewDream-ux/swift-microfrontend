import React from "react";
import './ViewSummary.css'

const ViewSummary=(props)=>{
  const {summaryIdentifier} = props;
    const handleFirstCheck = (e) => {
        const element = document.getElementsByClassName("list");
        console.log("checkElements", element);
    
        for (let a = 0; a < element.length; a++) {
          if (element[a].id == e.target.id) {
            if (e.target.checked) {
              element[a].classList.add("hideList")
            } else {
              element[a].classList.remove("hideList")
            }
          }
        }
      }
    return(
        <>
           <div className={`rightContainer ${summaryIdentifier == "summary" ? `summaryView` : ``}`}>
        <ul className="Accordians">
          {/* //First Menu With SubMenu */}
          <input id="0" className="hiddenCheckbox"  type="checkbox" onChange={handleFirstCheck} /><label for="0"><strong> The name of user</strong></label>
          <div id="0" className="list">
            <li>Alok</li>
            <li>Sharma</li>

            <input id="01" className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="01"><strong> The subname of user</strong></label>
            <div id="01" className="list">
              <li>SubAlok</li>
              <li>SubSharma</li>
            </div>

            <input id="02" className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="02"><strong> The secondsubname of user</strong></label>
            <div id="02" className="list">
              <li>SecondSubAlok</li>
              <li>SecondSubSharma</li>
            </div>
          </div>

          {/* //Second Menu */}
          <input id="1" className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="1"><strong> The book of user</strong></label>
          <div id="1" className="list">
            <li>Ram Charit Manas</li>
            <li>Bhagvat Geeta</li>
          </div>
          {/* //Third Menu */}
          <input id="2" className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="2"><strong> The play of user</strong></label>
          <div id="2" className="list">
            <li>Cricket</li>
            <li>Football</li>
          </div>
        </ul>
        </div>
        </>
    )
}

export default ViewSummary;
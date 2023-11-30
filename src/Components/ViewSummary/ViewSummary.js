import React from "react";
import './ViewSummary.css'

const ViewSummary = (props) => {
  const { summaryIdentifier, viewLabel, groupViewDetails } = props;
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
  return (
    <>
      <div className={`rightContainer ${summaryIdentifier == "summary" ? `summaryView` : ``}`}>
        <span className="view"><strong>{viewLabel}</strong></span>
        <hr />
        <ul className="Accordians">
          {/* //First Menu With SubMenu */}
          {console.log("groupViewDetails", groupViewDetails)}
          {groupViewDetails && groupViewDetails.map((item) => {
            return (
              <>
                <input id={item.DATA_ID} className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="0"><strong> {item.COL_NAME}</strong></label>
                <div id={item.DATA_ID} className="list">
                  {console.log("mnnmnm", item.Child)}
                  {item.Child && item.Child.map((item) => {
                    return (
                      <>
                        <input id={item.DATA_ID} className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="01"> {item.COL_NAME}</label>
                        <div id={item.DATA_ID} className="list">
                        {item.Child && item.Child.map((item) => {
                    return (
                      <>
                        <input id={item.DATA_ID} className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for="01"> {item.COL_NAME}</label>
                        <div id={item.DATA_ID} className="list">
                          {/* <li>SubAlok</li>
              <li>SubSharma</li> */}
                        </div>
                      </>
                    )
                  })}
                          {/* <li>SubAlok</li>
              <li>SubSharma</li> */}
                        </div>
                      </>
                    )
                  })}
                </div>
              </>
            )
          })}

          {/* //Second Menu */}

        </ul>
      </div>
    </>
  )
}

export default React.memo(ViewSummary);
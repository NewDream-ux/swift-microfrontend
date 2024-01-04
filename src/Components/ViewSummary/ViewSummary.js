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

          {groupViewDetails.map((item) => {
            const { DATA_ID, COL_NAME, child } = item;
            return (
              <>
                <input id={DATA_ID} className="hiddenCheckbox" type="checkbox" onChange={handleFirstCheck} /><label for={DATA_ID}><strong><i class="bi bi-circle-fill ulCircle"></i> {COL_NAME}</strong></label>
                <div id={DATA_ID} className="list">
                  {child.map((childItem) => {
                    const { DATA_ID, COL_NAME } = childItem;
                    return (
                      <li><i class="bi bi-circle-fill liCircle"></i> {COL_NAME}</li>
                    )
                  })}
                </div>
              </>
            )
          })}


        </ul>
      </div>
    </>
  )
}

export default React.memo(ViewSummary);
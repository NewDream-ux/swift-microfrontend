import React from "react";
import "./Detail.css"
import Datepicker from "../DatePicker/DatePicker";
import ViewSummary from "../ViewSummary/ViewSummary";

const Details = () => {
    return (
        <>
            <div className="detailContainer">
                <span className="generalText">General</span>
                <div className="row">
                    <div className="col-lg-6 detailContent" >
                        <div className="row detailLeftsection">
                            <div className="col-lg-6">
                                <span><strong>Organization : </strong>ACCA</span>
                                <span><strong>Creation Date : </strong>18/12/2013</span>
                                <span><strong>Formation Date : </strong>05/01/2014</span>
                                <span><strong>3rd Party Number : </strong>767653456</span>
                                <span><input type="checkbox" />  Underwriting Applied</span>
                                <Datepicker />
                            </div>
                            <div className="col-lg-6">
                                <span><input type="checkbox" />  Show Group Name On Member Documents</span>
                                <span><input type="checkbox" />  Bespoke Filfilment</span>
                                <span><input type="checkbox" />  Bespoke Renewal Letter</span>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-6">
                             <ViewSummary summaryIdentifier="summary"/>
                        </div>


                </div>
            </div>
        </>
    )
}

export default Details;
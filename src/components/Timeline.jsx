import React from "react"


function Timeline(){
    return(
        <>
         
        <div className="timeline">
        <h4>Career:</h4>
        <div className="container">
            <div className="component">
                <div className="timeline_date date_right">2024 January 8TH</div>
            </div>
            
            <div className="component_middle">
                <div className="timeline_dot"></div>
            </div>
            <div className="component">
                <div className="timeline_date achivement"><h4>Company Name</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit</p></div>
            </div>
            <div className="component">
                <div className="timeline_date achivement"><h4>Company Name</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit</p></div>
            </div>
            <div className="component_middle">
                <div className="timeline_dot"></div>
                <div className="timeline_dot timeline_dot--bottom"></div>
            </div>
            <div className="component">
                <div className="timeline_date date_left">2024 January 8TH</div>
            </div>
        </div>
        </div>
        </>
    )
        

    
}
export default Timeline
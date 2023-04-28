import React from "react";
import Sub from "./Sub";
import Adv from "./Adv";

const mainStyle = {
    width: '700px',
    height: '430px',
    backgroundColor: "red" ,
    display: 'inline-block',
    padding: '10px',
    margin: '10px 0px',
};

const Main = () => {

    return (
        <div style={mainStyle}>
            <div><Sub/>
            <Sub/>
            <Sub/>
            <Adv/></div>
        </div>
    );
}
    
export default Main;
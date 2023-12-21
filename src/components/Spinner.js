import React, { Component } from "react";
import spinner from "./spinner.gif";

// export class Spinner extends Component {
// render() {
function Spinner() {
    return (
        <div className="text-center">
            <img
                src={spinner}
                alt="spinner"
                className="my-3"
                style={{ width: "3rem" }}
            />
        </div>
    );
    // }
}

export default Spinner;

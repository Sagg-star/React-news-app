import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Navbar() {
    let [progress, setProgress] = useState(0);
    // constructor() {
    //     super();
    //     this.state = {
    //         progress: 0,
    //     };
    // }
    // render() {
    return (
        <div>
            <LoadingBar
                color="#f11946"
                // progress={this.state.progress}
                progress={progress}
                // onLoaderFinished={() => this.setState({ progress: 0 })}
                onLoaderFinished={() => setProgress(0)}
            />
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        to="/"
                        onClick={() =>
                            // this.setState({
                            //     progress: 100,
                            // })
                            setProgress(100)
                        }
                    >
                        Fusion Post
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                    onClick={() =>
                                        // this.setState({
                                        //     progress: 100,
                                        // })
                                        setProgress(100)
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/technology"
                                    onClick={() =>
                                        // this.setState({
                                        //     progress: 100,
                                        // })
                                        setProgress(100)
                                    }
                                >
                                    Technology
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/sports"
                                    onClick={() =>
                                        // this.setState({
                                        //     progress: 100,
                                        // })
                                        setProgress(100)
                                    }
                                >
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/entertainment"
                                    onClick={() =>
                                        // this.setState({
                                        //     progress: 100,
                                        // })
                                        setProgress(100)
                                    }
                                >
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/health"
                                    onClick={() =>
                                        // this.setState({
                                        //     progress: 100,
                                        // })
                                        setProgress(100)
                                    }
                                >
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/business"
                                    onClick={() =>
                                        // this.setState({
                                        //     progress: 100,
                                        // })
                                        setProgress(100)
                                    }
                                >
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/science"
                                    onClick={() =>
                                        // this.setState({ progress: 100 })
                                        setProgress(100)
                                    }
                                >
                                    Science
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
    // }
}

export default Navbar;

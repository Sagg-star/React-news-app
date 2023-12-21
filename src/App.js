import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default class App extends Component {
export default function App() {
    // constructor() {
    //     super();
    //     this.state = { name: "Harsh" };
    // }
    let apiKey = process.env.REACT_APP_NEWS_API;
    // render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <News
                                key="home"
                                category=""
                                pageSize={18}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/technology"
                        element={
                            <News
                                key="technology"
                                category="technology"
                                pageSize={18}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/sports"
                        element={
                            <News
                                key="sports"
                                category="sports"
                                pageSize={18}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/entertainment"
                        element={
                            <News
                                key="entertainment"
                                category="entertainment"
                                pageSize={15}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/health"
                        element={
                            <News
                                key="health"
                                category="health"
                                pageSize={18}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/business"
                        element={
                            <News
                                key="business"
                                category="business"
                                pageSize={9}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/science"
                        element={
                            <News
                                key="science"
                                category="science"
                                pageSize={18}
                                page={1}
                                // api_key={this.apiKey}
                                api_key={apiKey}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
    // }
}

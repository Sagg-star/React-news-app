import React, { Component } from "react";
import "./../index.css";

// export class NewsItem extends Component {
function NewsItem(props) {
    // render() {
    return (
        <div className="m-2">
            <div className="card" style={{ minWidth: "18rem" }}>
                <img
                    src={
                        // this.props.imageUrl !== null
                        //     ? this.props.imageUrl
                        //     : "https://ichef.bbci.co.uk/news/1024/branded_news/15371/production/_132079868_bppic.png"
                        props.imageUrl !== null
                            ? props.imageUrl
                            : "https://ichef.bbci.co.uk/news/1024/branded_news/15371/production/_132079868_bppic.png"
                    }
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger left-badge"
                        style={{
                            zIndex: 1,
                        }}
                    >
                        {/* {!this.props.source ? "Unknown" : this.props.source} */}
                        {!props.source ? "Unknown" : props.source}
                    </span>
                    <h5 className="card-title">
                        {/* {this.props.title !== null
                                ? `${this.props.title.slice(0, 50)}...`
                                : "Click link to read more"} */}
                        {props.title !== null
                            ? `${props.title.slice(0, 50)}...`
                            : "Click link to read more"}
                    </h5>
                    <p className="card-text" style={{ marginBottom: "0" }}>
                        <small className="text-muted">
                            {/* {!this.props.author
                                    ? "Unknown"
                                    : this.props.author} */}
                            {!props.author ? "Unknown" : props.author}
                        </small>
                    </p>
                    <p
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "0.5rem" }}
                    >
                        <span
                            style={{
                                color: "blue",
                                fontSize: "0.9rem",
                                marginBottom: "0",
                                fontWeight: "bold",
                            }}
                        >
                            {/* {this.props.dateTime.slice(
                                    0,
                                    this.props.dateTime.indexOf("T")
                                )} */}
                            {props.dateTime.slice(
                                0,
                                props.dateTime.indexOf("T")
                            )}
                        </span>
                        <span
                            style={{
                                color: "blue",
                                fontSize: "0.9rem",
                                marginBottom: "0 !important",
                                fontWeight: "bold",
                            }}
                        >
                            {/* {this.props.dateTime.slice(
                                    this.props.dateTime.indexOf("T") + 1,
                                    this.props.dateTime.indexOf("z")
                                )} */}
                            {props.dateTime.slice(
                                props.dateTime.indexOf("T") + 1,
                                props.dateTime.indexOf("z")
                            )}
                        </span>
                    </p>
                    <p className="card-text">
                        {/* {this.props.description !== null
                            ? `${this.props.description.slice(0, 90)}...`
                            : "Click link to read more"} */}
                        {props.description !== null
                            ? `${props.description.slice(0, 90)}...`
                            : "Click link to read more"}
                    </p>
                    {/* <a
                            target="_blank"
                            rel="noreferrer"
                            href={this.props.link}
                            className="btn btn-primary"
                        > */}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={props.link}
                        className="btn btn-primary"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
    // }
}

export default NewsItem;

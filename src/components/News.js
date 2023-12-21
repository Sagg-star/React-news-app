import React, { Component, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
function News(props) {
    let [article, setArticle] = useState([]);
    let [loading, setLoading] = useState(false);
    let [page, setPage] = useState(1);
    let [numArticles, setNumArticles] = useState(0);
    let [totalResults, setTotalResults] = useState(0);
    // constructor() {
    //     super();
    //     this.state = {
    //         article: [],
    //         loading: false,
    //         page: 1,
    //         numArticles: 0,
    //         totalResults: 0,
    //     };
    // }

    // async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.api_key}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    //     this.setState({
    //         loading: true,
    //     });
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     this.setState({
    //         article: jsonData.articles,
    //         numArticles: jsonData.totalResults,
    //         loading: false,
    //     });
    //     document.title = `Fusion Labs - ${this.props.category} top news`;
    // }

    async function componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.api_key}&category=${props.category}&pageSize=${props.pageSize}&page=1`;
        setLoading(true);
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticle(jsonData.articles);
        setNumArticles(jsonData.totalResults);
        setLoading(false);
        setTotalResults(jsonData.totalResults);
        document.title = `Fusion Post - ${
            props.category === ""
                ? "Recent"
                : props.category.slice(0, 1).toUpperCase() +
                  props.category.slice(1)
        } top news`;
    }

    useEffect(() => {
        componentDidMount();
    }, []);

    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.api_key}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=1`;
    //     this.setState({
    //         loading: true,
    //     });
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     this.setState({
    //         article: jsonData.articles,
    //         numArticles: jsonData.totalResults,
    //         loading: false,
    //         totalResults: jsonData.totalResults,
    //     });
    //     document.title = `Fusion Post - ${
    //         this.props.category === ""
    //             ? "Recent"
    //             : this.props.category.slice(0, 1).toUpperCase() +
    //               this.props.category.slice(1)
    //     } top news`;
    //     // this.setState({
    //     //     page: this.state.page,
    //     // });
    //     // this.updateNews();
    // }

    const prevPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
            props.api_key
        }&category=${props.category}&pageSize=${props.pageSize}&page=${
            page - 1
        }`;
        setLoading(true);
        let data = await fetch(url);
        let jsonData = await data.json();
        setPage(page - 1);
        setArticle(jsonData.articles);
        setLoading(false);
    };

    // prevPage = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
    //         this.props.api_key
    //     }&category=${this.props.category}&pageSize=${
    //         this.props.pageSize
    //     }&page=${this.state.page - 1}`;
    //     this.setState({
    //         loading: true,
    //     });
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         article: jsonData.articles,
    //         loading: false,
    //     });
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     // });
    //     // this.updateNews();
    // };

    const nextPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
            props.api_key
        }&category=${props.category}&pageSize=${props.pageSize}&page=${
            page + 1
        }`;
        setLoading(true);
        let data = await fetch(url);
        let jsonData = await data.json();
        setPage(page + 1);
        setArticle(jsonData.articles);
        setLoading(false);
    };

    // nextPage = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
    //         this.props.api_key
    //     }&category=${this.props.category}&pageSize=${
    //         this.props.pageSize
    //     }&page=${this.state.page + 1}`;
    //     this.setState({
    //         loading: true,
    //     });
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         article: jsonData.articles,
    //         loading: false,
    //     });
    //     // this.setState({
    //     //     page: this.state.page + 1,
    //     // });
    //     // console.log(this.state.page);
    //     // this.updateNews();
    // };

    const delay = (milliseconds) => {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    };

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
            props.api_key
        }&category=${props.category}&pageSize=${props.pageSize}&page=${
            page + 1
        }`;
        let data = await fetch(url);
        let jsonData = await data.json();
        // await this.delay(1500);
        await delay(1500);
        setPage(page + 1);
        setLoading(false);
        setArticle(article.concat(jsonData.articles));
    };

    // fetchMoreData = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
    //         this.props.api_key
    //     }&category=${this.props.category}&pageSize=${
    //         this.props.pageSize
    //     }&page=${this.state.page + 1}`;
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     await this.delay(1500);
    //     this.setState({
    //         page: this.state.page + 1,
    //         loading: false,
    //         article: this.state.article.concat(jsonData.articles),
    //     });
    //     // console.log(this.state.article.length, this.state.totalResults);
    // };

    // render() {
    return (
        <div className="py-3">
            <h1 className="text-center my-3 mt-5 p-3">
                {/* {this.props.category === ""
                        ? "Top Headlines"
                        : `Top Headlines - ${
                              this.props.category.slice(0, 1).toUpperCase() +
                              this.props.category.slice(1)
                          }`} */}
                {props.category === ""
                    ? "Top Headlines"
                    : `Top Headlines - ${
                          props.category.slice(0, 1).toUpperCase() +
                          props.category.slice(1)
                      }`}
            </h1>
            {/* {this.state.loading && <Spinner />} */}
            {loading && <Spinner />}
            <InfiniteScroll
                // dataLength={this.state.article.length}
                dataLength={article.length}
                next={fetchMoreData}
                // next={this.fetchMoreData}
                // hasMore={
                //     this.state.article.length !== this.state.totalResults
                // }
                hasMore={article.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {/* {!this.state.loading && */}
                        {/* {this.state.article.map((element) => { */}
                        {article.map((element) => {
                            return (
                                <div
                                    className="col-md-6 col-lg-4"
                                    key={element.url}
                                >
                                    <NewsItem
                                        title={element.title}
                                        description={element.description}
                                        imageUrl={element.urlToImage}
                                        link={element.url}
                                        dateTime={element.publishedAt}
                                        author={element.author}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.prevPage}
                        disabled={this.state.page <= 1}
                    >
                        &larr; Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.nextPage}
                        disabled={
                            this.state.page ===
                            parseInt(
                                this.state.numArticles / this.props.pageSize
                            ) +
                                1
                        }
                    >
                        Next &rarr;
                    </button>
                </div> */}
        </div>
    );
    // }
}

export default News;

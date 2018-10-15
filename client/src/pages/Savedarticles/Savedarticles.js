import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Nav from '../../components/Nav';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Savedarticles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res => this.setState({ article: res.data, title: "", date: "", url: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchButton = event => {
        event.preventDefault();

        if (this.state.title && this.state.date) {
            API.saveArticle({
                title: this.state.title,
                date: this.state.date,
                url: this.state.url
            })
                .then(res => this.loadArticles())
                .catch(err => console.log(err))
        }
    };

    handleSearchButton = event => {
        
    }



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Nav>
                            <h1>Articles On My List</h1>
                        </Nav>
                        {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem key={article._id}>
                                        <Link to={"//" + article._id}>
                                            <strong>
                                                {article.title} by {article.author}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteBook(article._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Savedarticles; 
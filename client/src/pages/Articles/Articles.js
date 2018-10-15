import React, { Component } from "react";
import Nav from '../../components/Nav';
import { Col, Container, Row } from '../../components/Grid';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input, SearchBtn } from '../../components/Form';
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";

class Articles extends Component {

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
          .then(res =>
            this.setState({ articles: res.data, title: "", date: "", url: ""})
          )
          .catch(err => console.log(err));
      };


//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchButton = event => {
        event.preventDefault();
        console.log(this.state.title);
        console.log(this.state.date);
        console.log(this.state.ur);
        console.log(this.state.articles);
            if (this.state.title && this.state.author) {
              API.saveArticle({
                title: this.state.title,
                date: this.state.date,
                url: this.state.url
              })
                .then(res => this.loadArticles())
                .catch(err => console.log(err));
            }
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Nav>
                            <h1>Search</h1>
                        </Nav>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <Input
                                value={this.state.date}
                                name="date"
                                onChange={this.handleInputChange}
                                placeholder="Date (required)"
                            />
                            <Input
                                value={this.state.url}
                                onChange={this.handleInputChange}
                                name="url"
                                placeholder="URL"
                            />
                        </form>
                        <SearchBtn onClick={this.handleSearchButton} disabled={!(this.state.title && this.state.date)}>
                            Search
                        </SearchBtn>
                        </Col>
                        <Col size="md-6 sm-12">
       
              <h1>Books On My List</h1>
        
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/books/" + article._id}>
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

export default Articles; 

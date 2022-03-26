import { React, Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
class Cart extends Component {
  state = {
    data: [
      {
        name: "Burger",
        price: 54,
        quantity: 1,
        imgurl:
          "https://theoptimist.news/wp-content/uploads/2019/09/burger-810x456.jpg",
      },
      {
        name: "Sandwich",
        price: 40,
        quantity: 1,
        imgurl:
          "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
      },
      {
        name: "Pasta",
        price: 30,
        quantity: 1,
        imgurl:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8246835.jpg",
      },
    ],

    total: 0,
  };
  increase = (e) => {
    this.setState({ quantity: e.quantity++ });
    console.log("increase", e.name, e.quantity * e.price);
    this.setState({ price: [e.quantity * e.price] });
  };
  decrease = (e) => {
    if (e.quantity > 0) {
      this.setState({ quantity: --e.quantity });
      console.log("increase", e.name, e.quantity * e.price);
    }
  };
  render() {
    return (
      <>
        <Container>
          <hr></hr>
          <Row md={4} mb={3}>
            <Col></Col>
            <Col>Item Name</Col>
            <Col>Quantity</Col>
            <Col>Price</Col>
          </Row>
          <hr></hr>
          {this.state.data.map((item, index) => (
            <Row md={4}>
              <Col>
                <Image src={item.imgurl} thumbnail="true"></Image>
              </Col>
              <Col>{item.name}</Col>
              <Col>
                <span>
                  <Button variant="warning" onClick={() => this.decrease(item)}>
                    -
                  </Button>
                  {"  "}
                </span>
                {item.quantity}
                <span>
                  {"  "}
                  <Button variant="warning" onClick={() => this.increase(item)}>
                    +
                  </Button>
                  {"  "}
                </span>
              </Col>
              <Col>{item.price}</Col>
            </Row>
          ))}
        </Container>
      </>
    );
  }
}

export default Cart;

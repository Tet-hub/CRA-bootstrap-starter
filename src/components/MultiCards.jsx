import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultImage from "../images/logo192.png";
import imageCard from "../images/test-card.svg";

const MultiCards = () => {
  return (
    <div className="row">
      <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-6 mb-4">
        <Card style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              src={defaultImage}
              style={{ height: "12rem", width: "12rem" }}
              className="img-responsive"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="truncate-3-lines">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Expedita voluptatem labore explicabo
              accusamus nam magni et cumque omnis qui quos! Doloremque provident
              dolores quidem similique omnis cupiditate aperiam inventore
              reprehenderit.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-6 mb-4">
        <Card style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              src={imageCard}
              style={{ height: "12rem", width: "100%" }}
              className="img-responsive"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="truncate-3-lines">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Expedita voluptatem labore explicabo
              accusamus nam magni et cumque omnis qui quos! Doloremque provident
              dolores quidem similique omnis cupiditate aperiam inventore
              reprehenderit.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-6 mb-4">
        <Card style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              src={defaultImage}
              style={{ height: "12rem", width: "12rem" }}
              className="img-responsive"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="truncate-3-lines">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Expedita voluptatem labore explicabo
              accusamus nam magni et cumque omnis qui quos! Doloremque provident
              dolores quidem similique omnis cupiditate aperiam inventore
              reprehenderit.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MultiCards;

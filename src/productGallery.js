import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductGallery = () => {
  const [selectedCat, setSelectedCat] = useState("New");

  const cat = ["New", "Popular", "Budget"];

  const items = {
    New: [
      { name: 'Spicy Chicken Wrap', description: 'A deliciously spicy wrap with chicken, veggies, and special sauce.', price: '60.99', image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Buffalo-Chicken-Wrap-3-500x500.jpg' },
      { name: 'Caesar Salad', description: 'Fresh salad with Caesar dressing.', price: '5.49', image: 'https://www.recipetineats.com/tachyon/2016/05/Caesar-Salad_7-SQ.jpg?resize=500%2C500' },
    ],
    Popular: [
      { name: 'Veggie Burger', description: 'Healthy and tasty veggie burger with a side of fries.', price: '70.99', image: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe-500x500.jpg' },
      { name: 'Mango Smoothie', description: 'Fresh mango smoothie to refresh your day.', price: '30.99', image: 'https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5-500x500.jpg' },
    ],
    Budget: [
      { name: 'Loaded Nachos', description: 'Crispy nachos loaded with cheese, jalapenos, and salsa.', price: '40.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazU9Zef1jR2L4V2OyHFmqh4KT2L4bB4Ilcg&s' },
      { name: 'Grilled Chicken Salad', description: 'Grilled chicken on a bed of fresh greens.', price: '60.99', image: 'https://www.recipetineats.com/tachyon/2016/05/Caesar-Salad_7-SQ.jpg?resize=500%2C500' },
    ]
  };

  return (
    <Container fluid className="p-0">
      <section className="day-nav text-center my-4">
        <Nav variant="pills" className="justify-content-center">
          {cat.map((cat) => (
            <Nav.Item key={cat}>
              <Nav.Link
                active={selectedCat === cat}
                onClick={() => setSelectedCat(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </section>
      
      <section className="menu-section py-5" id="menu">
        <Container fluid className="p-0"> 
          <h2 className="text-center mb-4"> {selectedCat}</h2>
          <Row>
            {(items[selectedCat] || []).map((item, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                <Card className="h-100 shadow">
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">₹{item.price}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default ProductGallery;

import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      console.log(data.recipes);
      setRecipes(data.recipes);
    }

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text-center mt-2 display-3" style={{ fontWeight: 400 }}>Recipes</h1>
      <Container className="pt-5">
        <Row className="justify-content-md-center overflow-hidden">
          {recipes.map((item) => {
            return (
              <Col key={item.id}>
                <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className="fs-5" style={{ fontWeight: 600 }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium inventore nostrum doloremque. Dolorum iusto optio, labore est neque inventore.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}
export default App
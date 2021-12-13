import { Col, Row, Container } from "react-bootstrap";
import * as Dash from "./styles";

import { GoPackage } from "react-icons/go";

export function DashboardComponent() {
  return ( 
    <Container>
      <Row>
        <Col sm> 
          <Dash.Card>
            <Dash.Card.Body>
              <Row>
                <Col>
                  <Dash.IconDash>
                    <GoPackage />
                  </Dash.IconDash>
                </Col>

                <Col>
                  <Dash.Card.Title>50</Dash.Card.Title>
                  <Dash.Card.Text>Produtos cadastrados</Dash.Card.Text>
                </Col>
              </Row>
            </Dash.Card.Body>
          </Dash.Card>
        </Col>

        <Col sm>
          <Dash.Card>
            <Dash.Card.Body>
              <Row>
                <Col>
                  <Dash.IconDash>
                    <GoPackage />
                  </Dash.IconDash>
                </Col>

                <Col>
                  <Dash.Card.Title>50</Dash.Card.Title>
                  <Dash.Card.Text>Produtos cadastrados</Dash.Card.Text>
                </Col>
              </Row>
            </Dash.Card.Body>
          </Dash.Card>
        </Col>

        <Col sm>
          <Dash.Card>
            <Dash.Card.Body>
              <Row>
                <Col>
                  <Dash.IconDash>
                    <GoPackage />
                  </Dash.IconDash>
                </Col>

                <Col>
                  <Dash.Card.Title>50</Dash.Card.Title>
                  <Dash.Card.Text>Produtos cadastrados</Dash.Card.Text>
                </Col>
              </Row>
            </Dash.Card.Body>
          </Dash.Card>
        </Col>
      </Row>
    </Container>
  );
}

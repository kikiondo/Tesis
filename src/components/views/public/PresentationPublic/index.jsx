import React from 'react'
import ProductList from '../../components/producList/'
import ShoppingCart from '../../components/shoppingCart/'
import { Navbar, Grid, Row, Col } from 'react-bootstrap'

const PresentationPublic = () => {
  return (
    <div>
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='./'>Ecommerce</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <Grid>
        <Row>
          <Col sm={8}>
            <ProductList />
          </Col>
          <Col sm={4}>
            <ShoppingCart />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default PresentationPublic

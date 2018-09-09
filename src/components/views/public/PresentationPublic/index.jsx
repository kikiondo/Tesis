import React from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'
import { Navbar, Grid, Row, Col, Button } from 'react-bootstrap'
import Navigation from '../../components/navegation'

const PresentationPublic = () => {
  return (
    <div>
      <Navigation />

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

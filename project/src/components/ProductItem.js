import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import exzample from '../assets/exzample.png' 

const ProductItem = ({product}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'} className="mb-4">
                <Image width={150} height={150} src={exzample}/>
                <div>
                    <div style={{overflow: 'hidden', textOverflow: "ellipsis", height: 50}}>{product.name}</div>
                    {/* <div>{product.description}</div> */}
                    <Button style={{cursor: 'pointer'}}>Добавить</Button>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;
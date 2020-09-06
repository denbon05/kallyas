import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import './css/Services.css';
import progresiv from './css/imgCards/progresiv.png';
import qualityContent from './css/imgCards/qualityContent.png';
import research from './css/imgCards/research.png';
import toDo from './css/imgCards/toDo.png';

export default class Sevices extends React.Component {
  renderCardServices() {
    const cards = [
      { img: progresiv, text: 'To-do list for every day' },
      { img: qualityContent, text: 'Research for fresh content' },
      { img: research, text: 'Progresive results' },
      { img: toDo, text: 'Quality content & clean digital image' },
    ];

    return cards.map(({ img, text }) => (
      <Card className="cardElement CardImg" key={_.uniqueId()} style={{ border: 'none' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }

  render() {

    return (
      <div className="boxCards">
        <Card className="cardElement" style={{width: 200 + 'px', border: 'none'}}>
          <Card.Body>
            <Card.Title><b>How we can help you?</b></Card.Title>
            <Card.Text style={{textAlign: 'start'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
            </Card.Text>
            <a href="#" className="btn btn-1" style={{color: 'white'}}>Our Services ></a>
          </Card.Body>
        </Card>
        {this.renderCardServices()}
      </div>
    );
  }
}
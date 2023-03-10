import React from 'react'
import { Carousel} from 'antd'
import "./style.css"
const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
export const Carou = () => (
  <Carousel
    effect="fade"
    autoplay="true"
    dotPosition="bottom"
    className="Image"
  >
    <div>
      <h3 style={contentStyle}>pic1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>pic2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>pic3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>pic4</h3>
    </div>
  </Carousel>
)

import { Typography } from 'antd';
import React from 'react';



export default function Footer (){
  return <Typography style={footerStyle}>Zurich 2024</Typography>;
};



const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#23366f',
  lineHeight: '40px',
  height: '40px',
};
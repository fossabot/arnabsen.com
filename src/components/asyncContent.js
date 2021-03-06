import React from 'react';
import { Card, Divider, Timeline } from 'antd';
//import Resume from './ArnabSenResume.pdf';
import 'antd/dist/antd.css';

//const { Meta } = Card;
//const { Link } = Anchor;

const gridStyle = {
    width: '33.333%',
    textAlign: 'center',
};

export default () => (

                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        <Divider>About</Divider>
                        <p>Arnab is focused on building an international career leading successful projects that harness his technical skills, creative talents, business knowledge, and leadership abilities.</p>
                        
                        <Divider>Work Experience</Divider>
                        <Timeline>
                            <Timeline.Item>AKQA Paris</Timeline.Item>
                            <Timeline.Item>AKQA San Francisco</Timeline.Item>
                            <Timeline.Item>Serviceplan</Timeline.Item>
                            <Timeline.Item>Teach For India</Timeline.Item>
                            <Timeline.Item>Interone</Timeline.Item>
                            <Timeline.Item>ResponseTek</Timeline.Item>
                            <Timeline.Item>Satyam (now TechMahindra)</Timeline.Item>
                            <Timeline.Item>Canada Revenue Agency</Timeline.Item>
                        </Timeline>

                        <Divider>Brands</Divider>
                        <Card >
                            <Card.Grid style={gridStyle}>Audi</Card.Grid>
                            <Card.Grid style={gridStyle}>BMW</Card.Grid>
                            <Card.Grid style={gridStyle}>Canon</Card.Grid>
                            <Card.Grid style={gridStyle}>Chanel</Card.Grid>
                            <Card.Grid style={gridStyle}>Jordan</Card.Grid>
                            <Card.Grid style={gridStyle}>Nike</Card.Grid>
                            <Card.Grid style={gridStyle}>MCM</Card.Grid>
                            <Card.Grid style={gridStyle}>Porsche</Card.Grid>
                            <Card.Grid style={gridStyle}>Sephora</Card.Grid>
                        </Card>
                    </div>

);
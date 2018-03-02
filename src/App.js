import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Card, Anchor, Divider, Timeline, BackTop } from 'antd';
import { SocialIcon, SocialIcons } from 'react-social-icons';
//import { Document, Page } from 'react-pdf';
import Resume from './ArnabSenResume.pdf';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Link } = Anchor;

const headerStyle = {
    width: '100%',
    height: 50,
    top: 0,
    position: 'absolute',
    left: 0,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 90
}

const gridStyle = {
    width: '33.333%',
    textAlign: 'center',
};

/* const socialIconUrls = [
    'http://twitter.com/arnab',
    'http://linkedin.com/in/arnabsen'
]; */

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div style={headerStyle}>
                        Arnab Sen
                    </div>
                </Header>
                <Content id="content" style={{ padding: '0 50px', marginTop: 64 }}>
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

                    {/*<Divider>Resume / CV</Divider>

                     <PDF file={Resume} fillwidth>
                    </PDF> */}
      
                </Content>

                <BackTop />

                <Footer style={{ textAlign: 'center' }}>
                <SocialIcon url="http://linkedin.com/in/arnabsen" />
{/*                 <SocialIcon url="http://linkedin.com/in/jaketrent" />
                <SocialIcons urls={socialIconUrls} color="black" style={{textAlign: 'center'}}/> */}
                    <p>©2018 Arnab Sen</p>
                </Footer>
            </Layout>
        );
    }
}

export default App;
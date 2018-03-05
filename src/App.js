import React from 'react';
import Loadable from 'react-loadable';
import { Layout, BackTop } from 'antd';
import { SocialIcon } from 'react-social-icons';

const { Header, Content, Footer } = Layout;

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

const AsyncContent = Loadable({
    loader: () => import("./components/asyncContent"),
    loading: () => <div>Loading...</div>,
  });

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
                     <AsyncContent/>
                </Content>

                <BackTop />

                <Footer style={{ textAlign: 'center' }}>
                <SocialIcon url="http://linkedin.com/in/arnabsen" color="black"/>
                    <p>©2018 Arnab Sen</p>
                </Footer>
            </Layout>
        );
    }
}

export default App;
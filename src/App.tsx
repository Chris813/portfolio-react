import React from 'react';
import './App.scss';
import {Home} from './pages/Home'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Layout, theme } from 'antd';




const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter>
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <NavBar/>
      </Header>
      <Content>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Content>
      
    </Layout>
    </BrowserRouter>
  );
};

export default App;
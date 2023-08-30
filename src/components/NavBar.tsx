import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { HomeOutlined,FundProjectionScreenOutlined,FileTextOutlined,EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.scss';
import logo from '../assets/img/avatar.jpg';
const items: MenuProps['items'] = [
  {
    label: (
        <Link to={'/'}>主页</Link>
    ),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (
        <Link to={'/projects'}>项目</Link>
    ),
    key: 'projects',
    icon: <FundProjectionScreenOutlined />,
  },
  {
    label: (
        <Link to={'/resume'}>简历</Link>
    ),
    key: 'resume',
    icon: <FileTextOutlined />,
  },
 {
    label: (
        <a href="https://chris813.github.io/" target="_blank" rel="noopener noreferrer">
          博客
        </a>
      ),
    key: 'blog',
    icon: <EditOutlined />,
 }
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const [scrolled,setScrolled]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolling')
      console.log(window.scrollY);
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className={scrolled?'navBar scrolled':'navBar'}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
    </div>
  )
 
};

export default NavBar;
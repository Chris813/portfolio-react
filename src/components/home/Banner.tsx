import headerImg from "../../assets/img/header-img.svg";
import { Col, Row } from 'antd';
import '../../Styles/Banner.scss'
import { useEffect, useState } from 'react';
export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=['目前研究生在读','一名前端开发者','热爱前端开发','热爱学习','热爱生活']
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300- Math.random()*100);
    const [index, setIndex] = useState(1);
    const period=2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <div className="banner">
            <Row>
                <Col span={11}>
                    <div className="introduce">
                        <h1 className="title">Hello! 👋🏻 </h1>
                        <h1>你好，我是<span style={{color:'#833497',paddingLeft:'10px'}}>伍琼</span></h1>
                        <div className="typewrite">
                          <span className="wrap">{text}</span>
                        </div>
                    </div>
                </Col>
                <Col span={9}>
                    <img src={headerImg} alt="" />
                </Col>
            </Row>
               
        </div>
    )
}
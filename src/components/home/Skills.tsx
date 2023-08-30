import '../../Styles/Skills.scss';
import d3logo from '../../assets/img/d3.svg';
import vitelogo from '../../assets/img/vite.svg';
export const Skills=()=>{
    const skills=[
        {
            name:'JavaScript',
            icon:<i className='iconfont icon-JavaScript'/>,
        },
        {
            name:'TypeScript',
            icon:<i className='iconfont icon-typescript'/>,
        },
        {
            name:'Sass',
            icon:<i className='iconfont icon-sass'/>,
        },
        {
            name:'React',
            icon:<i className='iconfont icon-react'/>,
        },
        {
            name:'Vue',
            icon:<i className='iconfont icon-Vue'/>,
        },
        {
            name:'Node.js',
            icon:<i className='iconfont icon-Nodejs'/>,
        },
        {
            name:'MongoDB',
            icon:<i className='iconfont icon-mongodb1-copy'/>,
        },
        {
            name:'Git',
            icon:<i className='iconfont icon-git'/>,
        },
        {
            name:'Webpack',
            icon:<i className='iconfont icon-webpack'/>,
        },
        {
            name:'Vite',
            icon:<img src={vitelogo} alt='vitelogo' style={{width:'80px',height:'80px'}}/>,
        },
        {
            name:'D3',
            icon:<img src={d3logo} alt='d3logo' style={{width:'80px',height:'80px'}} />,
        },
        {
            name:'Python',
            icon:<i className='iconfont icon-Python'/>,
        },


    ]
    return(
        <div className="skills">
            <h1>掌握技术栈</h1>
            <div className="skills-content">
                {
                    skills&&skills.map((item,index)=>{
                        return(
                            <div className="skills-content-item" key={index}>
                                <div className="skills-content-item-icon">
                                    {item.icon}
                                </div>
                                <div className="skills-content-item-name">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

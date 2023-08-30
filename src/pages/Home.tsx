import { Banner } from '../components/home/Banner';
import { Github } from '../components/home/Github';
import { Skills } from '../components/home/Skills';

export const Home=()=>{
    return(
        <div className="home">
            <Banner></Banner>
            <Skills></Skills>
            <Github></Github>
        </div>
    )
}
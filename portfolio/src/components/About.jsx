import myimg from "../Assets/bgremovedpic.png"
import foodimg from "../Assets/food.png"
import formimg from "../Assets/Form.png"
import movieimg from "../Assets/movie.png"
export default function About(){
   return(
    <>
     <div className="home"> 
    <div className="container d-flex">
      <div className="display-6 fw-bold text-start mt-2 port">Portfolio</div>
        <div className="d-flex navi">
            <div className="nav"><a >About</a></div>
            <div className="nav"><a>Skills</a></div>
            <div className="nav"><a>Contact</a></div>
            <div className="nav"><a>Projects</a></div>
        </div>
    </div>
    <div className="d-flex">
    <div className="container2 text-start about">
        <p className="display-6 fw-bold mb-5">Moumith Prathagar</p>
        <p className="fs-4">Studied in St.Micheal's College</p>
        <p className="fs-4">DiE & DiIT Ongoing</p>
        <p className="fs-4">Front-end Developer</p>
    </div>
    <div className="profile">
        <img src={myimg} alt="pic" className="pic"/>
    </div>
    </div>
    </div>  
    <div className="projects">
    </div>
    </>
   )
}
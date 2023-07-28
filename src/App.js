import './App.css';
import TypewriterComponent from 'typewriter-effect';
import ParticlesBg from 'particles-bg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // for custom bacground
  // let config = {
  //   num: 1,
  //   rps: 0.1,
  //   radius: [5, 40],
  //   life: [1.5, 3],
  //   v: [2, 3],
  //   tha: [-40, 40],
  //   // body: "./logo512.png", // Whether to render pictures
  //   rotate: [0, 20],
  //   alpha: [0.6, 0],
  //   scale: [0.6, 0.1],
  //   position: "all", // all or center or {x:1,y:1,width:100,height:100}
  //   color: "#7d988e",
  //   cross: "dead", // cross or bround
  //   random: null,  // or null,
  //   g: 5,    // gravity
  //   f: [2, -5], // force
  //   onParticleUpdate: (ctx, particle) => {
  //     ctx.beginPath();
  //     ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
  //     ctx.fillStyle = particle.color;
  //     ctx.fill();
  //     ctx.closePath();
  //   }
  // };
  return (
    <div className='App'>
      <div className="Header">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.typeString("Hey there !")
              .pauseFor(5000)
              .deleteAll()
              .typeString("I'm Kunal.")
              .start()
          }}
        />
        <img className='profilePicture' src='./KP.jpg' alt=''></img>
        <ParticlesBg color='#000000' num={30} className="bg" type="cobweb" bg={true}></ParticlesBg>
      </div>
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter.typeString("Info Origin Technologies Pvt. Ltd.")
            .start()
        }}
      />
      <div className='intro'><p>
        I'm currently working as an Associate Software Developer at Info Origin Technologies Pvt. Ltd.
        I have more than 1 year of experience as a Front end developer.
        I have worked in ReactJs, html, CSS, BootStrap.
        Currently I am working in AngularJs, Material UI.
        Also I have developed some basic skills in MySQL and MongoDB.
        Please feel free to reach out at kunalfromgondia@gmail.com.
      </p></div>
      <button className='viewResume'>
        <a className='viewResume' href='./Kunal_Patel_Resume.pdf' download target='_blank'>
          View Resume
        </a>
      </button>
      <div className='icons'>
        <a href="https://www.linkedin.com/in/kunal-patel-852000" className="fontAwesome">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:kunal_patel@infoorigin.com" className="fontAwesome">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/kp08052000" className="fontAwesome">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default App;

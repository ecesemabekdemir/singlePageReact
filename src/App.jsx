import './App.css'

function App() {


  return (
 <div className="container">
  <Header />
  <Hero />
  <Skills />
  <UserCard />
  <Contact />
  <Footer />
 </div>
  )
}

function Header() {
  return(
 <div className="header">
   <img src="/img/logo.svg" alt="logo" />
   <a href="#">Free Consultation</a>
 </div>
  )
}

function Hero() {
return(
  <div className="hero">
  <h3>Design solutions made easy</h3>
     <p>
       With over ten years of experience in various design disciplines, I’m
       your one-stop <br />
       shop for your design needs.
     </p>
</div>
)
}

function Skills() {
return(
  <div className='skills'>
    <div className="graphic-design">
  <img src="/img/grapic-design.svg" alt="grapic-design" />
  <h4>Graphic Design</h4>
</div>
<div className="uı_ux">
  <img src="/img/ux.svg" alt="uıux" />
  <h4>UI/UX</h4>
</div>
<div className="apps">
  <img src="/img/apps.svg" alt="" />
  <h4>Apps</h4>
</div>
<div className="illustrations">
  <img src="/img/illustrations.svg" alt="grapic-design" />
  <h4>Illustrations</h4>
</div>
<div className="photography">
  <img src="/img/Photography.svg" alt="grapic-design" />
  <h4>Photography</h4>
</div>
<div className="motion-graphics">
  <img src="/img/Motion Graphics.svg" alt="grapic-design" />
  <h4>Motion Graphics</h4>
</div>
  </div>

)
}

function UserCard() {
  return(
    <div className="userCard">
          <img src="/img/amy-img.png" alt="" />
        <div class="user-card-text">
          <h3>I’m Amy, and I’d love to work on your next project</h3>
          <p>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <a href="#">Free Consultation</a>
        </div>
    </div>
  )
}


function Contact() {
  return(
    <div className="contact">
         <div className="contact-text">
          <h2>Book a call with me</h2>
          <p>
            I’d love to have a chat to see how I can help you. The best first step
            is for us to discuss your project during a free consultation. Then we
            can move forward from there.
          </p>
        </div>
        <a href="#">Free Consultation</a>
    </div>
  )
}

function Footer() {
  return(
    <div className="footer">
      <img src="/img/logo.svg" alt="logo" />
      <a href="#">Free Consultation</a>
    </div>
  )
}
export default App

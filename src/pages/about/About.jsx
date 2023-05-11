import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="" image={HeaderImage}>

    </Header>
    
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__story-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p className='text1'>
          My name is Tyler murrow, I am 23 currently attending UVU for construction management, and minoring in finance and business. 
          I have always loved working with my hands and being outside. I’ve always loved the idea of owning my own business and offering a service that I can take pride in. 
          I created this business because I wanted to jump into the business world and get real life experience while I am still in school.  With my experience in construction I have learned how important it is to keep your concrete in your garage and driveway clean to help extend the life. 
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
       
          <h1>Our Vision</h1>
          <div className="about__vision-image">
          <img src={VisionImage} alt="Our Vision Image" /></div>
          <p className='text4'>
          Looking to give your home an instant facelift? Look no further than pressure washing your driveway! Over time, dirt, grime, and stains can build up on your driveway, making it look dull and uninviting. But with a professional pressure washing service, you can restore your driveway to its former glory in no time.
          </p>
          <p className='text4'>
          Our team of experienced pressure washers will use high-pressure water and specialized cleaning solutions to remove even the toughest stains and grime from your driveway. Whether you're dealing with oil stains, tire marks, or simply a buildup of dirt and dust, our pressure washing services will get your driveway looking clean and pristine once again.
          </p>
          
        </div>
        
        <div> 
        
        </div>
      
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__mission-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p className='text2'>
          Our team of experienced pressure washers will use high-pressure water and specialized cleaning solutions to remove even the toughest stains and grime from your driveway. Whether you're dealing with oil stains, tire marks, or simply a buildup of dirt and dust, our pressure washing services will get your driveway looking clean and pristine once again.
          </p>
          <p className='text2'>
          But the benefits don't stop there. Pressure washing your driveway can also help improve the safety of your home. Over time, dirt and grime can make your driveway slippery and dangerous to walk or drive on. By removing these hazards, you'll be able to enjoy a safer, more secure home environment.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../Card'
import {services} from '../../data'
import './services.css'

const Services = () => {
  return (
    <>
    <Header title="Services" image={HeaderImage}>
    <h2 className="CustSer">Customize your services</h2>
    </Header>
    <section className="services">
      <div className="container services__container">
        {
          services.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Service</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Services
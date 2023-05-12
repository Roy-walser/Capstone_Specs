import {SiOpenaigym} from 'react-icons/si'
import serpay from './images/serpay.png'
import garpay from './images/garpay.png'
import fropay from './images/fropat.png'
import bacpay from './images/bacpay.png'
import garcan from './images/garcan.png'
import winfen from './images/winfen.png'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Services",
        path: '/services'
    }, 
    {
        name: "Contact",
        path: '/contact'
    }
]

export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Cleaning your exteriors regularly cuts down on the dirt, dust, and allergens that are present both inside and outside your home."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Thorough cleaning of these surfaces removes grime and dirt that, over time, may erode and compromise the integrity of your surfaces."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Driveway cleaning will erase unsightly stains or substances, making the entire surface look fresh. A clean driveway looks fantastic and can help keep your property value high."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Maintaining a beautiful driveway, patio, or fences will ensure your home keeps a handsome appearance, and you don’t lose money dealing with repair costs and other subsequent damages."
    }
]

export const faqs = [
    {
        id: 1,
        question: "Why should I pressure wash my concrete?",
        answer: "Concrete is basically a sponge that soaks up the salts, oils, and other gunk from the street, and over time this can actually weaken and damage your concrete. "
    },
    {
        id: 2,
        question: "Why should I clean my trash cans?",
        answer: "Washing your trash cans can have two big benefits. One, it will help with the smell. Trash cans start to smell extremely quickly. And secondly it will help prevent rodents and insects, from getting into it and entering the home."
    },
    {
        id: 3,
        question: "How will pressure washing my driveway help with my curb appeal?",
        answer: "Washing will greatly improve the way your homes looks on the exterior, washing it and removing as much gunk as we can will bring back that light color of the concrete."
    },
    {
        id: 4,
        question: "Will pressure washing remove all the stains?",
        answer: "Unfortunately we are not able to remove every stain. Concrete is a sponge and if not treated rather quickly then it is extremely hard to remove. Washing will remove the actual chemicals that harm the concrete."
    },
    {
        id: 5,
        question: "How often should I wash my concrete?",
        answer: "The best answer would be to do it every week, but we recommend doing it once before the winter and before summer."
    }
]


export const services = [
    {
        id: 1,
        name: 'Car Capacity',
        desc: <h2 className='CarCap'>Parking spots outside of Garage</h2>,
        features: [
            {feature: '2 Car - $215', available: true},
            {feature: '4 Car - $145', available: true},
            {feature: '5+ Car - $300', available: true},
            {feature: <img src={serpay} alt="serpay" />}   
        ]
    },
    {
        id: 2,
        name: 'Garage Capacity',
        desc: <h2 className='GarCap'>Parking spot inside of Garage</h2>,
        price: 49.99,
        features: [
            {feature: '2 Car - $70', available: true},
            {feature: '3 Car - $80', available: true},
            {feature: '4+ - $200', available: true},
            {feature: <img src={garpay} alt="garpay" />}
        ]
    },
    {
        id: 3,
        name: 'Front Patio',
        desc: <h2 className='FroPat'>Based off Sq ft.</h2>,
        features: [
            {feature: 'Small - $80', available: true},
            {feature: 'Medium - $120', available: true},
            {feature: 'Large - $160', available: true},
            {feature: 'Elite - $250', available: true},
            {feature: <img src={fropay} alt="fropay" />}
        ]
    },
    {
        id: 4,
        name: 'Back Patio',
        desc: <h2 className='BacPat'>Based off Sq ft.</h2>,
        features: [
            {feature: 'Small - $80', available: true},
            {feature: 'Medium - $120', available: true},
            {feature: 'Large - $160', available: true},
            {feature: 'Elite - $250', available: true},
            {feature: <img src={bacpay} alt="bacpay" />}
        ]
    },
    {
        id: 5,
        name: 'Garbage Cans',
        desc: <h2 className='Cans'>Per Trash Can</h2>,
        features: [
            {feature: '1 Can - $15', available: true},
            {feature: '2 Cans - $35', available: true},
            {feature: '3 Cans - $40', available: true},
            {feature: '4+ Cans - $70', available: true},
            {feature: <img src={garcan} alt="garcan" />}
        ]
    },
    {
        id: 5,
        name: 'Window Wells / Fence',
        desc: <h2 className='Extras'>Per Window Well</h2>,
        features: [
            {feature: '1 - $15', available: true},
            {feature: '6ft / Fence  - $35', available: true},
            {feature: <img src={winfen} alt="winfen" />}
        ]
    },
]

import banner1 from '../assets/banners/banner1.png'
import banner2 from '../assets/banners/banner2.png'
import banner3 from '../assets/banners/banner3.png'
import banner4 from '../assets/banners/banner4.png'
import banner5 from '../assets/banners/banner5.png'

import api from '../assets/svg/api.svg'
import backend from '../assets/svg/backend.svg'
import frontend from '../assets/svg/frontend.svg'
import webapp from '../assets/svg/webapp.svg'

import css from '../assets/images/css.png'
import figma from '../assets/images/figma.png'
import flask from '../assets/images/flask.png'
import html from '../assets/images/html.png'
import nextjs from '../assets/images/nextjs.png'
import postgresql from '../assets/images/postgresql.png'
import python from '../assets/images/python.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind-css.png'
import typescript from '../assets/images/typescript.png'
import aws from '../assets/images/aws.png'
import stripe from '../assets/images/stripe.png'
import vercel from '../assets/images/vercel.svg'
import github from '../assets/images/github.png'


const banners = [
    {
        url: 'https://wellfood-react.vercel.app/',
        image: banner1
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner2
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner3
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner4
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner5
    }
]

const porfolio = [
    {
        url: 'https://wellfood-react.vercel.app/',
        image: banner1,
        title: 'Food Delivery Web App',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner2,
        title: 'Ecommerce web App',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner3,
        title: 'Corporate Site',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner4,
        title: 'Hotel Web App',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, {
        url: 'https://wellfood-react.vercel.app/',
        image: banner5,
        title: 'Online Payment Gateway',
        description: 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    }
]

const myservices = [
    {
        title: 'Web Application Development',
        icon: webapp,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        title: 'Front-End Developer',
        icon: frontend,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, 
    {
        title: 'API Development',
        icon: api,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, 
    {
        title: 'Back-End Developer',
        icon: backend,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }
]

const skills = [
    // Backend
    {
        title: 'Python',
        icon: python
    },
    {
        title: 'Flask',
        icon: flask
    },
    {
        title: 'PostgreSQL',
        icon: postgresql
    },

    // Server & Cloud
    {
        title: 'AWS',
        icon: aws
    },
    {
        title: 'Vercel',
        icon: vercel
    },

    // Frontend
    {
        title: 'Typescript',
        icon: typescript
    },
    {
        title: 'React',
        icon: react
    },
    {
        title: 'Next.js',
        icon: nextjs
    },
    {
        title: 'HTML',
        icon: html
    },
    {
        title: 'CSS',
        icon: css
    },
    {
        title: 'Tailwind CSS',
        icon: tailwind
    },

    // Tools & Misc
    {
        title: 'Stripe',
        icon: stripe
    },
    {
        title: 'GitHub',
        icon: github
    },
    {
        title: 'Figma',
        icon: figma
    }
];

export {banners, myservices, porfolio, skills}
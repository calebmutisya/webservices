import banner1 from '../assets/banners/banner1.png'
import banner2 from '../assets/banners/banner2.png'
import banner3 from '../assets/banners/banner3.png'
import banner4 from '../assets/banners/banner4.png'
import banner5 from '../assets/banners/banner5.png'

import api from '../assets/svg/api.svg'
import backend from '../assets/svg/backend.svg'
import frontend from '../assets/svg/frontend.svg'
import webapp from '../assets/svg/webapp.svg'


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

export {banners, myservices}
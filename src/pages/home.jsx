import React from 'react'
import Header from '../components/header';
import SearchBar from '../components/search';
import Carousel from 'react-multi-carousel';
import Card from '../components/card';
import 'react-multi-carousel/lib/styles.css';

const test = () => {
    
    const SliderData = [
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiZgvSt0O44Wu3TG4J_FRujYB-FHzaAQlhw&usqp=CAU',
            title : 'Pharmacy 1'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qMZsP2pePHEuGOSnA4FoWkvGVh5FOHvFUTMtpI895CPvRRulj68WNuCc4AxKSmtPzrs&usqp=CAU',
            title : 'Pharmacy 2'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Qqo9-JJZ05uPrg6hmWw6neOtruatpRdhBQ&usqp=CAU',
            title : 'Pharmacy 3'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWghU3g8myN7hbL_WvXKxJCJoyyVlFONW4Q&usqp=CAU',
            title : 'Pharmacy 4'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiZgvSt0O44Wu3TG4J_FRujYB-FHzaAQlhw&usqp=CAU',
            title : 'Pharmacy 5'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qMZsP2pePHEuGOSnA4FoWkvGVh5FOHvFUTMtpI895CPvRRulj68WNuCc4AxKSmtPzrs&usqp=CAU',
            title : 'Pharmacy 6'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Qqo9-JJZ05uPrg6hmWw6neOtruatpRdhBQ&usqp=CAU',
            title : 'Pharmacy 7'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWghU3g8myN7hbL_WvXKxJCJoyyVlFONW4Q&usqp=CAU',
            title : 'Pharmacy 8'
        }
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
      };
        
    return (
        <div className="bg-[#f0eff1]">
            <Header />
            <SearchBar />
            <div>
                <h2 className="font-semibold text-xl px-5 mt-3 py-5">Top Pharmacies</h2>
                <Carousel responsive={responsive}>
                    {SliderData.map((slide) => (
                        <Card img={slide.img} title={slide.title}/>
                    ))}
                </Carousel>
            </div>
            <div className="mt-5">
                <h2 className="font-semibold text-xl px-5 mt-3 py-5">Top Doctors</h2>
                <Carousel responsive={responsive}>
                    {SliderData.map((slide) => (
                        <Card img={slide.img} title={slide.title}/>
                    ))}
                </Carousel>
            </div>
            
        </div>
    )
}

export default test;

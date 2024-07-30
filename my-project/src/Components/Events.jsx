// src/components/EventCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    title: 'Event 1',
    date: 'July 20, 2024',
    description: 'Description for Event 1',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'July 21, 2024',
    description: 'Description for Event 2',
    image: 'https://via.placeholder.com/300x200'
  },
  // Add more events here
];

const EventCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-10 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      <Slider {...settings}>
        {events.map(event => (
          <div key={event.id} className="px-2">
            <EventCard event={event} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCarousel;

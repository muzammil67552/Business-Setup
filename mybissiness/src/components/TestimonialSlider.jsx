
import Slider from "react-slick";

// Array of random image URLs
const images = [
  "/testimonial 2.jpg",
  "/testimonial 1.jpeg",
  "/testimonial 3.jpg",
  "/testimonial 4.jpeg",
  "/testi 5.webp",
];

// Testimonials array
const testimonials = [
  {
    name: "John Doe",
    date: "August 12, 2024",
    description: "Amazing service, highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    date: "July 23, 2024",
    description: "I was very satisfied with the quality.",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    date: "June 10, 2024",
    description: "Quick and efficient, will return again!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    date: "September 5, 2024",
    description: "Great experience, highly recommended!",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4, // Show 4 slides on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 rounded  space-x-4 ">
      <h2 className="md:text-5xl text-3xl font-semi-bold text-center mb-20 mt-16">Client Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-2xl p-6 rounded-lg text-center border gap-6  ">
            {/* Random Image */}
            <img
              src={images[Math.floor(Math.random() * images.length)]}
              alt={`testimonial-${index}`}
              className="w-20 h-20 mx-auto mb-4 rounded-full object-cover space-x-2 "
            />
            <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
            <p className="text-md text-gray-700 italic mb-4">{testimonial.description}</p>
            <div className="flex justify-center mb-4 ">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

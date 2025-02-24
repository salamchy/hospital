import TestimonialImg from "../assets/testinomial.png";

const Testimonial = () => {
  return (
    <div className="relative w-full h-[350px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={TestimonialImg}
        alt="Testimonial Background"
        className="absolute inset-0 w-full h-full opacity-35 object-cover"
      />

      {/* Content */}
      <div className="relative text-center text-white px-6 md:px-16">
        <div className="text-3xl md:text-4xl font-bold mb-4">❝</div>
        <p className="text-lg text-primary md:text-xl max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
          Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur. Consequat faucibus porttitor enim et.
        </p>
        <div className="w-20 h-0.5 bg-white mx-auto my-4"></div>
        <p className="font-semibold text-secondary text-lg">John Doe</p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

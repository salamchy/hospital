import DoctorImg from "../assets/Rectangle.png";

const HospitalSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-5 md:px-16 lg:px-28">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-1">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={DoctorImg}
            alt="Doctors"
            className="w-[408px] h-[509px] rounded shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-secondary uppercase font-semibold text-base">
            Welcome to Hospital Name
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-yeseva leading-snug mt-2">
            Best Care for Your Good Health
          </h2>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-800">
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              A Passion for Healing
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              5-Star Care
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              All our best
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              Believe in Us
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              Always Caring
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              A Legacy of Excellence
            </div>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-700 text-base leading-relaxed mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare. Convallis felis vitae tortor
            augue. Velit nascetur proin massa in. Consequat faucibus porttitor
            enim et.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalSection;
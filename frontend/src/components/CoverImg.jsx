import Bg from "../assets/line.png"
import Frame from "../assets/Frame.png"

const CoverImg = ({ imageSrc, h4Text, h1Text }) => {
  return (
    <>
      <div className="w-full md:mt-32 relative">
        <img
          src={imageSrc}
          alt="Description of the image"
          className="w-full opacity-40 h-[275px] object-top object-cover"
        />
        <img src={Frame} className="absolute top-0 w-full" alt="" />
        <div className="absolute top-30 left-32 md:left-48 z-10">
          <h4 className="uppercase text-base font-work text-primary">{h4Text}</h4>
          <h1 className="text-xl font-yeseva sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight mt-2">{h1Text}</h1>
        </div>
      </div>
      <img className="w-full inset-0" src={Bg} alt="Background Line" />
    </>
  );
};

export default CoverImg;
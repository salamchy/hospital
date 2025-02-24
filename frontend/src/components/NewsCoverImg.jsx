import DoctorImg from "../assets/Rectangle4.png"
import CoverImg from "./CoverImg"
import MapLocation from "./MapLocation"

const NewsCoverImg = () => {
  return (
    <div>
      <CoverImg imageSrc={DoctorImg} h4Text="Home / News" h1Text="News" />
      <MapLocation />
    </div>
  )
}
export default NewsCoverImg
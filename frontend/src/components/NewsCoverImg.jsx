import DoctorImg from "../assets/Rectangle4.png"
import CoverImg from "./CoverImg"

const NewsCoverImg = () => {
  return (
    <div>
      <CoverImg imageSrc={DoctorImg} h4Text="Home / News" h1Text="News" />
    </div>
  )
}
export default NewsCoverImg
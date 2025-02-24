import CoverImg from "./CoverImg";
import Doctors from "../assets/Blackdoctors.jpg";

const DoctorCoverImg = () => {
  return (
    <div>
      <CoverImg imageSrc={Doctors} h4Text="Home / Doctors" h1Text="Doctors" />
    </div>
  )
}
export default DoctorCoverImg
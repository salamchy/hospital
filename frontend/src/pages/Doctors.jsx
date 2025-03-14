import Contact from "../components/Contact"
import DoctorsCard from "../components/DoctorCards"
import DoctorCoverImg from "../components/DoctorCoverImg"
import Testimonial from "../components/Testinomial"

const Doctors = () => {
  return (
    <div>
      <DoctorCoverImg />
      <DoctorsCard />
      <Testimonial />
      <Contact />
    </div>
  )
}
export default Doctors
const Title = ({ title, subtitle }) => {
  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-secondary font-work font-bold uppercase text-[18px] sm:text-base md:text-lg lg:text-xl">{title}</p>
        <h1 className="text-xl font-yeseva sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight mt-2">{subtitle}</h1>
      </div>
    </div>
  )
}
export default Title
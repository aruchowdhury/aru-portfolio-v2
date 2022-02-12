export default function SectionTitle({ text1, text2, text3 }) {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-4xl text-teal-500 font-semibold capitalize transition duration-75">
        {text1}
      </h2>
      <h4 className="text-2xl text-teal-500  md:text-7xl mt-3 pb-5 font-bold  bg-clip-text bg-gradient ">
        {text2}
      </h4>
      <h3 className="bg-text text-teal-500 left-10 2xl:left-40  top-20 text-gray-100 text-8xl transition duration-75">
        {text3}
      </h3>
    </div>
  );
}

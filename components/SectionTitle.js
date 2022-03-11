export default function SectionTitle({ text1, text2, text3 }) {
  return (
    <div className="text-left mt-10">
      <h2 className="text-2xl  text-gray-200  md:text-4xl mt-3">{text1}</h2>
      <h4 className=" py-5 text-2xl text-gray-200 font-semibold capitalize transition duration-75">
        {text2}
      </h4>
      <h3 className="bg-text left-10 2xl:left-40  top-20 text-gray-200 text-8xl transition duration-75">
        {text3}
      </h3>
    </div>
  );
}

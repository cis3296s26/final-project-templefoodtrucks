export default function MainPageTitle({ title, description }) {
  return (
    <>
      <h1 className="text-5xl mt-5 font-serif font-bold">{title}</h1>
      <p className="text-left ml-15 mt-15">
        <i>{description}</i>
      </p>
      <hr className="w-full  border-gray-300 border-2 mt-5 mb-10" />
    </>
  );
}

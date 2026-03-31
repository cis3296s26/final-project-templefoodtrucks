export function PageMain({children}) {
  return (
    <>
    <div className="pt-18 relative flex min-h-screen flex-col items-center h-max pb-12 justify-center bg-linear-to-br from-gray-400 via-60%-600 to-blue-300 px-4" >
      {children}
    </div>
    </>
  );
}
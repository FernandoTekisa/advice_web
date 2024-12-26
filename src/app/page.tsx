
export default function Home() {
  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col bg-slate-200 shadow-lg shadow-gray-300 py-3 px-4 mx-10 rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold">ADVICE</h1>
        </div>
        <div className="flex mt-9 items-center justify-center">
          <h2 className="text-lg font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        </div>
        <div className="flex items-center justify-center mt-7">
          <button className="bg-blue-500 py-2 px-5 rounded">
            <span className="text-base font-normal text-slate-100">Seguinte→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

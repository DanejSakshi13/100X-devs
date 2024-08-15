export default function Appbar() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        <span className="text-2xl font-semibold">Paytm</span>

        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row md:space-x-5 font-medium">
            <div className="pt-2">Hello</div>

            <div className="rounded-full h-10 w-10 bg-slate-200 flex items-center justify-center">
              <span className="text-xl">U</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

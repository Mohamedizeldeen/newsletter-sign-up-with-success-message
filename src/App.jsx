import hero from "./assets/illustration-sign-up-mobile.svg";
export default function App() {
  const itemMassage = [
    { id: 1, message: "Product discovery and building what matters" },
    { id: 2, message: "Measuring to ensure updates are a success" },
    { id: 3, message: "Add much more" },
  ];
  return (
    <main className="flex flex-col items-center justify-start w-screen h-screen">
      <div className="w-[100%]">
        <img src={hero} alt="hero-img" className="w-[100%]" />
      </div>
      <div>
        <div className="header flex flex-col items-start justify-start p-4">
          <h1 className="text-[2rem] font-bold">Stay updated</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div className="mid flex flex-col">
          {itemMassage.map((item) => {
            <div key={item.id} className="flex items-start justify-center">
              <p>{item.id}</p>
              <p>{item.message}</p>
            </div>;
          })}
        </div>
        <div className="gap-[0.4rem] flex flex-col items-start justify-center w-[100%]">
          <label>Email address</label>
          <input
            type="email"
            placeholder="email@company.com"
            className="w-full h-[50px] px-7 border-slate-300 border-2 border-solid rounded-lg mb-4"
          />
          <button className="w-full rounded-lg text-slate-100 bg-slate-800 px-3 py-6">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </main>
  );
}

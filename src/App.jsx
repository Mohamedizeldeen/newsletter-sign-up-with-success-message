import hero from "./assets/illustration-sign-up-mobile.svg";

export default function App() {
  const itemMassage = [
    { id: 1, message: "Product discovery and building what matters" },
    { id: 2, message: "Measuring to ensure updates are a success" },
    { id: 3, message: "Add much more" },
  ];

  return (
    <main className="flex flex-col items-center justify-start  h-screen ">
      <div className="flex items-center justify-center w-[100%] h-[40%]">
        <img
          src={hero}
          alt="hero-img"
          className="w-full object-cover h-full rounded-b-3xl "
        />
      </div>
      <div className="flex flex-col items-center justify-start  w-full px-[40px]">
        <div className="header flex flex-col items-start justify-start p-4">
          <h1 className=" text-gray-700 text-[3rem] font-bold mb-5">
            Stay updated!
          </h1>
          <p className=" text-gray-700 mb-5 font-medium text-lg w-[22rem]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>
        <div className="mid flex flex-col mb-4">
          {itemMassage.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-start mb-3 gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FF5F58"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className=" text-gray-700 font-normal text-lg">
                {item.message}
              </p>
            </div>
          ))}
        </div>
        <div className="gap-[0.4rem] flex flex-col items-start justify-center w-[100%]">
          <label className="font-bold">Email address</label>
          <input
            type="email"
            placeholder="email@company.com"
            className="w-full h-[50px] px-7 py-8 text-[1.2rem] border-slate-300 border-2 border-solid rounded-lg mb-4"
          />
          <button className="w-full rounded-lg text-slate-100 bg-slate-800 px-3 py-5 text-xl font-bold">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </main>
  );
}

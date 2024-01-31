import hero from "./assets/illustration-sign-up-mobile.svg";
export default function hi() {
  return (
    <main className="flex flex-col items-start w-screen">
      <div className="w-screen">
        <img src={hero} alt="hero-img" className="w-full h-[300px]" />
      </div>
      <div>
        <div className="header">
          <h1></h1>
          <p></p>
        </div>
      </div>
    </main>
  );
}

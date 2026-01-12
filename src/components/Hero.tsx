type Props = {};

function Hero({}: Props) {
  return (
    <section className="pt-32 pb-20 px-6 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
          Your Bridge to Finnacial Freedom
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-6 mb-8 leading-tight">
          Getting a Loan <br></br>
          <span className="text-blue-600">Shouldn't Be Hard.</span>
        </h1>
        <p className="text-xl text-slate-600- max-w-2xl mx-auto mb-10">
          We negotiate with banks for you. Our experts analyze your profile to
          ensure the highest approval rates and the best interest rates in the
          market.
        </p>
        <div className="flex flex-col sm-flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Check Eligibilty
          </button>
          <button className="border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            How it Works
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

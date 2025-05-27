export default function AboutLeft(){
    return(
    <div className="h-full w-full col-span-2 row-span-2 flex flex-col items-center justify-start border-r-2 border-stone-400 p-4">
  <img
    className="rounded-full h-[250px] w-[250px] object-cover"
    src="/example.jpeg"
    alt="Magdalena Buczek"
  />

  <h1 className="mt-6 font-ubuntu text-cyan-600 text-2xl text-center">
    Magdalena Buczek
  </h1>

  <h2 className="mt-2 font-ubuntu text-cyan-600 text-xl text-center">
    Nauczyciel WF
  </h2>
</div>

    )
    
}
export default function CoolText({ children }) {
  return (
    <div className='relative text-center'>
      <h1 className='mt-20 animate-anime bg-custom-gradient bg-[size:600%] bg-clip-text text-5xl font-extrabold text-transparent'>
        {children}
      </h1>
      <h1 className='absolute left-0 top-0 mt-20 animate-anime bg-[linear-gradient(-45deg,_#FFA63D,_#FF3D77,_#338AFF,_#3CF0C5)] bg-[size:600%] bg-clip-text text-5xl font-extrabold text-transparent blur-lg'>
        {children}
      </h1>
    </div>
  );
}

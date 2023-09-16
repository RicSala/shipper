export default function CoolText({ children }) {
    return (
        <div className="relative text-center">
            <h1 className="mt-20 text-5xl font-extrabold text-transparent bg-clip-text bg-custom-gradient animate-anime bg-[size:600%]">
                {children}
            </h1>
            <h1 className="blur-lg absolute top-0 left-0 mt-20 text-5xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(-45deg,_#FFA63D,_#FF3D77,_#338AFF,_#3CF0C5)] animate-anime bg-[size:600%]">
                {children}
            </h1>
        </div>
    );
}
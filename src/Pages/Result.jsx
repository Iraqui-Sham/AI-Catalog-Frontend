import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  if (!image) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
        <h2 className="text-2xl font-bold mb-4">No Image Found</h2>
        <button
          onClick={() => navigate("/upload")}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          Go to Upload
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-pink-50 flex items-center justify-center px-4">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Your AI Image is Ready 🎉
        </h1>
        <p className="text-slate-500 mb-8">
          Download or generate another variation
        </p>

        {/* Image Preview */}
        <div className="relative group">
          <img
            src={image}
            alt="result"
            className="mx-auto max-h-[400px] object-contain rounded-2xl shadow-lg"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

          {/* Download */}
          <a href={image} download="ai-image.jpg" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-orange-200">
              ⬇ Download Image
            </button>
          </a>

          {/* Upload Again */}
          <button
            onClick={() => navigate("/upload")}
            className="w-full md:w-auto border border-orange-200 text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all"
          >
            🔁 Generate Again
          </button>

        </div>

      </div>
    </div>
  );
}
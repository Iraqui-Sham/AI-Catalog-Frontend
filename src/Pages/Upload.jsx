import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFile = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await API.post("/generate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/result", { state: { image: res.data.image } });

    } catch (err) {
      alert(err.response?.data || "Error generating image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-black text-center mb-3">
          Upload Your Product
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Turn your raw image into AI-generated studio shots ✨
        </p>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-orange-400 transition">

          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="mx-auto h-64 object-contain rounded-xl"
            />
          ) : (
            <div className="py-10">
              <p className="text-slate-400 mb-2">Click to upload image</p>
              <p className="text-xs text-slate-300">PNG, JPG supported</p>
            </div>
          )}

          <input
            type="file"
            onChange={handleFile}
            className="mt-4"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-orange-200"
        >
          {loading ? "Generating..." : "Generate AI Image"}
        </button>

        {/* Loader */}
        {loading && (
          <p className="text-center mt-4 text-slate-500 animate-pulse">
            ⏳ AI is generating your image...
          </p>
        )}

      </div>
    </div>
  );
}
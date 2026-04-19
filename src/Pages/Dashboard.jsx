import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] p-6">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard 🚀
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Start Generating
        </h2>

        <button
          onClick={()=>navigate("/upload")}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
        >
          Upload Image
        </button>

      </div>

      <button
        onClick={()=>{
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="mt-6 text-red-500"
      >
        Logout
      </button>

    </div>
  );
}
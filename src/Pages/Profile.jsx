import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const navigate = useNavigate();

  return (
    <MainLayout>

      <h2 className="text-xl font-bold mb-4">Profile</h2>

      <div className="bg-white p-6 rounded-xl shadow">

        <p>Name: Shamsher</p>
        <p>Email: example@gmail.com</p>

        <button
          onClick={()=>{
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="mt-4 text-red-500"
        >
          Logout
        </button>

      </div>

    </MainLayout>
  );
}
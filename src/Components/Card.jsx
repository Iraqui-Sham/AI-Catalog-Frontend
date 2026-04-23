export default function Card({ title, desc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-xl shadow hover:shadow-xl hover:scale-105 transition cursor-pointer"
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-500">{desc}</p>

      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
        Create
      </button>
    </div>
  );
}
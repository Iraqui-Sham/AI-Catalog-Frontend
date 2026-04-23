export default function ImageCard({ img }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
      <img src={img} className="w-full h-40 object-cover" />

      <div className="p-3 flex justify-between">
        <button className="text-sm text-blue-500">Download</button>
        <button className="text-sm text-orange-500">Edit</button>
      </div>
    </div>
  );
}
// ✅ Import local images at the very top
import drillImg from "./assets/drill.png";
import sawImg from "./assets/saw.png";
import grinderImg from "./assets/grinder.png";
console.log("Drill Image Path:", drillImg);

export default function App() {
  // ✅ Use imported images here
  const tools = [
    {
      id: 1,
      name: "Cordless Drill",
      description: "High-performance drill with 2 batteries.",
      image: drillImg,
    },
    {
      id: 2,
      name: "Circular Saw",
      description: "Powerful saw for cutting wood and metal.",
      image: sawImg,
    },
    {
      id: 3,
      name: "Angle Grinder",
      description: "Perfect for grinding, cutting, and polishing.",
      image: grinderImg,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Power Tools Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {/* ✅ Updated img with safe styling */}
            <img
              src={tool.image}
              alt={tool.name}
              className="h-40 w-full object-contain mb-4 border bg-gray-100"
            />
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-gray-600 mb-2">{tool.description}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

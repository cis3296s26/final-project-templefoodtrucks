export default function StoreStatus({ isOpen }) {
  if (isOpen) {
    return (
      <div>
        <div className="text-black font-mono bg-green-400 w-35 h-10">
          <p className="pt-1">Open</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="text-black font-mono bg-red-500 w-35 h-10">
          <p className="pt-1">Closed</p>
        </div>
      </div>
    );
  }
}

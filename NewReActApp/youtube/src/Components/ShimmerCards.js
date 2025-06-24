const ShimmerCards = () => {
  return (
    <div className="relative overflow-hidden w-80 p-2 shimmer-bg">
      <div className="bg-gray-400 w-82 h-44 mx-2 rounded-xl mb-2"></div>
      <div className="bg-gray-500 h-4 w-64 mx-2 my-2 rounded-full"></div>
      <div className="bg-gray-500 h-4 w-32 mx-2 rounded-full"></div>
    </div>
  );
};

export default ShimmerCards;

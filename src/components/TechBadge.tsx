const TechBadge = ({ tech }: { tech: string }) => {
  return (
    <span
      className="text-xs px-3 py-1.5 bg-gray-700 text-white rounded-full border border-gray-600 hover:border-blue-400 hover:bg-gray-600 transition-all duration-300"
    >
      {tech}
    </span>
  );
};

export default TechBadge;
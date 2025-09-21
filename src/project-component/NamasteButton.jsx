function NamasteButton({ url }) {
  if (!url) return null;
  return (
    <a href={url} target="_blank" className="namaste-btn">
      Want to build this yourself? Solve it on NamasteDev 🚀
    </a>
  );
}

export default NamasteButton;

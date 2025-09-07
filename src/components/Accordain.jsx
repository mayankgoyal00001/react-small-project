import "../style7.css";

const Accordain = ({ title, content, isActive, onToggle }) => {
  return (
    <div className="accordion-card">
      <div
        className="header"
        onClick={onToggle}
        role="button"
        aria-expanded={isActive}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      >
        <span>{title}</span>
        <span className="icon">{isActive ? "−" : "+"}</span>
      </div>

      <div className={`content ${isActive ? "show" : ""}`}>
        <p className="card-info">{content}</p>
      </div>
    </div>
  );
};

export default Accordain;

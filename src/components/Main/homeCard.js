export const HomeCard = ({ data }) => {
  const { headline, subtitle, image } = data;
  const styles = {
    
    background: `linear-gradient(90deg, rgb(12, 88, 88), rgba(31, 138, 138, 0.7)), url("${image}")`,
  };

  return (
    <div className="headline-container" style={styles}>
      <h1 className="headline">{headline}</h1>
      <h3 className="sub-headline">{subtitle}</h3>
    </div>
  );
};

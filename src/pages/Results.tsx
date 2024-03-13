import BarbecueResults from "../components/BarbecueResults";

import bgImageResult from "../assets/bg-2.jpg"

const Results = () => {
  return (
    <div style={{backgroundImage: `url(${bgImageResult})`}} className="page-container">
      <h1>Resultado</h1>
      <BarbecueResults />
    </div>
  );
};

export default Results;

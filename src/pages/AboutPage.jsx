import { Navigate } from "react-router-dom";

function AboutPage() {
  return (
    <Navigate
      to="/hakkinda/biz-kimiz"
      replace
    />
  );
}

export default AboutPage;
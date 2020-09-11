import React from "react"
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div className="top-container center-align">
      <h4 className="top-header">クイズを解いて<br />圧倒的成長</h4>
      <div>
        <h2>topだよ！</h2>
        <Link to="/quiz">quizをやる</Link>
      </div>
    </div>
  );
};

export default Top;

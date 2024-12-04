import React from "react";
import "./Dashboard.css";
import { metrics } from "../../Data/test-data.json";
import { topics } from "../../Data/test-data.json";
import { user_leaderboard } from "../../Data/test-data.json";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { activity } from "../../Data/test-data.json";
import {groups_leaderboard} from "../../Data/test-data.json";

function Dashboard() {
  const averageSessionLength = `${Math.floor(
    metrics.average_session_length_seconds / 60
  )}m ${metrics.average_session_length_seconds % 60}s`;
  const knowledgeGain = `${
    metrics.current_knowledge_percentage - metrics.starting_knowledge_percentage
  }%`;

  return (
    <div className="Main">
      <div>
        <h1>Reports</h1>
      </div>
      <div className="Report">
        <select id="timeframe" name="timeframe">
          <option value="all-time">Timeframe: All-time</option>
          <option value="last-year">Last Year</option>
          <option value="last-month">Last Month</option>
          <option value="last-week">Last Week</option>
          <option value="today">Today</option>
        </select>
        <select id="timeframe" name="timeframe">
          <option value="all-time">People: All</option>
          <option value="last-year">Last Year</option>
          <option value="last-month">Last Month</option>
          <option value="last-week">Last Week</option>
          <option value="today">Today</option>
        </select>
        <select id="timeframe" name="timeframe">
          <option value="all-time">Topic: All</option>
          <option value="last-year">Last Year</option>
          <option value="last-month">Last Month</option>
          <option value="last-week">Last Week</option>
          <option value="today">Today</option>
        </select>
      </div>
      <div  className="mail" >
        <div className="main2" >
          <div className="metrics">
            <div className="metrics-container">
              <p className="metrics-title">Active Users</p>
              <p className="metrics-numbers">
                <span className="number">{metrics.active_users.current}</span> /{" "}
                <span>{metrics.active_users.total}</span>
              </p>
            </div>

            <div className="metrics-container">
              <p className="metrics-title">Questions Answered</p>
              <p className="metrics-numbers">
                <span className="number">
                  {metrics.questions_answered.toLocaleString()}
                </span>
              </p>
            </div>

            <div className="metrics-container">
              <p className="metrics-title">Av. Session Length</p>
              <p className="metrics-numbers">
                <span className="number">{averageSessionLength}</span>
              </p>
            </div>

            <div className="metrics-container">
              <p className="metrics-title">Starting Knowledge</p>
              <p className="metrics-numbers">
                <span className="number">
                  {metrics.starting_knowledge_percentage}%
                </span>
              </p>
            </div>

            <div className="metrics-container">
              <p className="metrics-title">Current Knowledge</p>
              <p className="metrics-numbers">
                <span className="number">
                  {metrics.current_knowledge_percentage}%
                </span>
              </p>
            </div>

            <div className="metrics-container">
              <p className="metrics-title">Knowledge Gain</p>
              <p className="metrics-numbers">
                <span className="number">+{knowledgeGain}</span>
              </p>
            </div>
          </div>
          <div className="Weakest_Topics">
            <p className="weakest-title">Weakest Topics</p>
            {topics.weakest.map((topic, index) => (
              <div className="topic-container" key={index}>
                <img
                  src={topic.image}
                  alt={`${topic.name} Icon`}
                  className="topic-icon"
                  style={{ width: "50px", borderRadius: "5px" }}
                />
                <div className="weakest-inner">
                  <div>
                    <p className="topic-name">{topic.name}</p>
                  </div>
                  <div className="weakest-bar">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${topic.correct_percentage}%` }}
                      ></div>
                    </div>
                    <p className="topic-percentage">
                      {topic.correct_percentage}%
                    </p>
                    <span className="correct-text">Correct</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div  className="User_Leaderboard">
            <p className="weakest-title">User Leaderboard</p>
            {user_leaderboard.map((user, index) => (
              <div className="leaderboard-item" key={index}>
                <div className="leaderboard-info">
                  <img
                    className="Profile-img"
                    src={user.image}
                    alt={`${user.name}'s profile`}
                  />
                  <div className="leaderboard-data">
                    <div>
                      <p className="Profile-username">{user.name}</p>
                      <p className="Profile-Points">
                        {user.points} Points - {user.accuracy_percentage}%
                        Correct
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      <h5>{index + 1}</h5>
                      {index === 1 ? (
                        <VscTriangleDown
                          style={{ color: "rgba(255, 62, 19, 1)" }}
                        />
                      ) : (
                        <VscTriangleUp
                          style={{ color: "rgba(31, 224, 143, 1)" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div  className="main3" >
          <div className="chartDiv" >
          <div className="Weakest_Topics1">
            {/* <p className="weakest-title">Weakest Topics</p> */}
            {activity.monthly.map((topic, index) => (
              <div className="topic-container"  style={{marginBottom: "16px"}} key={index}>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar" 
                    style={{ width: `${(topic.value / 1000) * 100}%` , background:"linear-gradient(356.64deg, rgba(27, 89, 248, 0.8) 48.49%, rgba(27, 89, 248, 0) 282.14%)" }} // Scale to percentage
                  ></div>
                </div>
              </div>
            ))}
           
          </div>
          <div style={{display:"flex" ,width: "52%" ,margin: "-60px auto"}}>
          {activity.monthly.map((topic, index) => (
              <div  key={index} style={{margin:"auto"}}>
                <p style={{fontSize:"10px", marginLeft:"8px"}}>{topic.month}</p>
               
              </div>
            ))}
            </div>
          </div>
          <div className="Weakest_Topics" >
            <p className="weakest-title">Weakest Topics</p>
            {topics.strongest.map((topic, index) => (
              <div className="topic-container" key={index}>
                <img
                  src={topic.image}
                  alt={`${topic.name} Icon`}
                  className="topic-icon"
                  style={{ width: "50px", borderRadius: "5px" }}
                />
                <div className="weakest-inner">
                  <div>
                    <p className="topic-name">{topic.name}</p>
                  </div>
                  <div className="weakest-bar">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${topic.correct_percentage}%` , background: "linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)"
                      }}
                      ></div>
                    </div>
                    <p className="topic-percentage">
                      {topic.correct_percentage}%
                    </p>
                    <span className="correct-text">Correct</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="User_Leaderboard" style={{width:"82%" , margin:"auto" , marginBottom:"23px" }}>
            <p className="weakest-title">User Leaderboard</p>
            {groups_leaderboard.map((user, index) => (
              <div className="leaderboard-item" key={index}>
                <div className="leaderboard-info">
                 
                  <div className="leaderboard-data">
                    <div>
                      <p className="Profile-username">{user.group_name}</p>
                      <p className="Profile-Points">
                        {user.points_per_user} Points - {user.accuracy_percentage}%
                        Correct
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      <h5>{index + 1}</h5>
                      {index === 1 ? (
                        <VscTriangleDown
                          style={{ color: "rgba(255, 62, 19, 1)" }}
                        />
                      ) : (
                        <VscTriangleUp
                          style={{ color: "rgba(31, 224, 143, 1)" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

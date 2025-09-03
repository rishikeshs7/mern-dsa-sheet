import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Topics from "./Topics";
import Progress from "./Progress";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("profile"); // "profile", "topics", "progress"
  const navigate = useNavigate();

  const [topics, setTopics] = useState([
   { name: "Data Structures", open: false, problems: [ { name: "Arrays", leetcode: "https://leetcode.com/tag/array/", youtube: "https://www.youtube.com/results?search_query=arrays+data+structure", article: "https://www.geeksforgeeks.org/array-data-structure/", level: "Easy", done: false }, { name: "Linked List", leetcode: "https://leetcode.com/tag/linked-list/", youtube: "https://www.youtube.com/results?search_query=linked+list+data+structure", article: "https://www.geeksforgeeks.org/data-structures/linked-list/", level: "Medium", done: false },
     { name: "Stack", leetcode: "https://leetcode.com/tag/stack/", youtube: "https://www.youtube.com/results?search_query=stack+data+structure", article: "https://www.geeksforgeeks.org/stack-data-structure/", level: "Medium", done: false },
      { name: "Queue", leetcode: "https://leetcode.com/tag/queue/", youtube: "https://www.youtube.com/results?search_query=queue+data+structure", article: "https://www.geeksforgeeks.org/queue-data-structure/", level: "Medium", done: false },
       { name: "Trees", leetcode: "https://leetcode.com/tag/tree/", youtube: "https://www.youtube.com/results?search_query=tree+data+structure", article: "https://www.geeksforgeeks.org/binary-tree-data-structure/", level: "Medium", done: false }, 
       { name: "Graphs", leetcode: "https://leetcode.com/tag/graph/", youtube: "https://www.youtube.com/results?search_query=graph+data+structure", article: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", level: "Hard", done: false }, ] }, 
       { name: "Databases", open: true, problems: [ { name: "SQL", leetcode: "https://leetcode.com/problemset/database/", youtube: "https://www.youtube.com/results?search_query=sql+database+tutorial", article: "https://www.geeksforgeeks.org/sql-tutorial/", level: "Easy", done: true }, 
        { name: "MongoDB", leetcode: "https://www.mongodb.com/docs/", youtube: "https://www.youtube.com/results?search_query=mongodb+tutorial", article: "https://www.geeksforgeeks.org/introduction-to-mongodb/", level: "Easy", done: false }, 
        { name: "Oracle Database", leetcode: "https://www.oracle.com/database/technologies/", youtube: "https://www.youtube.com/results?search_query=oracle+database+tutorial", article: "https://www.geeksforgeeks.org/introduction-to-oracle-database/", level: "Medium", done: false }, 
        { name: "Cloud Database", leetcode: "https://aws.amazon.com/rds/", youtube: "https://www.youtube.com/results?search_query=cloud+database+tutorial", article: "https://www.geeksforgeeks.org/cloud-database/", level: "Medium", done: false }, ] }, 
        { name: "Machine Learning", open: true, problems: [ { name: "Reinforcement Learning", leetcode: "https://leetcode.com/tag/reinforcement-learning/", youtube: "https://www.youtube.com/results?search_query=reinforcement+learning+tutorial", article: "https://www.geeksforgeeks.org/reinforcement-learning/", level: "Easy", done: true }, 
          { name: "Supervised Learning", leetcode: "https://leetcode.com/tag/supervised-learning/", youtube: "https://www.youtube.com/results?search_query=supervised+learning+tutorial", article: "https://www.geeksforgeeks.org/supervised-learning/", level: "Easy", done: false },
           { name: "Unsupervised Learning", leetcode: "https://leetcode.com/tag/unsupervised-learning/", youtube: "https://www.youtube.com/results?search_query=unsupervised+learning+tutorial", article: "https://www.geeksforgeeks.org/unsupervised-learning/", level: "Medium", done: false },
           { name: "Regression", leetcode: "https://leetcode.com/tag/regression/", youtube: "https://www.youtube.com/results?search_query=regression+machine+learning", article: "https://www.geeksforgeeks.org/regression-in-machine-learning/", level: "Medium", done: false }, 
           { name: "Speech Recognition", leetcode: "https://leetcode.com/tag/speech-recognition/", youtube: "https://www.youtube.com/results?search_query=speech+recognition+machine+learning", article: "https://www.geeksforgeeks.org/speech-recognition-in-machine-learning/", level: "Medium", done: true }, 
           { name: "Neural Networks", leetcode: "https://leetcode.com/tag/neural-network/", youtube: "https://www.youtube.com/results?search_query=neural+network+tutorial", article: "https://www.geeksforgeeks.org/neural-network/", level: "Hard", done: false }, ] } ])
  ;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/login", { replace: true });
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const toggleDone = (topicIndex, problemIndex) => {
    const newTopics = [...topics];
    newTopics[topicIndex].problems[problemIndex].done = !newTopics[topicIndex].problems[problemIndex].done;
    setTopics(newTopics);
  };

  const toggleOpen = (index) => {
    const newTopics = [...topics];
    newTopics[index].open = !newTopics[index].open;
    setTopics(newTopics);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>⏳ Loading...</p>;
  if (!user) return null;

  return (
    <div>
      <Navbar onSelect={setView} onLogout={handleLogout} />
      {view === "profile" && <Profile user={user} />}
      {view === "topics" && <Topics topics={topics} toggleOpen={toggleOpen} toggleDone={toggleDone} />}
      {view === "progress" && <Progress topics={topics} />}
    </div>
  );
};

export default Dashboard;

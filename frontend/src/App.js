
import Home from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/chats" element={<ChatPage />} exact/>
      </Routes>
    </div>
  );
}

export default App;

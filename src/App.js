import { Navigate,Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GroupPage from "./pages/GroupPage";
import SingleGroup from "./pages/SingleGroup";
import CreateGroup from "./pages/CreateGroup";
import HomePage from "./pages/HomePage";
import VideoConference from "./pages/VideoConference";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path ="/" element = {<Signin/>} />
          <Route path ="signup" element = {<Signup/>} />
          <Route path ="account" element = {<ProtectedRoute> <Account/> </ProtectedRoute>}>
              <Route path="/account" element = {<Navigate replace to="home"/>}/>
              <Route path="home" element = {<HomePage/>}/>
              <Route path="groups" element = {<GroupPage/>}/>
              <Route path = "group/:id" element ={<SingleGroup/>}/>
              <Route path = "conference/:id" element = {<VideoConference/>}/>
              <Route path = "group/create" element ={<CreateGroup/>}/>
          </Route>
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;

import { Router } from "@reach/router";
import './App.css';
import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import ErrorMessage from "./components/ErrorMessage";
import UpdateAuthor from "./components/UpdateAuthor";
import AuthorDetails from "./components/AuthorDetails";


function App() {
  return (
    <div className="App">

      <Router>
        <AuthorList path="/" />
        <AuthorForm path="/api/authors" />
        <AuthorDetails path="/api/author/:id" />
        <UpdateAuthor path="/api/author/edit/:id" />
        <ErrorMessage path="/error" />
      </Router>
    </div>
  );
}

export default App;

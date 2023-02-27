import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDo/ToDoList";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      {/* navbar  */}
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* header  */}
        <Header />

        <hr className="mt-4" />

        {/* todo list  */}
        <ToDoList />

        <hr className="mt-4" />

        {/* footer  */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

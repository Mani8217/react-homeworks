import Main from "./components/main";


function App() {
  return (
    <div className="App">
      <Main img = {require("./images/turist1.jpeg")}
       name = "Mani Shidfar"/>
       <Main img = {require("./images/turist2.jpeg")}
       name = "Benyamin Kadivar"/>
       <Main img = {require("./images/turist3.jpeg")}
       name = "Mana Rad"/>
       <Main img = {require("./images/turist4.jpeg")}
       name = "Shervin Matin"/>
       <Main img = {require("./images/turist5.jpeg")}
       name = "Mojgan Sharif"/>
       <Main img = {require("./images/turist6.jpeg")}
       name = "John Doe"/>
    </div>

  );
}

export default App;

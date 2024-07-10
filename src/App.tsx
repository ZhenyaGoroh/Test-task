import { Header } from "@/widgets";

function App() {
  fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(console.log);

  return (
    <>
     <Header />
    </>
  );
}

export default App;

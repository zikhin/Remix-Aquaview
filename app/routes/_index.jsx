import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Home from "./Home";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
<>
        <Header/>
        <Home/>
        <Footer/>
</>
  );
}

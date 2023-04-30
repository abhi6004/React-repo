import { useContext, useEffect } from "react";
import "./App.css"
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pageination from "./components/Pageination";
import { AppContext } from "./context/AppContext";

export default function App() {

  const{fetchBlogPost}  = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  },[]);
  
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blogs/>
      <Pageination/>
    </div>
  );

}

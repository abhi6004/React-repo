import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//stap-1
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([])
    const[page,setPage] = useState(1);
    const[totalPages,setTotalPages] = useState(null);

    async function fetchBlogPost(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try{
            const output = await fetch(url)
            const data = await output.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }

        catch(error) {
            console.log("error in a featch data");
            setPage(1);
            setPage([]);
            setTotalPages(null);

        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPost
    };

    //stap-2
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}






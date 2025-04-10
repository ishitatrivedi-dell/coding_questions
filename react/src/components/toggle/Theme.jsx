import React, {useState} from "react";

function Theme(){
    const [theme, settheme] = useState(false);// hidden at the bginning 

    const toggleTheme = () => {
        settheme(!theme);
      };
    return(
        <>
        <div className={`flex flex-col items-center justify-center h-screen transition-all duration-300 ${
      theme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>

<button onClick={toggleTheme}
 className="mb-6 px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
 
>
    {theme ? 'switch to light mode' : 'switch to dark mode '}
</button>

    </div>
        </>
    )
}
export default Theme
import React, {useState} from "react";

function Toggle(){
    const [isVisbile, setvisible] = useState(false);// hidden at the bginning 

    const text = () => {
        setvisible(!isVisbile);
    };

    return(
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

        <button onClick={text}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >

        {isVisbile ? 'hide text' : 'show text'}
        </button>

        {
            isVisbile && ( // only render p tag if its true 
                <p className="mt-4 text-xl font-semibold text-gray-800">
                Hello World
              </p>
            )
        }
        </div>
        </>
    )
}
export default Toggle
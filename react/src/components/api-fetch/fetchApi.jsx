import React, {useEffect, useState} from 'react';
function FetchApi(){
const [user, setUsers] = useState([]);
const [loading , setloading] = useState(true);
const [error, seterror] = useState(null);

useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        if(!res.ok){
            throw new Error('failed to fetch users');
        }
        return res.json();
    })
    .then((data) => {
        setUsers(data);
        setloading(false);
    })
    .catch((err) => {
        seterror(err.message);
        setloading(false);
    })
}, []);


return(
<>

    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
            {loading && <p className='text-blue-600'> loading....</p>}
            {error && <p className="text-red-600">Error: {error}</p>}

                    {!loading && !error && user.length === 0 && (
                    <p>No users found.</p>
                    )}

                    {!loading && !error && user.length >0 &&(
                        <ul className='list-disc pl-5 space-y-2'>
                            
                        {user.map((user)=>(

                            <li key= {user.id}>
                                {user.name} ({user.email})
                            </li>
                         ))}
                         </ul>
                            )}


                            </div>
      





</>



)
}
export default FetchApi
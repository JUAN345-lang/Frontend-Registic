const url = 'http://localhost:3000/students';

function getUsersPromise() {
    return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => console.log(err));
}

const getUsersAsync = async ()=>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        return data;
    }catch(err){
        console.log(err);
    }
}

const getUserData = async (id)=>{
    try{
        const res = await fetch(`${url}/${id}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err)
    }
}

const deleteUser = async(id) => {
    try{
        const res = await fetch(`${url}/${id}`, { method:'DELETE' });
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err)
    }
}

const updateUser = async(id, body) => {
    try{
        const res = await fetch(`${url}/${id}`, { method:'PUT', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
    });
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err)
    }
}
export default{
    getUsersPromise,
    getUsersAsync,
    getUserData,
    deleteUser,
    updateUser
}
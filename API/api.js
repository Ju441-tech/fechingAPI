export async function fetchAPI(){
    const resp=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5/')
    if(resp.ok===true){
        return resp.json()
    }
    throw new Error("La requête n'a pas aboutit !!!")
}
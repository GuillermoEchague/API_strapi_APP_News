import { API_HOST } from "../utils/constants";


export function getNewsApi() {
    const url=`${API_HOST}/news?_sort=created_at:DESC&_limit=100`;

    return fetch(url)
    .then((Response) => {
        return Response.json()
    })
    .then((result)=>{
        return result;
    })
}

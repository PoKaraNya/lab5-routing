import {useEffect, useState} from "react";
import axios from "axios";

export default function Private() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios.request({
            url: 'https://dummyjson.com/products',
        })
            .then(({data}) => setData(data))
            .catch(() => alert('Error'))
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}
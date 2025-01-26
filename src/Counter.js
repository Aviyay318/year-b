import {useEffect} from "react";

function Counter() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/api/items')
            .then(response => response.json())
            .then(items => setData(items));
    }, []);

    return (
        <div>
            {data.map(item => <p key={item.id}>{item.name}</p>)}
        </div>
    );
}

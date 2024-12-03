import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

function WikiPage () {
    const {searchQuery} = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/creature/${searchQuery}`);
                if(response.ok){
                    const myData = await response.json();
                    setData(myData);
                }else {
                    const errorMessage = await response.json()
                    setError(errorMessage.message);
                }
            }
            catch (error) {
                setError("데이터를 가져오는 중 오류가 발생했습니다.")
            }
        };
        fetchData();
    }, [searchQuery])
    return(
        <div className="container">
            <h1>{searchQuery}</h1>
            <div className="article-container">
                {error ? (
                    <p>{error}</p>
                ) : data ? (
                    <div>
                        <p>{data.시설외부생명체}</p>
                        <p>{data.시설내부생명체}</p>
                    </div>
                ) : (
                    <p>데이터를 로드 중입니다.</p>
                )
            } 
            </div>
        </div>
    )
}

export default WikiPage;
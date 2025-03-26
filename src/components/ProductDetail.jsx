import { useParams } from "react-router";

export const ProductDetail = () =>{
    const params = useParams();

    return (
        <div className="component">ProductDetail - {params.id}</div>
    )
}

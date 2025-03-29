import { useSearchParams, useLocation } from "react-router";

export const ProductList = () =>{
    const [searchParams] = useSearchParams();
    const location = useLocation();
    //console.log(searchParams.get("keyword"));
    console.log(location);  
    return (
        <div className="component">ProductList</div>
    )
}

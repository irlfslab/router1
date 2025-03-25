import { useNavigate } from "react-router";

export const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
   /*     console.log("------"); */
        navigate("/");
    }

    return (
        <>
            <div className="component">Contact</div>
            <button onClick={handleSubmit}> Back to Home </button>
        </>
        
    )
}

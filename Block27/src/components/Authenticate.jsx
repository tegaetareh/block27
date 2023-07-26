import { useState } from "react";
export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        console.log("handleClick fired!!!")
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            console.log(result)
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }

    }



    return (
        <div>
            <h2><u>Authenticate</u></h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}

//if username is less than 4 characters error message will render to error paragraph saying
//user name is less than 4 characters
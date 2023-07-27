import { useState } from "react";
export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);

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
            console.log(result.data.username)
            setSuccessMessage(result.message)
            setUsername(result.data.username)
        } catch (error) {
            setError(error.message);
        }

    }



    return (
        <div>
            <h2><u>Authenticate</u></h2>
            {successMessage && <p className="success"> {successMessage}</p>}
            {error && <p className="error">{error}</p>}
            {username && <p>Welcome {username}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}


//use styling to make correctly authenticated dissappear
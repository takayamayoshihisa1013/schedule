import React, { useState } from "react";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const signupData = {
            name:name,
            email:email,
            password:password
        };

        // Flaskへ送る
        fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
            credentials: "include",
        })
        .then( response => response.json())
        .then(data => {
            
            if (data.login === true) {
                alert("登録されました。");
                navigate("/dashboard");
            }
            else {
                alert("このアカウントは既に登録されています。")
            }
            
            console.log("Success:", data)
        })
        .catch(error => {
            console.error("Error:", error)
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="signup_form">
            <div>
                <p>お名前</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <p>メールアドレス</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <p>パスワード</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit">登録</button>
        </form>
        </>
    )
}

export default Signup;
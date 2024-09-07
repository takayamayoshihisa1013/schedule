import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            email:email,
            password:password
        }

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
            credentials: "include",
        })
        .then( response => response.json())
        .then(data => {
            if (data.submit === true) {
                console.log(data);
                navigate("/dashboard")
            }
            else {
                alert("アカウントが見つかりません")
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="login_form">
            <div>
                <p>メールアドレス</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <p>パスワード</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit">ログイン</button>
            <p>アカウントをお持ちでない方は<Link to="/signup">こちら</Link></p>
        </form>
        
        </>
    )
}

export default Login;
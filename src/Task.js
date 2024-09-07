import React,{ useEffect } from "react";
import "./Task.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Task() {

    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/check_session', {
            method: "GET",
            credentials: "include",
        }
            
        )
        .then(response => response.json())
        .then(data => {
            if (!data.login) {
                navigate("/login");
            }
        })
        .catch(error => {
            console.error(error);
        })
    })
    return (
        <article class="task">
            <section class="level">
                <h4>タスク重要度:</h4>
                <p><span></span>重要度高</p>
                <p><span></span>重要度中</p>
                <p><span></span>重要度低</p>
            </section>
            <section class="task_section">
                <h2>タスク一覧</h2>
                <div class="task_list">
                    <div class="false">
                        <h3 class="task-type">未完了タスク</h3>
                        <ul>
                            <li>
                                <h3>Pythonの課題</h3>
                                <p class="detail">pythonのFlaskを使ってページを作る。</p>
                                <div class="bar">
                                    <div class="achievement"></div>
                                </div>
                                <p class="achievement-num">達成率:40%</p>
                                <div class="time_delete">
                                    <p>2024/9/1</p>
                                    <form>
                                        <Link to="/task_detail"><button>詳細</button></Link>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <h3>Pythonの課題</h3>
                                <p class="detail">pythonのFlaskを使ってページを作る。</p>
                                <div class="bar">
                                    <div class="achievement"></div>
                                </div>
                                <p class="achievement-num">達成率:40%</p>
                                <div class="time_delete">
                                    <p>2024/9/1</p>
                                    <form>
                                        <button>詳細</button>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <h3>Pythonの課題</h3>
                                <p class="detail">pythonのFlaskを使ってページを作る。</p>
                                <div class="bar">
                                    <div class="achievement"></div>
                                </div>
                                <p class="achievement-num">達成率:40%</p>
                                <div class="time_delete">
                                    <p>2024/9/1</p>
                                    <form>
                                        <button>詳細</button>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <h3>Pythonの課題</h3>
                                <p class="detail">pythonのFlaskを使ってページを作る。</p>
                                <div class="bar">
                                    <div class="achievement"></div>
                                </div>
                                <p class="achievement-num">達成率:40%</p>
                                <div class="time_delete">
                                    <p>2024/9/1</p>
                                    <form>
                                        <button>詳細</button>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <h3>Pythonの課題</h3>
                                <p class="detail">pythonのFlaskを使ってページを作る。</p>
                                <div class="bar">
                                    <div class="achievement"></div>
                                </div>
                                <p class="achievement-num">達成率:40%</p>
                                <div class="time_delete">
                                    <p>2024/9/1</p>
                                    <form>
                                        <button>詳細</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="true">
                        <h3 class="task-type">完了タスク</h3>
                        <ul>

                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Task;
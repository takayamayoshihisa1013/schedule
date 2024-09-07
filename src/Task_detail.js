import React from "react";
import "./Task_detail.css"

function Task_detail() {
    return (
        <article class="task_detail">
            <h1>Pythonの課題</h1>
            <p class="detail">PythonのFlaskを使ってページを作る。</p>

            <div class="bar">
                <div class="achievement"></div>
            </div>
            <p class="achievement-num">達成率:40%</p>
            <form>
                <h3>作業</h3>
                <div class="task_check">
                    <p>ページを作り終わった</p>
                    <input type="checkbox"></input>
                </div>
                <div class="task_check">
                    <p>ページを作り終わった</p>
                    <input type="checkbox"></input>
                </div>
                <div class="task_check">
                    <p>ページを作り終わった</p>
                    <input type="checkbox"></input>
                </div>
                <div class="task_check">
                    <p>ページを作り終わった</p>
                    <input type="checkbox"></input>
                </div>
                <div class="task_check">
                    <p>ページを作り終わった</p>
                    <input type="checkbox"></input>
                </div>

                <button>登録</button>
            </form>
        </article>
    )
}

export default Task_detail;
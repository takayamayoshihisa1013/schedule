import React, { useRef } from 'react';
import "./Add.css";

function Add() {

    const scheduleFormRef = useRef(null);
    const taskFormRef = useRef(null);

    // スケジュールフォームの選択
    const select_schedule = () => {
        if (scheduleFormRef.current && taskFormRef.current) {
            taskFormRef.current.style.transform = "translateX(100vw)";
            scheduleFormRef.current.style.transform = "translateX(0)";
        }
    };

    // タスクフォームの選択
    const select_task = () => {
        if (scheduleFormRef.current && taskFormRef.current) {
            taskFormRef.current.style.transform = "translateX(0)";
            scheduleFormRef.current.style.transform = "translateX(-100vw)";
        }
    };

    // フォーム送信処理
    const handleSubmit = (event) => {
        event.preventDefault(); // ページリロード防止

        // フォームデータを取得
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries()); // フォームデータをオブジェクトに変換

        fetch("http://localhost:5000/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",  // クッキーを送信してセッションを維持
        })
        .then(response => {
            if (response.ok) {
                console.log("Success!");
                event.target.reset(); // フォームリセット
                alert("追加されました！");
            } else {
                console.log("Failed to submit form.");
            }
        })
        .catch(error => {
            console.error("Error", error);
        });
    };

    return (
        <article className='add_page'>
            <div className='select_form'>
                <h3 onClick={select_schedule}>スケジュール</h3>
                <h3 className='select_task' onClick={select_task}>タスク</h3>
            </div>
            <section className='form_zone'>
                {/* スケジュールフォーム */}
                <form onSubmit={handleSubmit} id='schedule_form' ref={scheduleFormRef}>
                    <div>
                        <p>スケジュール名</p>
                        <input type='text' name='name' placeholder='スケジュールの名前を入力してください'></input>
                    </div>
                    <div>
                        <p>スケジュールの詳細</p>
                        <textarea name='schedule_detail'></textarea>
                    </div>
                    <div>
                        <p>開始時刻</p>
                        <div className='date_time'>
                            <input type='date' name='start_date'></input>
                            <input type='time' name='start_time'></input>
                        </div>
                    </div>
                    <div>
                        <p>終了時刻</p>
                        <div className='date_time'>
                            <input type='date' name='end_date'></input>
                            <input type='time' name='end_time'></input>
                        </div>
                    </div>
                    <div>
                        <p>重要度</p>
                        <select name='important'>
                            <option value="low">重要度低</option>
                            <option value="middle">重要度中</option>
                            <option value="high">重要度高</option>
                        </select>
                    </div>
                    <button type='submit' value="schedule" name='add_button' className='submit'>送信</button>
                </form>

                {/* タスクフォーム */}
                <form onSubmit={handleSubmit} id='task_form' ref={taskFormRef}>
                    <div>
                        <p>タスク名</p>
                        <input type='text' name='name' placeholder='タスクの名前を入力してください'></input>
                    </div>
                    <div>
                        <p>タスクの詳細</p>
                        <textarea name='schedule_detail'></textarea>
                    </div>
                    <div>
                        <p>開始時刻</p>
                        <div className='date_time'>
                            <input type='date' name='start_date'></input>
                            <input type='time' name='start_time'></input>
                        </div>
                    </div>
                    <div>
                        <p>終了時刻</p>
                        <div className='date_time'>
                            <input type='date' name='end_date'></input>
                            <input type='time' name='end_time'></input>
                        </div>
                    </div>
                    <div>
                        <p>重要度</p>
                        <select name='important'>
                            <option value="low">重要度低</option>
                            <option value="middle">重要度中</option>
                            <option value="high">重要度高</option>
                        </select>
                    </div>
                    <div>
                        <p>達成項目</p>
                        <div className='checkpoint'>
                            <input type='text' name='checkpoint_name' className='checkpoint_name'></input>
                            <input type='number' name='checkpoint_num' className='checkpoint_num'></input>
                        </div>
                    </div>
                    <button type='submit' value="task" name='add_button' className='submit'>送信</button>
                </form>
            </section>
        </article>
    );
}

export default Add;

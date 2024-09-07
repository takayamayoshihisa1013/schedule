import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; 
import './Calender.css'; 
import { Link } from 'react-router-dom';

function Calender() {
    const [date, setDate] = useState(new Date());

    fetch("http://localhost:5000/activity_data", {
        method: "POST",
        credentials: "include",
    })

    // タスクに「開始日」「終了日」「内容」を追加
    const tasks = [
        { start: new Date(2024, 7, 10), end: new Date(2024, 7, 15), content: "プロジェクトAの進捗" },
        { start: new Date(2024, 7, 20), end: new Date(2024, 7, 22), content: "チームミーティング" }
    ];

    // スケジュールは1日単位で登録される
    const schedules = [
        { date: new Date(2024, 7, 31), content: "会議" },
        { date: new Date(2024, 7, 10), content: "クライアントとの打ち合わせ" }
    ];

    const isDateWithinRange = (date, start, end) => {
        return date >= start && date <= end;
    };

    const isTaskStartDate = (date, task) => {
        return date.getFullYear() === task.start.getFullYear() &&
               date.getMonth() === task.start.getMonth() &&
               date.getDate() === task.start.getDate();
    };

    const getScheduleForDate = (date) => {
        return schedules.find(schedule => 
            date.getFullYear() === schedule.date.getFullYear() &&
            date.getMonth() === schedule.date.getMonth() &&
            date.getDate() === schedule.date.getDate()
        );
    };

    return (
        <div className="calendar-container">
            <Calendar
                onChange={setDate}
                value={date}
                className="full-screen-calendar"
                tileContent={({ date, view }) => {
                    if (view === 'month') {
                        // 日付に該当するタスクを取得
                        const task = tasks.find(task => isDateWithinRange(date, task.start, task.end));
                        // 日付に該当するスケジュールを取得
                        const schedule = getScheduleForDate(date);

                        return (
                            <Link to={`/date?date=${date.toLocaleDateString('en-CA')}`} className="date-link">
                                <div className="date-content">
                                    {/* タスクの帯を複数日にわたって表示し、内容は開始日にのみ表示 */}
                                    {task && (
                                        <div className="task-band">
                                            {isTaskStartDate(date, task) && (
                                                <span className="task-content"><i class="fa-solid fa-list-check"></i>{task.content}</span>
                                            )}
                                        </div>
                                    )}
                                    {/* スケジュールも1日単位で帯を表示し、内容も表示 */}
                                    {schedule && (
                                        <div className="schedule-band">
                                            <span className="schedule-content"><i class="fa-solid fa-calendar-days"></i>{schedule.content}</span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        );
                    }
                    return null;
                }}
            />
        </div>
    );
}

export default Calender;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Week.css';

function Week() {
    // 今日の日付を取得
    const today = new Date();

    // 現在の週の開始日（月曜日）
    const [currentMonday, setCurrentMonday] = useState(
        new Date(today.setDate(today.getDate() - today.getDay() + 1))
    );

    // 週を進める関数
    const nextWeek = () => {
        setCurrentMonday(new Date(currentMonday.setDate(currentMonday.getDate() + 7)));
    };

    // 週を戻す関数
    const prevWeek = () => {
        setCurrentMonday(new Date(currentMonday.setDate(currentMonday.getDate() - 7)));
    };

    // 現在の週の日付を取得
    const getWeekDays = () => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentMonday);
            date.setDate(currentMonday.getDate() + i);
            days.push(date);
        }
        return days;
    };

    // サンプルの予定データ（このデータは実際にはAPIなどから取得する）
    const sampleSchedules = {
        "2024-09-03": [{schedule:"Meeting at 10 AM", schedule_at:"20:00"}, "Lunch at 12 PM"],
        "2024-09-13": ["Project deadline", "Yoga class at 6 PM"],
        // 他の日付の予定も追加可能
    };

    const weekDays = getWeekDays();

    return (
        <article className="week-container">
            <div className="week-navigation">
                <button onClick={prevWeek}>Previous Week</button>
                <button onClick={nextWeek}>Next Week</button>
            </div>
            <div className="week-days">
                {weekDays.map((date, index) => {
                    const dateString = date.toISOString().split('T')[0];
                    return (
                        <div key={index} className="day">
                            <div className="day-header">
                                <div className="day-date">
                                    {dateString}
                                </div>
                                <div className="day-name">
                                    {date.toLocaleDateString('en-US', { weekday: 'long' })}
                                </div>
                            </div>
                            <div className="schedule-list">
                                {sampleSchedules[dateString] ? (
                                    sampleSchedules[dateString].map((schedule, i) => (
                                        <div key={i} className="schedule-item">
                                            <p>{schedule.schedule}</p>
                                            <p className="schedule_at">{schedule.schedule_at}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="schedule-item no-schedule">
                                        No Schedule
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </article>
    );
}

export default Week;

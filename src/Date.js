import React, { useState } from 'react';

// 1週間分の日付を取得する関数
const getWeekDates = (startDate) => {
    const week = [];
    const current = new Date(startDate);
    current.setDate(current.getDate() - current.getDay()); // 週の始まり（日曜日）を基点に
    for (let i = 0; i < 7; i++) {
        week.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return week;
};

// ダミーデータのタスクとスケジュール
const tasks = [
    { start: new Date(2024, 7, 10), end: new Date(2024, 7, 15), content: "プロジェクトAの進捗" },
    { start: new Date(2024, 7, 20), end: new Date(2024, 7, 22), content: "チームミーティング" }
];

const schedules = [
    { date: new Date(2024, 7, 31), content: "会議" },
    { date: new Date(2024, 7, 10), content: "クライアントとの打ち合わせ" }
];

// 選択された日付のタスクとスケジュールを取得する関数
const getTaskForDate = (date) => {
    return tasks.find(task => date >= task.start && date <= task.end);
};

const getScheduleForDate = (date) => {
    return schedules.find(schedule =>
        date.getFullYear() === schedule.date.getFullYear() &&
        date.getMonth() === schedule.date.getMonth() &&
        date.getDate() === schedule.date.getDate()
    );
};

const WeekView = () => {
    const [currentDate, setCurrentDate] = useState(new Date()); //ここが今日の日付らしい
    const [selectedDate, setSelectedDate] = useState(null);
    console.log(currentDate);
    const weekDates = getWeekDates(currentDate);
    

    const moveToPreviousWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 7);
        setCurrentDate(newDate);
        setSelectedDate(null); // 週が変わったら選択日をリセット
    };

    const moveToNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 7);
        setCurrentDate(newDate);
        setSelectedDate(null); // 週が変わったら選択日をリセット
    };

    return (
        <div>
            <h2>{currentDate.toLocaleDateString()} の週</h2>
            <button onClick={moveToPreviousWeek}>前の週</button>
            <button onClick={moveToNextWeek}>次の週</button>

            <ul>
                {weekDates.map(date => (
                    <li key={date.toDateString()} onClick={() => setSelectedDate(date)} style={{ cursor: 'pointer' }}>
                        {date.toLocaleDateString()}
                    </li>
                ))}
            </ul>

            {selectedDate && (
                <div>
                    <h3>{selectedDate.toLocaleDateString()} のスケジュールとタスク</h3>
                    <p>スケジュール: {getScheduleForDate(selectedDate)?.content || "なし"}</p>
                    <p>タスク: {getTaskForDate(selectedDate)?.content || "なし"}</p>
                </div>
            )}
        </div>
    );
};

export default WeekView;

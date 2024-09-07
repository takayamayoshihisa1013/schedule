import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from "./Dashboard.js";
import Calender from "./Calender.js";
import Task from "./Task.js";
import Share from "./Share.js"
import Reminder from "./Reminder.js"
import Account from "./Account.js"
import faq from "./Faq.js"
import Task_detail from './Task_detail.js';
import "./App.css";
import Week from './Week.js';
import Add from "./Add.js"
import Signup from './Signup.js';
import Login from "./Login.js";
import Date from "./Date.js";

function App() {
  return (
    <div className="app-content">
      <Router>
        <Routes>
          {/* Header付きのルート */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calender" element={<Calender />} />
                    <Route path="/task" element={<Task />} />
                    <Route path="/task_detail" element={<Task_detail />} />
                    <Route path="/week" element={<Week />} />
                    <Route path="/add" element={<Add />} />
                    <Route path='/date' element={<Date />} />
                  </Routes>
                </main>
              </>
            }
          />

          {/* Headerなしのルート */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <h1>{data ? data.message : 'Loading...'}</h1> */}
    </div>
  );
}

export default App;

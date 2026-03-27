import React from 'react';

export default function Main() {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          <span>
            Jiangsu Football League
          </span>
        </h1>
        <nav className="space-x-4">
          <a className="hover:underline" href="#schedule">
            Schedule
          </a>
          <a className="hover:underline" href="#teams">
            Teams
          </a>
          <a className="hover:underline" href="#standings">
            Standings
          </a>
          <a className="hover:underline" href="#news">
            News
          </a>
        </nav>
      </header>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white shadow-md rounded-lg p-4" id="schedule">
          <h2 className="text-lg font-medium text-gray-800">
            <span>
              Match Schedule
            </span>
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between items-center border-b py-2">
              <span className="font-semibold text-gray-700">
                Team A vs Team B
              </span>
              <span className="text-sm text-gray-500">
                10/25, 3:00PM
              </span>
            </li>
            <li className="flex justify-between items-center border-b py-2">
              <span className="font-semibold text-gray-700">
                Team C vs Team D
              </span>
              <span className="text-sm text-gray-500">
                10/26, 5:00PM
              </span>
            </li>
          </ul>
        </section>
        <section className="bg-white shadow-md rounded-lg p-4" id="teams">
          <h2 className="text-lg font-medium text-gray-800">
            <span>
              Team Profiles
            </span>
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-4">
              <img className="w-10 h-10 object-cover rounded-full" alt="Team A" src="/images/teamA_logo.png" />
              <span className="font-medium text-gray-700">
                Team A
              </span>
            </li>
          </ul>
        </section>
        <section className="bg-white shadow-md rounded-lg p-4" id="standings">
          <h2 className="text-lg font-medium text-gray-800">
            <span>
              Standings
            </span>
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">
                1. Team A
              </span>
              <span className="text-gray-500 text-sm">
                30 Pts
              </span>
            </li>
          </ul>
        </section>
      </div>
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        <span>
          © 2025 Jiangsu Football League. All rights reserved.
        </span>
      </footer>
    </div>
    </div>
  );
}

import React, { useState } from 'react'

const EditProfile = () => {
    const [emailId, setEmailId] = useState("");
      const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center my-10">
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="mail@site.com"
            required
          />
        </label>
        <label className="input validator">
          <input
            type="password"
            required
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditProfile

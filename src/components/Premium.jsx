import React from "react";

const Premium = () => {
  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
         <h1 className="font-bold text-3xl"> Silver Membership</h1>
         <ul>
            <li> - chat with other people</li>
            <li> - 30 Requests per day</li>
            <li> - Blue Tick</li>
            <li> - 3 months</li>
         </ul>
         <button className="btn btn-secondary">Buy Silver</button>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
        <h1 className="font-bold text-3xl"> Gold Membership</h1>
         <ul>
            <li> - chat with other people</li>
            <li> - infinite per day</li>
            <li> - Blue Tick</li>
            <li> - 6 months</li>
         </ul>
         <button className="btn btn-primary">Buy Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;

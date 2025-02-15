import React from "react";

export default function EventSearch() {
  return (
    <form>
      <div>
        <label htmlFor="yearId"> Year </label>
        <select name="" id="yearId">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div>
        <label htmlFor="monthId"> Year </label>
        <select name="" id="monthId">
          <option value="1">January</option>
          <option value="2">Februuary</option>
          <option value="3">march</option>
          <option value="4">april</option>
        </select>
      </div>
    </form>
  );
}

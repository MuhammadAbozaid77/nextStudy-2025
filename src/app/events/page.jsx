// 11 ,12
// File Base Routing  === React Router dom In React.
// UseRouter()  ----  Link   ----

import FilteredData from "@/components/client/fetchingData/FilteredData";

export default function EventsPage() {
  return (
    <div className="p-5">
      <h1> EventsPage</h1>

      <h1>Filtered Data</h1>

      <FilteredData />
    </div>
  );
}

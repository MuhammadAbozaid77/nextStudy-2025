// 11 ,12
// File Base Routing  === React Router dom In React.
// UseRouter()  ----  Link   ----

import FilteredEventsData from "@/components/client/fetchingData/FilteredEventsData";

export default function EventsPage() {
  return (
    <div className="p-5">
      <h1> EventsPage</h1>

      <h1>Filtered Data Form</h1>
      <div>
        <h1>dddddd</h1>

        <FilteredEventsData />
      </div>
    </div>
  );
}

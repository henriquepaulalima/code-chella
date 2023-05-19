import Attractions from "views/Main/Attractions";
import Banner from "./Banner";
import DateAndLocation from "./DateAndLocation";

export default function Main() {
  return (
    <main>
      <Banner />
      <DateAndLocation />
      <Attractions />
    </main>
  );
}

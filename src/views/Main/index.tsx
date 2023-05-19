import Attractions from "views/Main/Attractions";
import DateAndLocation from "./DateAndLocation";
import MainBanner from "./MainBanner";

export default function Main() {
  return (
    <main>
      <MainBanner />
      <DateAndLocation />
      <Attractions />
    </main>
  );
}

import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  gap: 2.4rem;

  @media (min-width: 1401px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
  }

  @media (max-width: 1400px) and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 34rem auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    gap: 1.6rem;
  }
`;

const StatsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  gap: 2.4rem;

  @media (min-width: 1401px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <StatsGrid>
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />
      </StatsGrid>
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

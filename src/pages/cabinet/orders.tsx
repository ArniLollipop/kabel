import { ActivePageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";

export default function ordersPage() {
  return (
    <CabinetLayout activePage={ActivePageEnum.ORDERS}>
      <h1>ORDERS</h1>
    </CabinetLayout>
  );
}

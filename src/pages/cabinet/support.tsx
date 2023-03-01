import { ActivePageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";

export default function supportPage() {
  return (
    <CabinetLayout activePage={ActivePageEnum.SUPPORT}>
      <h1>SUPPORT</h1>
    </CabinetLayout>
  );
}

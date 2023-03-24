import { ActiveCabinetPageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";

export default function supportPage() {
  return (
    <CabinetLayout activePage={ActiveCabinetPageEnum.SUPPORT}>
      <h1>SUPPORT</h1>
    </CabinetLayout>
  );
}

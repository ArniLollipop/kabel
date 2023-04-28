// packages
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Head from "next/head";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

// assets
import { IconLogo } from "@/assets/icons";
import cls from "./PrintPage.module.scss";

// data
import { printData } from "@/data/PrintData";

let cn = classNames.bind(cls);

export default function PrintPage() {
  const printRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () =>
      toast("Успешно напечатано!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      }),
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    handlePrint();
  });

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Принт</title>
        <meta name="description" content="ТОО Almaty Kazkabel | Принт" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
        />
      </Head>
      <div ref={printRef} className={cn(cls.PrintPage)}>
        <div className={cn(cls.iconContainer)}>
          <IconLogo width="126" height="47" />
          <p>+7 777 123 23 64</p>
        </div>
        <hr />

        <h2>Таблица веса кабеля</h2>
        <div className={cn(cls.thContainer)}>
          <thead>
            <th>Марка кабеля с сечением</th>
            <th>Количество метров</th>
            <th>Вес, кг</th>
          </thead>
          <tbody>
            {/* replace with real data */}
            {printData.map(({ id, name, weight, length }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{weight}</td>
                  <td>{length}</td>
                </tr>
              );
            })}
          </tbody>
        </div>
        <hr />
        <div className={cn(cls.resultContainer)}>
          <div>
            {/* replace with real data */}
            <p>Общая длина кабеля</p>
            <strong>14.000 м</strong>
          </div>
          <div>
            <p>Общий вес кабеля</p>
            <strong>58.310 кг</strong>
          </div>
        </div>
      </div>
    </>
  );
}

/** @format */

// packages
import { FC } from "react";
import classNames from "classnames";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
import Link from "next/link";
import "jspdf-autotable";
import { UserOptions } from "jspdf-autotable";
import { useTranslation } from "react-i18next";

// assets
import cls from "./PdfPrintShareFeatures.module.scss";

// components
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";

let cn = classNames.bind(cls);

interface PdfPrintShareFeaturesProps {
  className?: string;
}

export const PdfPrintShareFeatures: FC<PdfPrintShareFeaturesProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation();

  interface jsPDFCustom extends jsPDF {
    autoTable: (options: UserOptions) => void;
  }

  // for PDF
  const savePDFPage = () => {
    console.log("savePDFPage is working!");
    const doc = new jsPDF() as jsPDFCustom;

    // Set font to a Unicode-compatible font that supports Cyrillic characters
    doc.setFont("helvetica", "", "normal");

    // replace with real data
    const tableHead = [[t("markCabel"), t("lengthCabel"), t("weight")]];
    const tableBody = [
      ["Кабель АБВГ", "100", "10"],
      ["Кабель ГВП", "50", "5"],
      ["Кабель ПВ1", "25", "3"],
    ];

    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.line(20, 70, 190, 70);

    doc.autoTable({
      head: tableHead,
      body: tableBody,

      headStyles: {
        font: "helvetica",
        fontStyle: "normal",
        halign: "center",
      },
      bodyStyles: {
        font: "helvetica",
        fontStyle: "normal",
        halign: "center",
        cellPadding: 6,
      },
    });

    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.line(20, 70, 190, 70);

    doc.save("kazkabel.pdf");
  };

  // for SHARE
  const sharePage = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(
      () => {
        toast(t("copyOk"), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      },
      () => {
        toast(t("copyError"), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      }
    );
  };

  return (
    <div className={cn(cls.PdfPrintShareFeatures)}>
      <Button
        type='button'
        className={cn(cls.pdfBtn)}
        onClick={savePDFPage}
        theme={ThemeButton.CLEAR}>
        {t("savePdf")}
      </Button>

      <Link className={cn(cls.printBtn)} href={"/print/PrintPage"}>
        {t("getResults")}
      </Link>

      <Button
        type='button'
        className={cn(cls.shareBtn)}
        onClick={sharePage}
        theme={ThemeButton.CLEAR}>
        {t("share")}
      </Button>
    </div>
  );
};

import {
  compareFeaturesTableHead,
  compareFeaturesTableData,
} from "@/lib/landing-page-data.ts";
import { Minus, Check } from "lucide-react";

type TableDataProps = {
  feature: string;
  free: boolean | string;
  professional: boolean | string;
  agency: boolean | string;
};

export default function CompareFeaturesTable() {
  return (
    <>
      <table className="w-full">
        <thead className="border-b border-neutral-300 text-zinc-700 text-sm leading-5 ">
          <tr>
            {compareFeaturesTableHead.map((tHead: string) => (
              <th
                key={tHead}
                className="py-6 px-2 md:p-6 font-normal text-center first-of-type:text-left last-of-type:hidden md:last-of-type:block"
              >
                {tHead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareFeaturesTableData.map((tableData: TableDataProps) => (
            <TableRow key={tableData.feature} {...tableData} />
          ))}
        </tbody>
      </table>
    </>
  );
}

function TableRow(tableData: TableDataProps) {
  const renderCurrentTableData = (
    tableField: string | boolean,
  ): string | React.ReactElement | null => {
    if (!tableField) return <Minus className="mx-auto" />;

    if (typeof tableField === "string") return tableField;
    if (typeof tableField === "boolean" && tableField)
      return <Check className="text-indigo-900 mx-auto" />;

    return null;
  };

  const tableDataValues = Object.values(tableData);

  return (
    <>
      <tr className="border-b border-gray-200 text-sm leading-5 font-light">
        {compareFeaturesTableHead.map((tableHead: string, i: number) => (
          <td
            className="py-6 px-2 md:p-6 text-center first-of-type:text-left last-of-type:hidden"
            key={tableHead}
          >
            {renderCurrentTableData(tableDataValues[i])}
          </td>
        ))}
      </tr>
    </>
  );
}

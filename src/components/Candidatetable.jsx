import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
} from "@tremor/react";

import "../styles/CandidateTable.css";
const salesPeople = [
  {
    name: "Peter Doe",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    delta: "overperforming",
    deltaType: "moderateIncrease",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    delta: "average",
    deltaType: "unchanged",
  },
  {
    name: "Phil Less",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    delta: "underperforming",
    deltaType: "moderateDecrease",
  },
  {
    name: "John Camper",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    delta: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    delta: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Peter Moore",
    leads: 82,
    sales: "1,460,000",
    quota: "1,500,000",
    variance: "low",
    region: "Region A",
    delta: "average",
    deltaType: "unchanged",
  },
  {
    name: "Joe Sachs",
    leads: 49,
    sales: "1,230,000",
    quota: "1,800,000",
    variance: "medium",
    region: "Region B",
    delta: "underperforming",
    deltaType: "moderateDecrease",
  },
];

export default function CandidateTable() {
  return (
    <div className="h-[93vh] md:w-[60vw] flex justify-between items-center">
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-sm lg:text-lg">
                Name
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-sm lg:text-lg">
                Leads
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-sm lg:text-lg">
                Vote btn
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="text-sm lg:text-lg">
                  {item.name}
                </TableCell>
                <TableCell className="text-right text-sm lg:text-lg">
                  {item.leads}
                </TableCell>
                <TableCell className="text-right my-2">
                  <span className="bg-red-400 px-4 py-2 rounded-lg text-sm lg:text-lg">
                    vote
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

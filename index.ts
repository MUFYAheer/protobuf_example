import * as fs from "fs";
// @ts-ignore
import * as data from "./rawdata.json";

interface Employee {
  id: number;
  name: string;
  salary: number;
}

const employees: Employee[] = [];

for (const ele of data) {
  employees.push(ele);
}

console.log(employees);

fs.writeFileSync("data.json", JSON.stringify(employees));

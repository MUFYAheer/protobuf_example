import * as fs from "fs";

const data = fs.readFileSync("rawdata.json", { encoding: "utf-8" });

const employees = [];

for (const ele of JSON.parse(data)) {
  employees.push(ele);
}

console.log(employees);

fs.writeFileSync("data.json", JSON.stringify(employees));

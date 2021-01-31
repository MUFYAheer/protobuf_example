import * as fs from "fs";
// @ts-ignore
import * as Schema from "./employees_pb";
// @ts-ignore
import * as data from "./rawdata.json";

// @ts-ignore
const employees = new Schema.Employees();

for (const ele of data) {
  // @ts-ignore
  const o = new Schema.Employee();
  o.setId(ele.id);
  o.setName(ele.name);
  o.setSalary(ele.salary);
  employees.addEmployees(o);
}

const bytes = employees.serializeBinary();
console.log("binary " + bytes);
fs.writeFileSync("data.binary", bytes);

// @ts-ignore
const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString());

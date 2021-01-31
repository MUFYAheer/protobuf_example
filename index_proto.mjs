import * as fs from "fs";
import Schema from "./employees_pb.js";

const data = fs.readFileSync("rawdata.json", { encoding: "utf-8" });

const employees = new Schema.Employees();

for (const ele of JSON.parse(data)) {
  const o = new Schema.Employee();
  o.setId(ele.id);
  o.setName(ele.name);
  o.setSalary(ele.salary);
  employees.addEmployees(o);
}

const bytes = employees.serializeBinary();
console.log("binary " + bytes);
fs.writeFileSync("data.binary", bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString());

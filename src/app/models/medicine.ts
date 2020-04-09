export class Medicine {
  medicineId: number;
  name: string;
  unit: string;
  expireDate: Date;
  packageSize: number;
  currState: number;

  constructor(medicineId: number, name: string, unit: string, expireDate: Date, packageSize: number, currState: number) {
    this.medicineId = medicineId;
    this.name = name;
    this.unit = unit;
    this.expireDate = expireDate;
    this.packageSize = packageSize;
    this.currState = currState;
  }
}

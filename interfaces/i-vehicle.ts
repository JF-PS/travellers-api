interface IVehicle {
  id: number;
  category_id: number;
  sub_category_id: number;
  brand_id: number;
  serial_number_id: number;
  gas_id: number;
  horsepower_id: number;
  year: Date;
  date_circulation: Date;
  kilometers: number;
}
export default IVehicle;

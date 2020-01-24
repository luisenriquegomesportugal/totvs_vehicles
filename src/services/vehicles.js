const vehicles = [
  {
    manufacturer: "Ford",
    name: "KA",
    year: "2016",
    km: 30000,
    price: 49000,
    seller: "Jhon Silva",
    favor: false,
    description: "launch edition",
    optional: [
      {
        icon: "",
        label: "motor 1.0"
      }
    ],
    images: []
  }
];

const STORAGE_KEY = "VEHICLE_STORAGE_KEY";

export default {
  all() {
    return vehicles;
  },
  save(vehicle) {
    vehicles.push(vehicle);
    return vehicle;
  }
};

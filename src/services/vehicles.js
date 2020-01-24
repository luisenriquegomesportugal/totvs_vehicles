const vehicles = [
  {
    id: "IUFFYQ987RYWIUEFHQ98RYWIDUWD",
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
  },
  update(vehicle) {
    const index = vehicles.findIndex(({ id }) => vehicle.id === id);
    vehicles[index] = vehicle;

    return vehicle;
  }
};

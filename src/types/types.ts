export type Food = "meat" | "sausage" | "chicken" | "garlicBread";

export const peopleQuantity: Record<Food, number> = {
    meat: 400,
    sausage: 200,
    chicken: 200,
    garlicBread: 100,
};

export const foodNames: Record<string, string> = {
    meat: "Carne",
    sausage: "Linguiça",
    chicken: "Frango",
    garlicBread: "Pão de Alho",
};
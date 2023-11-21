declare interface User {
    id: number,
    name: string,
    age: number,
    weight: number | null,
    token: string
}

declare interface WeightData {
    name: string,
    timestamp: Date,
    actual_weight: number,
    max_weight_loss_1: number,
    max_weight_loss_2: number,
    max_weight_loss_3: number,
    max_weight_loss_4: number,
    max_weight_loss_5: number,
    kcal_500_deficit: number,
    kcal_1000_deficit: number
}
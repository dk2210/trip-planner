class DataTimeLine {
    start_date: string | undefined
    end_date: string | undefined
}

export interface Data {
    city: string,
    start_date: string,
    end_date: string,
    date: DataTimeLine,
    budget: number,
    currency: string,
    travelling: string,
    accomodation: string,
    food: string
}

class DataTimeLine {
    start_date: string | undefined
    end_date: string | undefined
}

export interface Data {
    city: string,
    date: DataTimeLine,
    budget: string,
    currency: string,
    travelling: string,
    accomodation: string,
    food: string
}


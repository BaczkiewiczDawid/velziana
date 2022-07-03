type DishesType = {
    id: number,
    img: string,
    name: string,
    price: number,
    grammage: number,
    alt: string,
}

const DishesList: DishesType[] = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        name: 'Spaghetti bolonese with grilled cheese',
        price: 23,
        grammage: 340,
        alt: 'Spaghetti',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        name: 'Spaghetti bolonese with grilled cheese',
        price: 32,
        grammage: 430,
        alt: 'Spaghetti',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        name: 'Spaghetti bolonese with grilled cheese',
        price: 11,
        grammage: 130,
        alt: 'Spaghetti',
    },
]

export default DishesList
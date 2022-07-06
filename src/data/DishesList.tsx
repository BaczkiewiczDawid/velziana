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
        img: 'https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        name: 'African Sweet Potato Soup',
        price: 12,
        grammage: 240,
        alt: 'Soup',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Chinese Burnt Garlic Fried Rice',
        price: 14,
        grammage: 370,
        alt: 'Rice',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Pizaa with grilled ham and mushrooms',
        price: 27,
        grammage: 425,
        alt: 'Pizza',
    },
]

export default DishesList
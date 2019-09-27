const DEFAUL_STATE = [
    {
        id: 1,
        car: 'Audi',
        speed: 234,
        weight: 1.4,
        img: "https://img.drive.ru/i/3/5c641812ec05c47d4700012b"
    },
    {
        id: 2,
        car: 'BMW',
        speed: 230,
        weight: 1.8,
        img: "https://www.bmw-avilon.ru/upload/iblock/b08/b0858aeae88033e19a4c446d6a5d2887.png"
    },
    {
        id: 3,
        car: 'Mercedes',
        speed: 300,
        weight: 2,
        img: "https://cars.mercedes-benz.ru/Image/MBModelImageDesktopSmall/50"
    }
];

export default function(state = DEFAUL_STATE, action) {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'LOADED':
            return {...state, loading: false, cars: action.cars}

    }
    return  state;
}
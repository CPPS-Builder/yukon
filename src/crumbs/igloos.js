const igloos = {
    1: {
        name: 'Basic',
        scene: require('@igloos/basic/Basic').default,
        x: 760,
        y: 660
    },
    2: {
        name: 'Candy',
        scene: require('@igloos/candy/Candy').default,
        x: 760,
        y: 660
    },
    3: {
        name: 'DeluxeBlue',
        scene: require('@igloos/deluxeblue/DeluxeBlue').default,
        x: 720,
        y: 600
    },
    4: {
        name: 'BigCandy',
        scene: require('@igloos/bigcandy/BigCandy').default,
        x: 720,
        y: 600
    },
    8: {
        name: 'DeluxeStone',
        scene: require('@igloos/deluxestone/DeluxeStone').default,
        x: 720,
        y: 600
    },
    9: {
        name: 'DeluxeSnow',
        scene: require('@igloos/deluxesnow/DeluxeSnow').default,
        x: 720,
        y: 600
    }
}

export default igloos

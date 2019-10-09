const LIGHTS = [{
    id:1,
    name: "Kitchen Light",
    control: {
        circuit: "1",
        controller: "1",
        pin: 1
    },
    isOn: false,
    room: "Kitchen",
    groups: {
        "Home": true,
        "Kitchen On": true,
        "Nobodys Home": false
    }
},{
    id:2,
    name: "Kitchen Sink",
    control: {
        circuit: "1",
        controller: "1",
        pin: 2
    },
    isOn: false,
    room: "Kitchen",
    groups: {
        "Home": true,
        "Kitchen On": false,
        "Nobodys Home": false
    }
},{
    id:3,
    name: "Kitchen Lamp",
    control: {
        circuit: "1",
        controller: "1",
        pin: 3
    },
    isOn: false,
    room: "Kitchen",
    groups: {
        "Home": false,
        "Kitchen On": false,
        "Nobodys Home": true
    }
},{
    id:4,
    name: "Kitchen Lamp 2",
    control: {
        circuit: "1",
        controller: "1",
        pin: 4
    },
    isOn: false,
    room: "Kitchen",
    groups: {
        "Home": false,
        "Kitchen On": false,
        "Nobodys Home": true
    }
},{
    id:5,
    name: "Kitchen Lamp 3",
    control: {
        circuit: "1",
        controller: "1",
        pin: 5
    },
    isOn: false,
    room: "Living Room",
    groups: {
        "Home": false,
        "Live On": true,
        "Live Off": false,
        "Nobodys Home": false
    }
}]
const person = {
  firstName: 'Michael',
  lastName: 'Kochell',
  graduationYear: 2017,
};

let pancake
pancake = {
    weight: {
      unit: 'pounds',
      value: 3.4,
    },
    texture: 'fluffy',
    colour: 'orange',
    name: 'Billy',
}

const DEFAULT_ASTRONOMICAL_LENGTH_UNIT = 'lightyears'


const milkyWayGalaxy = {
  name: 'milky way',
  lengthOfCentralAxis: {
    value: 5000,
    unit: 'parsecs',
  },
  getLength: function() {
    const lengthObject = this.lengthOfCentralAxis
    return lengthObject.value
  }
}


class Galaxy {
  constructor(name, lengthObject) {
    this.name = name
    this.lengthOfCentralAxis = lengthObject
  }

  getLength() {
    const lengthObject = this.lengthOfCentralAxis
    return lengthObject.value
  }
}

const milkyWay2 = new Galaxy(
  'Milky Way',
  {unit: 'lightyears', value: 400}
)

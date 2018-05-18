const marshall = {
  FirstName: 'Marshall',
  LastName: 'Dixon'
  getFullName: function(){
    return this.FirstName + ' ' + this.LastName
  }
}

const thatOnePersonsName = marshall.getFullName()
console.log(thatOnePersonsName)

console.log(marshall.getFullName())

class Person {
  constructor(FirstName, LastName) {
    this.FirstName = FirstName
    this.LastName = Lastname
  }

  getFullName() {
    return this.FirstName + ' ' + this.LastName
  }
}

const michaelDude = new Person('Michael', 'Kochell')
const ianDude = new Person('Ian', 'Kenney')

const people = [
  michaelDude,
  ianDude,
]

for (let i=0; i < people.length; i++) {
  const person = people[i]
  const name = person.getFullName()
  console.log(name)
}

// this will call the enclosed function twice,
// once for each person
people.forEach(function(person) {
  const name = person.getFullName()
  console.log(name)
})

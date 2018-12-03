const API_BASE = "http://localhost:4141/fn"

const ANIMALS = [ "frog","horse","lion","wolf","platypus","narwhal","peacock","thunderbird","turtle","dragonfly","sloth","panther","whale","manatee","parrot","dolphin","hawk","crow","eagle","penguin","pangolin","tigershark","scorpion","ox"]

const endpoint = (name, data) => {
  const url = `${API_BASE}/AnimalTarot/${name}`
  return fetch(url, {
    method: 'post',
    body: (data),
  }).then(r => r.json())
}


document.querySelector('#pick').addEventListener('click',  e => {
    const name = ANIMALS[Math.floor(Math.random()*ANIMALS.length)];
    const description = `a ${name} is an animal`
    console.log("name: " + name + " description: " + description)
    endpoint('CardCreate', JSON.stringify({
        name: name, description: description  
    })).then(hash => {
        console.log(hash)
        endpoint('CardRead', hash).then(content => {
            console.log(content)
        })
    })
})

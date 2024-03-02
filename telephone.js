/*AJUZIEOGU TEKENA*/

class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = new Set();
  }

  add(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
    this.notify(phoneNumber);
  }

  remove(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    this.notify(phoneNumber);
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notify(phoneNumber) {
    for (let observer of this.observers) {
      observer.update(phoneNumber);
    }
  }
}

class Observer {
  constructor() {}

  update(phoneNumber) {
    if (phoneNumber === "2347023232") {
      console.log("Now dialling 2347023232");
    } else {
      console.log("Phone number: " + phoneNumber);
    }
  }
}

const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = new Observer();

telephone.addObserver(observer1);
telephone.add("2347023232");
telephone.dialPhoneNumber("2347023232");

telephone.addObserver(observer2);
telephone.dialPhoneNumber("2348033411413");
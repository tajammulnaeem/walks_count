function CounterViewModel() {
  var self = this;

  self.userName = ko.observable("Everyone");
  self.count = ko.observable(0);
 
  //   increase count function
  self.increaseCount = function () {
    self.count(self.count() + 1);
  };

  //   decrease count function
  self.decreaseCount = function () {
    let curVal = self.count();
    if (curVal > 0) {
      self.count(curVal - 1);
    }
  };

   //   day status
   self.dayStatus = ko.computed(function () {
    let c = self.count();
    if (c === 0) {
      return "No one is there";
    }
    if (c <= 5 & c > 0) {
      return "Normal Day";
    }
    return "Busy Day";
  });
}

ko.applyBindings(
  new CounterViewModel(),
  document.querySelector("#knockout-app")
);

// singleton pattern  refers to an single state in an application
// define a class that has only one instance and provides a global point of access to it
// there are two types of initilization for this pattern lazy and early initilization

//lets look at lazy initilization

class globalStates {
  private static Instance: globalStates;

  constructor() {}
  //it checks wheather the instance is alloted previously befor getting new data
  public static getInstacne(): globalStates {
    if (!globalStates.Instance) {
      globalStates.Instance = new globalStates();
    }
    return globalStates;
  }
}

var firstInstance = globalStates.getInstacne();
console.log(firstInstance);

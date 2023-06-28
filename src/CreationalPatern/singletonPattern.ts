interface Singleton {
  userInfo: object;

  getInstance(): object;
}

class Singleton implements Singleton {
  private static instance: Singleton;

  getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      return Singleton.instance;
    } else {
      return Singleton.instance;
    }
  }
}


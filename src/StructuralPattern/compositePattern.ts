/**
  Composite pattern suggest a tree pattern 
  this pattern follows a tree like structure 
   we createa root class which will be an abstract calls 
    the base for all class and all the childern classed will be
    derived from it direactly or indireactly.s
 **/

abstract class VehicalComponent {
  protected parent!: VehicalComponent | null | string;

  public setParent(parent: string) {
    this.parent = parent;
  }

  public getParent() {
    return this.parent;
  }
  public addComp(component: object | string | null): void {}

  public getComp() {}

  public removeComp(component: VehicalComponent): void {}

  public isComposite(): boolean {
    return false;
  }
}

/**
 * this is a child component from a root class
 * aslo called as a leaf
 *
 *
 */
class Chassy extends VehicalComponent {
  constructor() {
    super();
  }
  public setParent(parent: VehicalComponent | null | string): void {
    this.parent = parent;
  }
  protected chassyCompostion: object[] = [];
  public addComp(component: string | object | null): void {
    this.chassyCompostion.push({ component });
  }
}

/**
 * this is another leaf componet derived from chassy componet
 */
class Doors extends Chassy {
  protected Door: object[] = [{ ...this.chassyCompostion }];
  constructor() {
    super();
  }
  public addComp(component: string | object | null): void {
    this.Door.push({ component });
    this.chassyCompostion.push({ ...this.Door });
  }

  public getComp(): object {
    return this.Door;
  }
}

class GlassPanel extends Chassy {
  protected glasspanel: object[] = [{ ...this.chassyCompostion }];
  constructor() {
    super();
  }
  public addComp(component: string | object | null): void {
    this.glasspanel.push({ component });
    this.chassyCompostion.push({ ...this.glasspanel });
  }
}

/**
 * lets take a look at the compostie strucrure we created
 *
 *              VelicalComponent
 *                   |
 *                   v
 *                 Chassy
 *                   /\
 *                  /  \
 *                 /    \
 *                /      \
 *              Door     GlassPanel
 *
 */

var vehical = new Chassy();
vehical.setParent("bike");
vehical.addComp({ name: "bike", size: "lg" });

const bike = new Doors();
console.log(bike.getParent());
bike.addComp({ tyres: "sm" });

console.log(bike.getComp());

export type Constructor<T = any> = { new(...args: any[]): T }

export type Indexable = { [key: string]: any }

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export function Model<T extends Constructor>(constructor: T){
  return class extends constructor {
    constructor(...args: any[]){
      super();
      this.init(args[0]);
    }
  }
}

export class Base<T> {
    constructor(payload: DeepPartial<T>){}
  
    private init(payload: any){
      for(const key in payload){
        if(this.hasOwnProperty(key)){
          const factory: Constructor = Reflect.getMetadata('design:type', this, key);
          (this as Indexable)[key] = factory ? new factory(payload[key]) : payload[key];
        }
      }
    }
  }

  const CONSTRUCTOR_META = Symbol('CONSTRUCTOR_META')

  export function Primed(constructor?: Constructor) {
    return (instance: any, propertyKey: string) => {
      if(constructor)
        Reflect.defineMetadata(CONSTRUCTOR_META, constructor, instance, propertyKey)  
    }
  }
  
  
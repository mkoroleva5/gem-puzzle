/* export class EventObserver<T> {
  observers: Array<(data: T) => void>;

  constructor() {
    this.observers = [];
  }

  subscribe(fn: (data: T) => void) {
    this.observers.push(fn);
  }

  unsubscribe(fn: (data: T) => void) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data: T) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}
 */
/* export class EventObserver<T> {
  private subscribers: Map<keyof T, Array<(value: T[keyof T]) => void>> = new Map();

  subscribe<K extends keyof T>(field: K, callback: (value: T[K]) => void) {
    if (!this.subscribers.has(field)) {
      this.subscribers.set(field, []);
    }

    this.subscribers.get(field)?.push(callback);
  }

  unsubscribe<K extends keyof T>(field: K, callback: (value: T[K]) => void) {
    const fieldSubscribers = this.subscribers.get(field);

    if (fieldSubscribers) {
      this.subscribers.set(
        field,
        fieldSubscribers.filter((subscriber) => subscriber !== callback),
      );
    }
  }

  broadcast<K extends keyof T>(field: K, value: T[K]) {
    const fieldSubscribers = this.subscribers.get(field);

    if (fieldSubscribers) {
      fieldSubscribers.forEach((subscriber) => subscriber(value));
    }
  }
}
 */
type SubscriberCallback<T> = (newState: T) => void;

export class EventObserver<T> {
  private stateInstance: T;
  private subscribers: Map<keyof T, SubscriberCallback<T>[]> = new Map();

  constructor(stateInstance: T) {
    this.stateInstance = stateInstance;
  }

  subscribe<K extends Array<keyof T>>(
    dependencies: K,
    callback: SubscriberCallback<{ [key in K[number]]: T[key] }>,
  ) {
    dependencies.forEach((dependency) => {
      if (!this.subscribers.has(dependency)) {
        this.subscribers.set(dependency, []);
      }

      this.subscribers.get(dependency)?.push(callback);
    });
  }

  unsubscribe<K extends keyof T>(dependency: K, callback: SubscriberCallback<T>) {
    const dependencySubscribers = this.subscribers.get(dependency);

    if (dependencySubscribers) {
      this.subscribers.set(
        dependency,
        dependencySubscribers.filter((subscriber) => subscriber !== callback),
      );
    }
  }

  broadcast<K extends keyof T>(dependency: K, newValue: T[K]) {
    const dependencySubscribers = this.subscribers.get(dependency);

    if (dependencySubscribers) {
      dependencySubscribers.forEach((subscriber) => {
        const newState = { ...this.stateInstance, [dependency]: newValue };

        subscriber(newState);
      });
    }
  }
}

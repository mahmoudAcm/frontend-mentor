type EventType = 'validateFirstStep' | string;
type Callback<T> = (data: T) => void;
type EventMap = Map<EventType, Callback<any>[]>;

const eventBus: EventMap = new Map();

export const $emit = <T = any>(event: EventType, data: T) => {
  if (eventBus.has(event)) {
    eventBus.get(event)!.forEach(callback => callback(data));
  }
};

export const $on = <T>(event: EventType, callback: Callback<T>) => {
  if (!eventBus.has(event)) {
    eventBus.set(event, []);
  }
  eventBus.get(event)!.push(callback);
};

export const $off = (event: EventType) => {
  if (eventBus.has(event)) eventBus.delete(event);
};

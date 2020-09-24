import compute from '../utils/compute';

export const onDirective = (
  el: HTMLElement | any,
  name: string,
  value: string | any,
  data: ProxyConstructor | any
) => {
  const eventTokens = name.split('.');
  const eventName = eventTokens[0].split(':')[1];
  const eventProp = eventTokens[1] || null;

  el[`on${eventName}`] = (event: Event) => {
    if (eventProp === 'prevent') event.preventDefault();
    if (eventProp === 'stop') event.stopPropagation();
    compute(value, data, false);
  };
};

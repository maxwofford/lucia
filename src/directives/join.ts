import compute from '../helpers/compute';
import { directiveArgs } from '../helpers/interfaces';

export const joinDirective = ({ el, value, view }: directiveArgs) => {
  const parts = value.split('by ');
  const out = compute(parts[0], view);

  if (out !== undefined) {
    el.innerHTML = out.join(parts[1] || '');
  } else {
    el.innerHTML = parts[0].join(parts[1] || '');
  }
};

import { format } from 'date-fns';

function formatDate(time) {
  return format(new Date(time), 'M-dd-yy');
}

function numberWithCommas(x) {
  try {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (e) {
    return '0';
  }
}

export { formatDate, numberWithCommas };

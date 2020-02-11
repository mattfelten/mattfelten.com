import { format, parseISO } from 'date-fns'

export const readibleDate = (date) => format(parseISO(date), 'yyyy MMMM d');

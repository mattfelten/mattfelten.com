import { format, parseISO } from 'date-fns'

export const readibleDate = (date, formatString = 'yyyy MMMM d') => format(parseISO(date), formatString);

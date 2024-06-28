import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

const formatDateString = (dateString: string): string => {
    const date = parseISO(dateString);
    return format(date, "dd, MMMM, yyyy", { locale: es });
};

export default formatDateString;

import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es });
  };
  
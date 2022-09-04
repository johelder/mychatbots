export const formatDate = (date: string, culture = 'pt-BR') => {
  return new Intl.DateTimeFormat(culture, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
};

export function formatNumber(value: any) {
  if(!value) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
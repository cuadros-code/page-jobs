const formatSalary = ( salary: string ) => {
  return new Intl.NumberFormat('es-ES', { 
    style: 'currency', 
    currency: 'COP' }
  ).format(Number(salary))
} 

export default formatSalary
const formatDate = ( date: string ) => {

  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric' 
  }).format(Number(date))
} 

export default formatDate
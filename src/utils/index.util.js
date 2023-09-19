export const currencyFormat = (value=0)=>{
    return `AOA ${value.toLocaleString('pt-AO',{
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })}`
}
  
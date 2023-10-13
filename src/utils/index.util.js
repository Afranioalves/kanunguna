export const currencyFormat = (value=0)=>{
    return `AOA ${value.toLocaleString('pt-BR',{
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })}`
}
  
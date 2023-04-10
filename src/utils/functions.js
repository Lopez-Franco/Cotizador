export const getHistoryLS = () => {
    return JSON.parse(localStorage.getItem('history')) || [];
}
export const setHistoryLS = (insurance) => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
     const quoteInsurance = {
       date: new Date().toLocaleString(),
       property: insurance.property.type,
       location: insurance.location.type,
       mts2: insurance.mts2,
       import: insurance.costInsurance()
     }
     history.push(quoteInsurance);
     localStorage.setItem('history', JSON.stringify(history));
  }
export const filterByCategory = (data) => {
    const locations = [];
    const properties = [];

    data.forEach((e) => {
        if (e.category === 'ubicacion') {
            locations.push({
                id: e.id,
                type: e.type,
                factor: e.factor
            })
        } else {
            properties.push({
                id: e.id,
                type: e.type,
                factor: e.factor
            })
        }
    });
    return [locations,properties]
}
export const isDefault = (object)=>{
  return object.type === '' && object.factor === '';
}
export const formatCurrency = (n) =>{
    return n.toLocaleString('es-AR',{style: "currency", currency: "ARS", minimumFractionDigits: 2});
}

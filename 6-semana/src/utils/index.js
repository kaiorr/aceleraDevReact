function SearchByName(data, value) {
  return data.filter(entry => entry.name.toLowerCase().includes(value.toLowerCase()))
}

function OrderByField(data, field, direction) {

  if(field && direction) {
    return data.sort((a, b) => {
      if (direction === 'down') {

        return (a[field] < b[field]) ? -1 : 1

      } else if (direction === 'up') {

        return (a[field] < b[field]) ? 1 : -1
      }
    })
  } else {

    return data

  } 
}

export {
  SearchByName, OrderByField
}

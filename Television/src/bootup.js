window.storage = function (key,value) {
  if(value!==undefined){
    let _value
    try {
      _value= JSON.stringify(value)
    } catch {
      _value = value
    }
    window.localStorage.setItem(key,_value)
    return true
  } else {
    let _value
    try {
      _value = JSON.parse(window.localStorage.getItem(key))
    }
    catch {
      _value = window.localStorage.getItem(key)
    }
    return _value
  }
}

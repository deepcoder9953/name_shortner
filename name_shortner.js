function nameShort(name, max_length){
if(name.length > max_length){
   return name.substring(0, max_length) + "..."
}
return name
}

let new_namw = nameShort("deepanshusharma", 5)
console.log(new_namw)

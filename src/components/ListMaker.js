function ListMaker(props) {
  return props.items.map((item, index) => {
    return <li key={index}>{item.input}</li>;
  })
}

export default ListMaker;
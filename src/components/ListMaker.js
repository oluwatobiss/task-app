function ListMaker(props) {
  return props.items.map((item) => {
    return <li key={item.id}>{item.input}</li>;
  })
}

export default ListMaker;
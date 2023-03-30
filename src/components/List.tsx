import React, { FC } from 'react'

interface ListProps<T> {
  // T это тип передаваемых данных
  items: T[]
  //это компонент который нужно будет отрисовать
  renderItem: (item: T) => React.ReactNode
}

// универсальный(переиспользуемый) компонент список чего-то. НО чтобы корректно работать с дженериками лучше объявить компонент через function

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>
}

import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  //не управляемый инпут
  const inputRef = useRef<HTMLInputElement>(null)

  //React.ChangeEvent тип для onChange и дженерик для какого элеиента. для инпута HTMLInputElement
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  //все события с мышкой React.MouseEvent
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG')
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP')
  }

  //draggable делает объект перетаскиваемый
  //onDrag начало перемещения
  //onDrop типа переместили элемент
  //onDragLeave когда вышли за пределы
  //onDragOver когда внутри блока
  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type='text'
        placeholder='Управляемый'
      />
      <input ref={inputRef} type='text' placeholder='Неуправляемый' />
      <button onClick={clickHandler}>rheheh</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red', marginBottom: 5 }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red' }}
      ></div>
    </div>
  )
}

export default EventsExample

import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useSelector } from 'react-redux';  //Khi su dung useSelector thu khong can import store nua, neu ko thi phai dung store.getState() de lay ra cac object state duoc tao boi reducer function 
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { todoSlice } from '../../redux/slices/todoSlice';
import store from '../../redux/store';
import todoSelector from '../../redux/todoSelector';
export default function TodoList() {
  //Khong nen su dung getState() ben ngoai vi no khong the cap nhat kip luc giao dien re-render ma nen dung useSelector hoac getState() ngay ben trong component luon 
//Render lai nhieu lan => Khong on => Se co 1 cach khac 
  // const todos = useSelector(state => {
  //   const filterSearch = state.filter.search 
  //   const filterPriority = state.filter.priority 
  //   const filterStatus = state.filter.status 
  //   let todos = state.todoList 
  //   function filterByTextAndPriority(todo) {
  //     return todo.name.includes(filterSearch) && (filterPriority.length == 0 || filterPriority.includes(todo.priority)) 
  //   }
  //   const remainTodos = todos.filter(todo => filterByTextAndPriority(todo)) 
  //   switch (filterStatus) {
  //     case 'All':
  //         return remainTodos
  //     case 'To do': 
  //         return remainTodos.filter(todo => todo.priority == false)
  //     case 'Completed': 
  //         return remainTodos.filter(todo => todo.prioriry == true) 
  //     default:
  //       return remainTodos
  //   }
  // })
  const todos = useSelector(todoSelector)  //giup giam di viec re-render lai giao dien, chi re-render lai component do khi ma cac inputSelector thay doi 
  //O day chung ta dung useState name thi neu nhu dung useSelector thang o trong thi cac component do cung re-render khi name, setName duoc set lai 
  const [name , setName] = useState('')
  const [priority , setPriority] = useState('Medium')
  const handleNameInput = (e) => {
    setName(e.target.value) 
  }
  const handlePrioritySelection = (value) => {
    setPriority(value)
  }
  const dispatch = useDispatch() 
  const buttonAddClick = () => {
    dispatch(todoSlice.actions.addtodo({
        id: Date.now().toString(), 
        name: name, 
        priority: priority, 
        completed: false 
    }))
    console.log(store.getState().todoList)
  }
  const handleTodoClick = (id) => {
    dispatch(todoSlice.actions.toggletodo(id))
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todos.map(todo => {
            return <Todo key = {todo.id} name = {todo.name} prioriry={todo.priority} onClick = {() => handleTodoClick(todo.id)}/>
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange = {handleNameInput} style = {{backgroundColor: 'white'}}/>
          <Select onChange = {handlePrioritySelection} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick = {buttonAddClick} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

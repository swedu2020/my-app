import React, { useCallback, useMemo, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
        const { name, value } = e.target;
        setInputs({
        ...inputs,
        [name]: value
        });
    }, [inputs]
   );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(users.length+1);
  const onCreate = useCallback(
    () => {
        const user = {
        id: nextId.current,
        username,
        email
        };
        setUsers(users.concat(user));
        setInputs({
        username: '',
        email: ''
        });
        nextId.current += 1;
    }, [username, email]
  );

  const onRemove = useCallback(
    id => {
        setUsers(users.filter(user => user.id !== id));
        nextId.current -= 1;
    }, [users]
  )

  const onToggle = useMemo(
    () => id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }, [users]
  )
 
  const count = useMemo(()=>countActiveUsers(users), [users]);
 
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}
         onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
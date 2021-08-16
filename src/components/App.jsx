import React, { useReducer } from 'react'

const initialState = {
  accessibility: '',
  activity: '',
  participants: '',
  cost: '',
  type: '',
  count: 0
}

const reducer = (state, action) => {
  switch(action.type){
    default:
      return {
        ...state,
        accessibility: action.accessibility,
        activity: action.activity,
        participants: action.participants,
        cost: action.cost,
        activityType: action.activityType,
        count: state.count + 1
      }
  }
}

export const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchAPI = () => {
    fetch('https://www.boredapi.com/api/activity')
      .then(raw => raw.json())
      .then(data => {
        const { accessibility, activity, participants, price, type } = data;
        const activityType = type;
        let cost;

        if(price<0.33){
          cost = 'low';
        }else if(price<0.66){
          cost = 'medium';
        }else{
          cost = 'high';
        }

        console.log(cost, price);

        dispatch({type: '',
          accessibility, activity, participants, cost, activityType
        })
      });
  };


  return (
    <div>
      <button onClick={fetchAPI}>아 오늘 머하지</button>
      {state.activity && <p>
        How About: {state.activity + ' '}
        ({state.participants && (Number(state.participants) - 1 !== 0 ? `with ${Number(state.participants) - 1} person${Number(state.participants) === 2 ? '' : 's'}` : `alone`)})
      </p>}
      {}
      {state.cost && <p>Cost: {state.cost}</p>}
      {state.type && <p>TYPE: {state.type}</p>}
      {<p>총 {state.count}번 검색했습니다.</p>}
    </div>
  )
}
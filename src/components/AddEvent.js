import React from 'react';

export default ({updateEvent}) => {

  const sendEvent = (e)=>{
    e.preventDefault();
    const name   = e.target.name.value.trim();
    if(name === "")
      return alert('Enter the name of Event!');
    const event  = {
                    name  : name,
                    fee   : e.target.fee.value.trim(),
                    people: e.target.people.value.trim(),
                  }
    e.target.name.value   = '';
    e.target.fee.value    = '';
    e.target.people.value = '';
    updateEvent(event);
  }
  return(
    <div className="create-events">
      <form onSubmit={sendEvent}>
        <input type="text"
               name="name"
               placeholder="Name of event"
               maxLength="50"
               required/>
             <input type="number"
               name="fee"
               placeholder="Partisipation fee"
               required
               maxLength="6"/>
        <input type="number"
               name="people"
               placeholder="Max number of participants"
               required
               maxLength="6"/>
        <button>Create</button>
      </form>
    </div>
  )
}

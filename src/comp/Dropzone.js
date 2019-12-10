import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Styles = styled.div`

  .avatar {
    height: 150px;
    width: 150px;
    background-color: #e5e5e5;
  }

`;

const Dropzone = ({ isDropDisabled, info, id }) => (
    <div className="column xs= col-4">
      <div className="divider" data-content={id.toUpperCase()} />
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {provided => {
          return (
            <div className="menu hero-list" {...provided.droppableProps} ref={provided.innerRef}>
              {info.map(({ name }, index) => (
                <Hero key={name} name={name} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
);

const Hero = ({ name, index }) => (
  <Styles>
    <Draggable key={name} draggableId={name} index={index}>
      {provided => {
        return (
            <div

              className="menu-item tile tile-centered"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="avatar mx-auto"><img src={`./icons/${name.toLowerCase().replace(' ', '-')}.png`} alt={name} /></div>
            </div>
        );
      }}
    </Draggable>
  </Styles>  
);

export default Dropzone ;
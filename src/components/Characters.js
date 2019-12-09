import React, { useContext } from "react";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";
import DragItem from "./DragItem";

function Characters() {
  const { items, moveItem } = useContext(GridContext);

  return (
    <div className="Characters">
      <Grid>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default Characters;
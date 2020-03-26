import React from 'react';
import styled from 'styled-components'
import StoryWapper from '../../core/components/story-wapper'
import ColorField from '../../core/components/color-field'
import {COLOR_TOPIC, COLOR_TABLE} from '../../core/constant'

const StyledStoryWapper = styled(StoryWapper)`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
`

const GroupTitle = styled.div`
  margin-bottom: 30px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;

  .color-field {
    margin-bottom: 20px;
    flex-basis: 50%;
  }
`

const ColorContent = () => {
  return (
    <StyledStoryWapper>
      { COLOR_TOPIC.map((item) => {
        return (
        <div>
          <GroupTitle>{item}</GroupTitle>
          <List>
            { COLOR_TABLE[item].map((item) => {
                return <ColorField value={item} />
              })
            }
          </List>
        </div>
        )
    })}
    </StyledStoryWapper>
  )
}

ColorContent.prototype = {
  
}

export default ColorContent



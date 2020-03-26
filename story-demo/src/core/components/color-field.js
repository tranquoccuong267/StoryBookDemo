import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ColorTable from '../constant'

const Wraper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`

const Field = styled.div`
  height: 100%;
  width: 60px;
  background-color: ${(props) => props.fieldColor};
  ${(props) => props.isBorder && `
    border: 1px solid #95989A;
  `};
  border-radius: 7px;
`

const Content = styled.div`
  margin-left: 20px;
`

const ColorName = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  white-space: nowrap;
`

const Code =  styled.div`
  font-size: 14px;
  font-weight: bold;
`

const ColorField = ({value}) => {
  const colorName = Object.keys(value)[0]
  return (
    <Wraper className='color-field'>
      <Field fieldColor={value[colorName]} isBorder={colorName === 'White'}/>
      <Content>
        <ColorName>{colorName}</ColorName>
        <Code>{value[colorName]}</Code>
      </Content>
    </Wraper>
  )
}

ColorField.prototype = {
  value: PropTypes.object,
}

export default ColorField
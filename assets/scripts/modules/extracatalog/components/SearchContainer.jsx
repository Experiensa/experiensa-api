import React from 'react'
import { Segment } from 'semantic-ui-react'
import SearchItem from './filters/SearchItem'

class SearchContainer extends React.Component {
  constructor(){
      super()
  }
  render() {
    return(
      <Segment fluid styled>
        <SearchItem/>
      </Segment>
    )
  }
}
export default SearchContainer;
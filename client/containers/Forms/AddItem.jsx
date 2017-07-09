import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCategories} from '../../actions/categories'
import {addItem} from '../../actions/items'

class AddItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dispatch: props.dispatch,
      newItem: {},
      categories: {},
      submitted: false,
      message: ''
    }
  }

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  handleChange (e) {
    let newItem = this.state.newItem
    newItem[e.target.name] = e.target.value
    this.setState({newItem})
    console.log({newItem});
  }

  handleSubmit (e) {
    e.preventDefault()
    this.state.dispatch(addItem(this.state.newItem))
    this.setState({submitted: true, message: 'Your item has been added to the database.'})
  }

  refreshForm () {
    this.setState({newItem: {}, submitted: false, message: ''})
  }

  renderMessage () {
    return <div>
      <Link to={`/`}><h4 className="submit-message">{this.state.message}</h4></Link>
      <button onClick={(e) => this.refreshForm()}>Start New Form</button>
    </div>
  }

  renderForm () {
    return (
      <form className='admin-form' onSubmit={(e) => this.handleSubmit(e)}>
        <h4>Add New Item to Database</h4>
        <hr className='orange-hr' />
        <p>Please select a category for your item to be listed under, then add the item's information.</p>
        <div>
          <select className="drop-menu" name="category_id" value={this.state.newItem.category_id} onChange={(e) => this.handleChange(e)}>
            {this.props.categories.map((category, key) => {
              return <option value={category.category_id}>{category.category_name}</option> })}
          </select>
          <label className="labelone" htmlFor="name"> Item Name: </label>
            <input type='text' id='itemClass_name' name='itemClass_name' value={this.state.newItem.itemClass_name} onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Item Information: </label>
            <textarea type='text' id='itemClass_info' name='itemClass_info' value={this.state.newItem.itemClass_info} onChange={(e) => this.handleChange(e)} />
          <label className="labelone" htmlFor="name"> Item Image URL: </label>
            <input type='text' id='itemClass_img' name='itemClass_img' value={this.state.newItem.itemClass_img} onChange={(e) => this.handleChange(e)} />
          <button className="btn" type="submit">Submit New Item</button>
        </div>
      </form>
    )
  }

  render () {
    return (
      <div className = 'wallpaper-no-border'>
        <div className='container form'>
          {this.state.submitted ? this.renderMessage() : this.renderForm() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {itemClass: state.itemClass, categories: state.categories}
}

export default connect(mapStateToProps)(AddItem)

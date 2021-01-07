import React from 'react';


class SearchBar extends React.Component {
    state = { inputValue: ' '};

    onFormSubmit = (event) => {
        event.preventDefault();
       this.props.onSubmitTerm (this.state.inputValue );
    }
     
    render() {
       // console.log( this.state.inputValue );
        return(
        <div className = "ui segment">
           <form className = "ui form"
                 onSubmit = { this.onFormSubmit }
           >
             <div className = "ui field">
               <div className="ui icon input">
                
                    <input 
                     type = "text" 
                     placeholder = "Search..."
                     onChange = { e => this.setState( { inputValue: e.target.value }) }
                     value = { this.state.inputValue.toUpperCase() }
                     ></input>
                    <i className="search icon"></i>
               </div> 
             </div>
           </form>
        </div>
       );
    }
}

export default SearchBar;
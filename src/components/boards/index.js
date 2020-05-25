import React, { Component } from 'react'

import List from './elements/list'
import NewBoard from './elements/newboard'

class Boards extends Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: false,
            lists: [
                {
                    title: "Title one",
                    items: [   
                        {
                            content: "One"
                        },
                        {
                            content: "Two"
                        }
                    ]
                },
                {
                    title: "Title two",
                    items: [   
                        {
                            content: "Three"
                        },
                        {
                            content: "Four"
                        }
                    ]
                }
            ]
        }

        this.addBoard = this.addBoard.bind(this);
    }

    addBoard(value) {
        console.log("htis")
        let { lists } = this.state;
        lists.push({"title": value, items: []})

        this.setState({newItem: false})
        console.log(lists)
    }

    addItem(key, value) {
        this.setState({updateState: value})
    }

    render() {
        return (
            <div className="boards-container d-flex flex-auto flex-column clearfix position-relative no-wrap">
                <div className="boards d-flex flex-auto flex-row p-sm-3 position-relative overflow-auto border-black">
                    {this.state.lists.map((list, key) => {
                        return <React.Fragment key={key}>
                            <List list={list} id={key} addItem={this.addItem.bind(this, key)} lists={this.state.lists}/>
                        </React.Fragment>
                    })}
                    
                {this.state.newItem 
                ? <NewBoard addBoard={this.addBoard.bind(this)} />
                : <button className="newBoard" onClick={() => this.setState({newItem: true})}>Add new board</button>}
                </div>
            </div>

        )
    }
}

export default Boards;
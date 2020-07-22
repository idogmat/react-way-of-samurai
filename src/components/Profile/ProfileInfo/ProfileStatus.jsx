import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title:'Yo'
    }

    activateEditMode=()=> {
        this.setState({
            editMode:true
        })
        //setState-async method
        // this.state.editMode=true;
        //this.forceUpdate();
        //forceUpdate-на крайний случай(форсит перерисовку)
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input type="text" onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
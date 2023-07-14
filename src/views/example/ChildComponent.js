import React from 'react';
import { Button, DatePicker } from 'antd';
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState(
            { showJobs: !this.state.showJobs }
        )
    }

    handleOnclickDelete = (job) => {
        console.log('>>> delete job: ', job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                <div>
                    <DatePicker placeholder="select date" />
                </div>
                {showJobs === false ?
                    <div>
                        <Button className='btnShow' type="primary" onClick={() => this.handleShowHide()}>Show</Button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            &nbsp;
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <Button type="primary" onClick={() => this.handleShowHide()}>Hide</Button>
                        </div>
                    </>
                }
            </>
        )

    }
}

// const ChildComponent = (props) => {

//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }

//                     })

//                 }

//             </div>
//         </>
//     )
// }
export default ChildComponent;
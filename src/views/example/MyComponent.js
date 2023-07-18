import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abc-job1', title: 'Developer', salary: '500' },
            { id: 'abc-job2', title: 'Tester', salary: '400' },
            { id: 'abc-job3', title: 'Project Manager', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent', job)
        // let currentJob = this.state.arrJobs;
        // currentJob.push(job);
        this.setState(
            {
                arrJobs: [...this.state.arrJobs, job]
                // arrJobs: currentJob
            }
        )
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState(
            {
                arrJobs: currentJob
            }
        )
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;
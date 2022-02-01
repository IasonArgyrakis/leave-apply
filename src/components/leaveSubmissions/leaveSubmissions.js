function LeaveSubmissions() {
    const dummydatda = [
        {
            "start": "2022-10-1",
            "end": "2022-10-3",
            "count": "2",
            "status": "pending",
            "reason": "Summer0",
        },
        {
            "start": "2022-10-1",
            "end": "2022-10-3",
            "count": "2",
            "status": "approved",
            "reason": "Summer1",
        },
        {
            "start": "2022-10-1",
            "end": "2022-10-3",
            "count": "2",
            "status": "denied",
            "reason": "Summer2",
        },
        {
            "start": "2022-10-1",
            "end": "2022-10-3",
            "count": "2",
            "status": "approved",
            "reason": "Summer3",
        }


    ]

    return (<div>
        {dummydatda.map(item => {
            return (
                <div className="card my-1">
                    <div className="card-body hx-1">
                        <div className="d-flex flex-row justify-content-evenly ">
                            <h5 className=" mx-auto text-dark">{item.start}</h5>
                            <h5 className=" mx-auto text-dark">{item.end}</h5>
                            <h5 className=" mx-auto text-dark">{item.count}</h5>
                            <h5 className=" mx-auto text-dark">{item.status}</h5>
                            <h5 className=" mx-auto text-dark ">{item.reason}</h5>
                            <div/>
                        </div>
                    </div>
                </div>)
        })}</div>)

}


export default LeaveSubmissions
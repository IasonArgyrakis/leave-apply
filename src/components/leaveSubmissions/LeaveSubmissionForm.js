

function leaveSubmissionForm() {
    return (
        <div className="p-2">
            <form>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input type="date"   className="form-control" id="startDate" aria-describedby="startDate"/>

                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input type="date"  className="form-control" id="endDate" aria-describedby="endDate"/>
                </div>
                <div className="mb-3">
                    <textarea name="Reason" cols="40" placeholder="Reason" rows="5"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
}

export default leaveSubmissionForm
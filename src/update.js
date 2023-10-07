import 'bootstrap/dist/css/bootstrap.min.css'

export let Updatepage=()=>
{
    return(
        <>
            <div className='container row justify-content-center'>
            <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bank2"></i>Indian Bank Registration</h4>
                <div className="row justify-content-center " >
                    <div className="mt-3">
                                <label className="form-label" >Account Balance</label>
                                <input type="number" 
                                name="acc_bal"
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >account Holder</label>
                                <input type="text" 
                                name="acc_holder"
                                className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3"  >UPDATE</button>
                        <button className="btn btn-outline-danger col-3 me-3"  type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
        </div>
        </>
    );
}
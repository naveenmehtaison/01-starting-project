import './UserDetails.css'

const SubmitData = (props) => {
    console.log('data is being submitted', props);

    return (
        <div>

                <div className='expense-item__description'>
                    <div className='expense-item__price'>
                        <h2>{props.name}</h2>
                        <h2>{props.age}</h2>
                    </div>
                </div>

        </div>
    );
};

export default SubmitData;


import React from 'react'
import ToastAutoHide from '../ToastAutoHide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

class ItemCard extends React.Component {
    covertStep(step) {
        if (step === 0) return 'Created'
        else if (step === 1) return 'Selling'
        else if (step === 2) return 'Sold'
        else return 'Delivered'
    }

    addressOverflow(address) {
        return `${address.substring(0, 5)}...${address.substring(37, 42)}`
    }

    purchaserCheck(address) {
        return (address === '0x0000000000000000000000000000000000000000') ? 'Not yet' : address
    }

    render() {
        return (
            <div className='col-12 col-sm-6 col-lg-4 col-xl-3 mb-4'>
                <div className='card shadow-sm'>
                    <img src={this.props.data.picture} className="w-100" style={{ objectFit: 'cover', height: '250px' }} alt={this.props.data.name} />
                    <div className="card-body">
                        <h5 className="card-title text-nowrap overflow-hidden" style={{ textOverflow: 'ellipsis' }}>{this.props.data.name}</h5>
                        <h6 className="card-subtitle text-muted mb-2">Owner: {this.addressOverflow(this.props.data.owner)}</h6>
                        <div className='row'>
                            <div className='col text-start'>
                                <div className="card-text text-nowrap overflow-hidden text-secondary" style={{ textOverflow: 'ellipsis' }}>
                                    <ToastAutoHide message='Copy' feedback='Copied!' title={this.addressOverflow(this.props.data._id)} content={this.props.data._id} />
                                </div>
                            </div>
                            <div className='col text-end'>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faEthereum} className='text-primary'/> {(Number(this.props.data.price) / 1000000000000000000).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ItemCard;
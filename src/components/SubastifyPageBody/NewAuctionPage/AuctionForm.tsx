import * as React from 'react';


class AuctionForm extends React.Component {

    public render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="auctionTitle">Auction Title</label>
                    <input type="text" className="form-control" id="auctionTitle" aria-describedby="titleHelp" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Product description</label>
                    <textarea className="form-control" id="description" placeholder="Product description..." />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Product Image</label>
                    <input type="url" className="form-control" id="image" placeholder="Enter image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Auction Initial Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Enter a price" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Auction Initial Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Enter a price" />
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Auction Due Date</label>
                    <input type="date" className="form-control" id="dueDate" placeholder="Enter an expiration date" />
                </div>
                <button type="submit" className="btn btn-primary">Publish</button>
            </form>
        );
    }
}

export default AuctionForm;